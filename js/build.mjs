import { bundle } from "./tools/bundle.mjs";
import { bundle_css } from "./tools/css.mjs";
import { node_modules_external } from "./tools/externals.mjs";
import { vendor } from "./tools/vendor.mjs";

import { webDarkTheme, webLightTheme } from "@fluentui/tokens";
import fs from "fs";
import path from "path";
import cpy from "cpy";

// The libraries served under their own bare specifiers (see tools/vendor.mjs): Fluent, the FAST
// runtime its elements are built on -- a library extending Fluent's classes has to share it -- and
// the token objects its themes are made of.
const VENDORED = [
  "@fluentui/web-components",
  "@microsoft/fast-element",
  "@fluentui/tokens",
];

const VERSION = JSON.parse(
  fs.readFileSync("node_modules/@fluentui/web-components/package.json", "utf8"),
).version;

// Every element's define module, `@fluentui/web-components/<name>.js`, behind the define-guard. The
// guard is a module of its own, imported first: every import evaluates before the importing
// module's body, so an inlined guard would install too late. The specifiers stay imports, resolved
// by the page's import map.
const COMPONENTS = "node_modules/@fluentui/web-components/dist/esm";
const defines = fs
  .readdirSync(COMPONENTS)
  .filter((name) => fs.existsSync(`${COMPONENTS}/${name}/define.js`))
  .map((name) => `import "@fluentui/web-components/${name}.js";`)
  .join("\n");
const ENTRY = {
  contents: [
    'import { restoreDefine } from "./define-guard.js";',
    defines,
    "restoreDefine();",
    // the version actually served, so a page holding a second copy can compare and refuse rather
    // than half-work
    `Object.defineProperty(globalThis, "__spadayFluent", { value: Object.freeze({ version: ${JSON.stringify(VERSION)} }), configurable: true });`,
  ].join("\n"),
  resolveDir: "src/ts",
  loader: "js",
};

const keepImports = {
  name: "keep-imports",
  setup(build) {
    build.onResolve(
      { filter: /^(@fluentui\/|@microsoft\/|\.\/define-guard\.js$)/ },
      (args) => ({ path: args.path, external: true }),
    );
  },
};

const BUNDLES = [
  {
    stdin: ENTRY,
    plugins: [node_modules_external()],
    outfile: "dist/esm/index.js",
  },
  {
    entryPoints: ["src/ts/define-guard.ts"],
    outfile: "dist/cdn/define-guard.js",
  },
  {
    stdin: ENTRY,
    plugins: [keepImports],
    outfile: "dist/cdn/index.js",
  },
];

// Fluent's tokens are CSS custom properties, which setTheme() writes at runtime. Written here as a
// stylesheet instead: the light theme on the root and on spaday's wa-light islands, the dark one on
// wa-dark, so Fluent follows spaday's page mode with no script, and an application's own
// setTheme() still takes precedence.
const block = (selector, theme) =>
  `${selector} {\n${Object.entries(theme)
    .map(([name, value]) => `  --${name}: ${value};`)
    .join("\n")}\n}\n`;
const THEMES_FILE = path.resolve("src/css/fluent-themes.css");
const themes = {
  resolve: (specifier, from) =>
    specifier === "fluent-themes.css"
      ? THEMES_FILE
      : path.resolve(path.dirname(from), specifier),
  read: (file) =>
    file === THEMES_FILE
      ? block(":root,\n.wa-light", webLightTheme) +
        block(".wa-dark", webDarkTheme)
      : fs.readFileSync(file, "utf8"),
};

async function build() {
  fs.rmSync("dist", { recursive: true, force: true });
  fs.rmSync("../spaday_fluent/extension", {
    recursive: true,
    force: true,
  });

  await bundle_css("src/css/fluent.css", themes);

  await Promise.all(BUNDLES.map(bundle)).catch(() => process.exit(1));

  // the import map, relative to the served root: read by the Python package, and inlined into the
  // test page with URLs relative to it
  const imports = Object.fromEntries(
    Object.entries(await vendor(VENDORED, "dist/vendor")).map(
      ([specifier, file]) => [specifier, `vendor/${file}`],
    ),
  );
  fs.writeFileSync(
    "dist/vendor/imports.json",
    `${JSON.stringify(imports, null, 2)}\n`,
  );
  const map = JSON.stringify(
    {
      imports: Object.fromEntries(
        Object.entries(imports).map(([k, v]) => [k, `./${v}`]),
      ),
    },
    null,
    2,
  );
  const html = fs
    .readFileSync("src/html/index.html", "utf8")
    .replace(
      "<!-- importmap -->",
      `<script type="importmap">\n${map}\n    </script>`,
    );
  fs.writeFileSync("dist/index.html", html);

  // Copy servable assets to python extension (exclude esm/)
  fs.mkdirSync("../spaday_fluent/extension", { recursive: true });
  await cpy("dist/**/*", "../spaday_fluent/extension", {
    filter: (file) =>
      !file.relativePath.startsWith("esm/") &&
      !file.relativePath.startsWith("dist/esm/"),
  });
}

await build();
