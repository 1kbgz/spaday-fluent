import json

from spaday import Alert, Button, Checkbox, DateInput, Dialog, NumberInput, Progress, RadioGroup, Select, Slider, TextArea, TextInput, validate
from spaday.ui import conformance, resolve
from spaday.ui.design import _plain

from spaday_fluent import DESIGN, package


def _props(node: dict) -> dict:
    return {key: _plain(value) for key, value in node.get("props", {}).items()}


def _find(node: dict, tag: str) -> dict:
    if node["tag"] == tag:
        return node
    for children in node.get("slots", {}).values():
        for child in children:
            if isinstance(child, dict):
                try:
                    return _find(child, tag)
                except LookupError:
                    pass
    raise LookupError(tag)


def test_the_package_publishes_its_design():
    assert package.design is DESIGN
    assert set(DESIGN.controls) == {
        "alert",
        "button",
        "checkbox",
        "dialog",
        "input",
        "progress",
        "radio-group",
        "select",
        "slider",
        "switch",
        "textarea",
    }


def test_fields_render_with_fluent_composition():
    text = resolve(
        TextInput(label="Name", help="Hint", error="Bad", type="search", size="lg").bind("value", "name", mode="two-way").to_node(),
        DESIGN,
    )
    assert text["tag"] == "fluent-field" and _props(text) == {"label-position": "above"}
    label, help_text, control, error = text["slots"]["default"]
    assert (label["tag"], _props(label)) == ("fluent-label", {"slot": "label", "textContent": "Name"})
    assert (control["tag"], _props(control)) == (
        "fluent-text-input",
        {"aria-invalid": "true", "type": "text", "control-size": "large", "slot": "input"},
    )
    assert control["bindings"] == {"value": {"field": "name", "mode": "two-way"}}
    assert (help_text["tag"], _props(help_text)) == ("fluent-text", {"slot": "message", "textContent": "Hint"})
    assert (error["tag"], _props(error)) == (
        "fluent-text",
        {"slot": "message", "class": "ui-error", "textContent": "Bad"},
    )

    textarea = resolve(TextArea(label="Notes", rows=3, minlength=2, maxlength=20).to_node(), DESIGN)
    assert _props(_find(textarea, "fluent-textarea")) == {"minlength": 2, "maxlength": 20, "slot": "input"}


def test_choices_render_real_fluent_options_with_visible_radio_labels():
    select = resolve(Select(label="Plan", options=["a", {"value": "b", "label": "B"}], value="b").to_node(), DESIGN)
    dropdown = _find(select, "fluent-dropdown")
    assert dropdown["tag"] == "fluent-dropdown"
    assert dropdown["bindings"]["value"] == {
        "compute": {"expr": "lit", "value": "b"},
        "mode": "one-way",
        "defer": True,
        "codec": "json",
    }
    [listbox] = dropdown["slots"]["default"]
    assert listbox["tag"] == "fluent-listbox"
    assert [(option["tag"], _props(option)) for option in listbox["slots"]["default"]] == [
        ("fluent-option", {"role": "option", "value": '"a"', "aria-label": "a", "textContent": "a"}),
        (
            "fluent-option",
            {"role": "option", "value": '"b"', "aria-label": "B", "selected": True, "textContent": "B"},
        ),
    ]
    bound = _find(resolve(Select(options=["a"]).bind("value", "plan").to_node(), DESIGN), "fluent-dropdown")
    assert bound["bindings"]["value"] == {"field": "plan", "mode": "one-way", "codec": "json", "defer": True}

    radios = resolve(
        RadioGroup(label="Priority", options=[1, {"value": 2, "label": "High", "disabled": True}], value=1)
        .bind("value", "priority", mode="two-way")
        .to_node(),
        DESIGN,
    )
    group = _find(radios, "fluent-radio-group")
    assert group["tag"] == "fluent-radio-group"
    assert group["bindings"]["value"]["codec"] == "json"
    first, second = group["slots"]["default"]
    assert first["tag"] == second["tag"] == "label"
    assert _props(first["slots"]["default"][0]) == {"role": "radio", "value": "1", "aria-label": "1", "checked": True}
    assert _props(first["slots"]["default"][1]) == {"textContent": "1"}
    assert _props(second["slots"]["default"][0]) == {
        "role": "radio",
        "value": "2",
        "aria-label": "High",
        "disabled": True,
    }
    assert _props(second["slots"]["default"][1]) == {"textContent": "High"}


def test_toggles_slider_feedback_and_dialog_map_to_fluent():
    button = resolve(Button(label="Save", intent="primary", appearance="plain", size="lg").to_node(), DESIGN)
    assert button["tag"] == "fluent-button"
    assert _props(button) == {"textContent": "Save", "appearance": "subtle", "size": "large"}

    checkbox = resolve(Checkbox(label="Agree").bind("value", "agree", mode="two-way").to_node(), DESIGN)
    checkbox = _find(checkbox, "fluent-checkbox")
    assert checkbox["bindings"]["checked"] == {"field": "agree", "mode": "two-way"}
    assert checkbox["bindings"]["aria-invalid"]["compute"]["test"] == {"expr": "field", "name": "$errors.agree"}

    slider = resolve(Slider(label="Volume", min=0, max=10, step=1).bind("value", "volume", mode="two-way").to_node(), DESIGN)
    assert _props(_find(slider, "fluent-slider")) == {"min": 0, "max": 10, "step": 1, "slot": "input"}
    assert _find(slider, "fluent-slider")["bindings"]["value"]["codec"] == "number"

    alert = resolve(Alert("Body", label="Portable", intent="danger").to_node(), DESIGN)
    assert alert["tag"] == "fluent-message-bar" and _props(alert) == {"intent": "error"}
    assert _props(alert["slots"]["default"][0])["textContent"] == "Portable"

    progress = resolve(Progress(label="Upload", value=25, max=50).to_node(), DESIGN)
    assert _props(_find(progress, "fluent-progress-bar")) == {"value": 25, "max": 50, "slot": "input"}

    dialog = resolve(Dialog(label="Confirm").bind("open", "open", mode="two-way").to_node(), DESIGN)
    assert dialog["tag"] == "fluent-dialog" and _props(dialog) == {"type": "modal"}
    assert dialog["bindings"] == {
        "open": {
            "field": "open",
            "mode": "two-way",
            "event": "toggle",
            "methods": ["show", "hide"],
            "state": "dialog.open",
        }
    }


def test_number_and_date_use_the_explicit_native_fallback():
    number = resolve(NumberInput(label="Count", id="count").to_node(), DESIGN)
    date = resolve(DateInput(label="Date", id="date").to_node(), DESIGN)
    assert _props(_find(number, "input"))["data-ui-fallback"] == "native"
    assert _props(_find(date, "input"))["data-ui-fallback"] == "native"


def test_the_conformance_page_resolves_and_validates():
    node = resolve(conformance.page().to_node(), DESIGN)
    validate(node)
    rendered = json.dumps(node)
    assert '"tag": "ui-' not in rendered
    assert rendered.count("data-ui-fallback") == 2
