# spaday-fluent

Typed [Fluent UI web components](https://github.com/microsoft/fluentui/tree/master/packages/web-components) and browser assets for spaday.

[![Build Status](https://github.com/1kbgz/spaday-fluent/actions/workflows/build.yaml/badge.svg?branch=main&event=push)](https://github.com/1kbgz/spaday-fluent/actions/workflows/build.yaml)
[![codecov](https://codecov.io/gh/1kbgz/spaday-fluent/branch/main/graph/badge.svg)](https://codecov.io/gh/1kbgz/spaday-fluent)
[![License](https://img.shields.io/github/license/1kbgz/spaday-fluent)](https://github.com/1kbgz/spaday-fluent)
[![PyPI](https://img.shields.io/pypi/v/spaday-fluent.svg)](https://pypi.python.org/pypi/spaday-fluent)

## Overview

```python
from spaday import SetField, element, serve
from spaday_fluent import FluentBadge, FluentButton

page = element("div").child(
    FluentButton(appearance="primary").text("Approve").on("click", SetField("state", "approved")),
    FluentBadge(color="brand").bind("textContent", "state"),
)
serve(page, packages=["fluent"], store={"state": "pending"})
```

Every element of `@fluentui/web-components` has a typed class generated from its Custom Elements
Manifest, so props, events and slots are checked when you author the tree; enum props such as
`appearance` carry their choices. Installing the package does not inject assets; select it with
`packages=["fluent"]` or pass the exported `package` descriptor.

## Run the local example

```bash
python -m pip install -e ".[examples]"
python -m spaday_fluent.example
```

Open `http://127.0.0.1:8024` for the [sprint hub](spaday_fluent/example.py): a task board streamed from
Python over transports with progress bars, badges and avatars, tasks closed through a Python endpoint, an
activity drawer, a team accordion whose presence updates live, a task form of text input, dropdown, radio
group, slider, text area and checkbox bound to spaday state and confirmed in a dialog, tabs, a tooltip,
and a dark switch that re-themes Fluent and the spaday shell together.

## Theming

Fluent's design tokens are CSS custom properties. The stylesheet carries Fluent's light and dark
themes and maps spaday's `--spa-*` shell palette onto them, so restyling Fluent restyles the shell
and every other spaday component package with it. `TOKENS` lists the Fluent tokens wired to the
palette, each settable through `css()`:

```python
App().css(colorBrandBackground="#0C4253")
```

The dark theme follows spaday's page mode: a `wa-dark` class on the root (for example
`App(...).bind_root_class("wa-dark", "dark")`) or on any island switches it, and `wa-light` flips a
nested island back. A theme applied with Fluent's own `setTheme()` takes precedence.

## Sharing Fluent with your own library

Fluent registers global custom element names, so a second copy on the page throws from
`customElements.define`. The package serves Fluent's modules under their own bare specifiers —
`@fluentui/web-components`, `@fluentui/web-components/button.js` and the rest of its exports — along
with `@microsoft/fast-element`, which a library extending Fluent's classes has to share, and
`@fluentui/tokens`, through the page's import map. A library built on Fluent that leaves those
imports out of its bundle (`external: ["@fluentui/web-components", "@microsoft/fast-element"]` with
esbuild) gets this copy, and nothing registers twice.

## Development

`make catalog` regenerates the typed classes from the installed Fluent package: it collects its
manifest into `spaday_fluent/custom-elements.json` (`js/tools/manifest.mjs`) and generates
`spaday_fluent/components.py` from it. Fluent 3.1.3's manifest still lists `fluent-option` and
`fluent-textarea` under their old names; the collector corrects them.

> [!NOTE]
> This library was generated using [copier](https://copier.readthedocs.io/en/stable/) from the [Base Python Project Template repository](https://github.com/python-project-templates/base).
