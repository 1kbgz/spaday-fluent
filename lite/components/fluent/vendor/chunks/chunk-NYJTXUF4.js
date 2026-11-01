import{c as a}from"./chunk-NXRUWHN7.js";import{a as r}from"./chunk-MTF7GSAX.js";import{b as m}from"./chunk-27T3HUJZ.js";import{b as n}from"./chunk-WJ6BGRAP.js";import{e as l}from"./chunk-3WMUIIMG.js";import{c as o}from"./chunk-L44UMAPT.js";var i=l`
  <template
    focusgroup="menu inline block nowrap nomemory"
    @click="${(e,t)=>e.clickHandler(t.event)}"
    @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    @change="${(e,t)=>e.changeHandler(t.event)}"
    @toggle="${e=>e.itemToggleHandler()}"
  >
    <slot ${n("defaultSlot")} @slotchange="${e=>e.handleDefaultSlotChange()}"></slot>
  </template>
`;var s=o`
  ${m("block")}

  :host {
    outline: none;
  }
`;var k={name:a,registry:r.registry,styles:s,template:i};export{i as a,s as b,k as c};
