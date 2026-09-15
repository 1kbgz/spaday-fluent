"""How Fluent renders spaday's generic controls (:mod:`spaday.ui`)."""

from spaday.ui import ControlSpec, Design, Open, Options, Part, Value, Wrap

_SIZES = {"sm": "small", "md": "medium", "lg": "large"}
_SLIDER_SIZES = {**_SIZES, "lg": "medium"}
_INTENTS = {
    "neutral": "info",
    "primary": "info",
    "info": "info",
    "success": "success",
    "warning": "warning",
    "danger": "error",
}
_BUTTON_INTENTS = {
    "neutral": "outline",
    "primary": "primary",
    "info": "primary",
    "success": "outline",
    "warning": "outline",
    "danger": "outline",
}
_FIELD = {"disabled": "disabled", "required": "required", "name": "name"}
_TEXT = {**_FIELD, "readonly": "readonly", "placeholder": "placeholder"}
_FIELD_WRAP = Wrap(tag="fluent-field", props={"label-position": "above"}, control={"slot": "input"})
_INLINE_WRAP = Wrap(tag="fluent-field", props={"label-position": "after"}, control={"slot": "input"})
_LABEL = Part(kind="sibling", tag="fluent-label", props={"slot": "label"})
_HELP = Part(kind="sibling", tag="fluent-text", props={"slot": "message"})
_ERROR = Part(kind="sibling", tag="fluent-text", props={"slot": "message", "class": "ui-error"}, after=True)

DESIGN = Design(
    name="fluent",
    controls={
        "button": ControlSpec(
            tag="fluent-button",
            label=Part(kind="text"),
            props={"intent": "appearance", "appearance": "appearance", "size": "size", "disabled": "disabled", "name": "name"},
            values={
                "intent": _BUTTON_INTENTS,
                "appearance": {"filled": "primary", "outline": "outline", "plain": "subtle"},
                "size": _SIZES,
            },
        ),
        "input": ControlSpec(
            tag="fluent-text-input",
            wrap=_FIELD_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid={"aria-invalid": "true"},
            props={**_TEXT, "type": "type", "size": "control-size"},
            values={"type": {"search": "text"}, "size": _SIZES},
        ),
        "textarea": ControlSpec(
            tag="fluent-textarea",
            wrap=_FIELD_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid={"aria-invalid": "true"},
            props={**_TEXT, "rows": None, "minlength": "minlength", "maxlength": "maxlength", "size": "size"},
            values={"size": _SIZES},
        ),
        "checkbox": ControlSpec(
            tag="fluent-checkbox",
            wrap=_INLINE_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid={"aria-invalid": "true"},
            props={**_FIELD, "size": "size"},
            values={"size": {"sm": "medium", "md": "medium", "lg": "large"}},
            value=Value(prop="checked"),
        ),
        "switch": ControlSpec(
            tag="fluent-switch",
            wrap=_INLINE_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid={"aria-invalid": "true"},
            props={**_FIELD, "size": None},
            value=Value(prop="checked"),
        ),
        "select": ControlSpec(
            tag="fluent-dropdown",
            wrap=_FIELD_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid={"aria-invalid": "true"},
            props={**_FIELD, "placeholder": "placeholder", "size": "size"},
            values={"size": _SIZES},
            options=Options(
                kind="children",
                tag="fluent-option",
                wrap="fluent-listbox",
                fixed={"role": "option"},
                value="value",
                label="text",
                label_attr="aria-label",
                selected="selected",
            ),
            value=Value(codec="json", defer=True),
        ),
        "radio-group": ControlSpec(
            tag="fluent-radio-group",
            fixed={"role": "radiogroup"},
            wrap=_FIELD_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid={"aria-invalid": "true"},
            props={**_FIELD, "size": None},
            options=Options(
                kind="children",
                tag="fluent-radio",
                fixed={"role": "radio"},
                value="value",
                label=Part(kind="sibling", tag="span", after=True),
                label_attr="aria-label",
                selected="checked",
                item_wrap=Wrap(tag="label"),
            ),
            value=Value(codec="json"),
        ),
        "slider": ControlSpec(
            tag="fluent-slider",
            wrap=_FIELD_WRAP,
            label=_LABEL,
            help=_HELP,
            error=_ERROR,
            invalid={"aria-invalid": "true"},
            props={
                "disabled": "disabled",
                "required": None,
                "readonly": None,
                "name": None,
                "size": "size",
                "min": "min",
                "max": "max",
                "step": "step",
            },
            values={"size": _SLIDER_SIZES},
            value=Value(codec="number"),
        ),
        "alert": ControlSpec(
            tag="fluent-message-bar",
            label=Part(kind="child", tag="strong"),
            props={"intent": "intent"},
            values={"intent": _INTENTS},
        ),
        "progress": ControlSpec(
            tag="fluent-progress-bar",
            wrap=_FIELD_WRAP,
            label=_LABEL,
            props={"max": "max"},
        ),
        "dialog": ControlSpec(
            tag="fluent-dialog",
            fixed={"type": "modal"},
            label=Part(kind="child", tag="h2"),
            open=Open(prop="open", event="toggle", methods=("show", "hide"), state="dialog.open"),
        ),
    },
)

__all__ = ["DESIGN"]
