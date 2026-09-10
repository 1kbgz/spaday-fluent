import json
from pathlib import Path

from spaday import ComponentPackage

from . import components as _components
from .components import *
from .components import __all__ as _component_names

__version__ = "0.1.0"

_EXTENSION = Path(__file__).parent / "extension"
# Fluent's modules (and the FAST runtime they are built on) under their own bare specifiers, written
# by the JS build (js/tools/vendor.mjs): a library on the page that imports Fluent resolves to this
# copy instead of registering the same tags a second time
_IMPORTS = _EXTENSION / "vendor" / "imports.json"

# the exact version of each JS library the package serves, written by its JS build
_VERSIONS = _EXTENSION / "versions.json"

package = ComponentPackage(
    name="fluent",
    assets_dir=_EXTENSION,
    assets=(("css", "css/fluent.css"), ("js", "cdn/index.js")),
    components=tuple(getattr(_components, name) for name in _component_names),
    imports=tuple(json.loads(_IMPORTS.read_text(encoding="utf-8")).items()) if _IMPORTS.exists() else (),
    provides=json.loads(_VERSIONS.read_text(encoding="utf-8")) if _VERSIONS.exists() else {},
)

#: ``css()`` kwarg → (CSS custom property, what it controls), in the shape of
#: :data:`spaday.theme.SHELL_TOKENS`.
#:
#: Fluent is a design system, so this package themes the *other* way round from a rendering package:
#: rather than exposing ``--spa-fluent-*`` tokens of its own, its stylesheet maps Fluent's design
#: tokens onto the ``--spa-*`` palette that spaday's shell and every other component package reads.
#: Set these and the whole page follows — shell, graphs, tables, trees::
#:
#:     App().css(colorBrandBackground="#0C4253")
#:
#: Every other Fluent token works the same way (``css()`` takes arbitrary custom properties, and
#: Fluent's are camelCase); these are the ones wired to the shell palette.
TOKENS = {
    "colorNeutralBackground1": ("--colorNeutralBackground1", "drives --spa-surface"),
    "colorNeutralBackground2": ("--colorNeutralBackground2", "drives --spa-surface-2"),
    "colorNeutralStroke1": ("--colorNeutralStroke1", "drives --spa-border"),
    "colorNeutralForeground3": ("--colorNeutralForeground3", "drives --spa-muted"),
    "colorBrandBackground": ("--colorBrandBackground", "drives --spa-accent and --spa-info"),
    "colorStatusSuccessBackground3": ("--colorStatusSuccessBackground3", "drives --spa-success"),
    "colorStatusWarningBackground3": ("--colorStatusWarningBackground3", "drives --spa-warning"),
    "colorStatusDangerBackground3": ("--colorStatusDangerBackground3", "drives --spa-danger"),
}

__all__ = [*_component_names, "TOKENS", "package"]  # noqa: PLE0604
