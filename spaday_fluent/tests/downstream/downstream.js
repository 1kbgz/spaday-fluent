/* A stand-in for a downstream component library built on Fluent.
 *
 * It imports Fluent the way a library built on it does, by Fluent's own bare specifiers, left as
 * imports in its bundle. spaday-fluent publishes its copy under those specifiers in the page's
 * import map, so they resolve to the modules that already registered the catalog: the page keeps
 * one copy, and nothing registers the same tag names twice.
 */

import { Button } from "@fluentui/web-components";
import "@fluentui/web-components/button.js";

class DemoAction extends HTMLElement {
  connectedCallback() {
    if (this.firstElementChild) return;
    const button = document.createElement("fluent-button");
    button.textContent = this.getAttribute("label") ?? "Go";
    // only true when the class this library imported is the one the page registered
    this.dataset.sharedClass = String(button instanceof Button);
    this.append(button);
  }
}

if (!customElements.get("demo-action")) {
  customElements.define("demo-action", DemoAction);
}
