import ast
from pathlib import Path

from spaday import element, generate
from spaday.bootstrap import bootstrap

from spaday_fluent import TOKENS, FluentBadge, FluentButton, FluentTextInput, package

ROOT = Path(__file__).parent.parent


def test_generated_components_serialize():
    node = element("div").child(FluentButton(appearance="primary").text("Save"), FluentTextInput(appearance="outline")).to_node()
    assert [child["tag"] for child in node["slots"]["default"]] == ["fluent-button", "fluent-text-input"]
    assert node["slots"]["default"][0]["props"]["appearance"] == {"Str": "primary"}


def test_catalog_uses_the_tags_the_package_registers():
    tags = {schema.tag for schema in package.catalog}
    assert {"fluent-button", "fluent-option", "fluent-textarea"} <= tags
    # the published manifest's stale names for those two are corrected, not carried
    assert not {"fluent-dropdown-option", "fluent-text-area"} & tags
    # enum props come from the analyzer's expanded types rather than opaque aliases
    color = next(prop for prop in FluentBadge.schema.props if prop.name == "color")
    assert color.kind == "enum" and "brand" in color.choices


def test_package_drives_bootstrap_asset_urls():
    html = bootstrap(packages=[package])
    assert 'href="/components/fluent/css/fluent.css"' in html
    assert 'src="/components/fluent/cdn/index.js"' in html
    assert '"@fluentui/web-components/button.js": "/components/fluent/vendor/@fluentui/web-components/dist/esm/button/define.js"' in html
    assert '"@microsoft/fast-element"' in html  # shared with any library extending Fluent's classes
    # the bundle's own imports resolve through the map, so it must come first
    assert html.index('type="importmap"') < html.index('src="/components/fluent/cdn/index.js"')


def test_published_imports_are_served():
    assert package.imports, "the JS build writes the import map; run it first"
    for specifier, path in package.imports:
        target = package.assets_dir / path
        assert target.is_dir() if path.endswith("/") else target.is_file(), f"{specifier} maps to {path}, which the build did not produce"


def test_tokens_are_fluent_tokens_the_css_kwarg_produces():
    for kwarg, (prop, description) in TOKENS.items():
        assert prop == f"--{kwarg}" and description.startswith("drives --spa-")
        assert element("div").css(**{kwarg: "x"}).to_node()["props"]["style"]["Str"] == f"{prop}: x"


def test_generated_catalog_is_current():
    fresh = generate(str(ROOT / "custom-elements.json"))
    assert ast.dump(ast.parse(fresh)) == ast.dump(ast.parse((ROOT / "components.py").read_text(encoding="utf-8")))
