import{c as a}from"./chunk-IWDUPJHC.js";import{a as r}from"./chunk-2JM5GVQW.js";import{b as m}from"./chunk-2JVXI2VH.js";import{b as n}from"./chunk-QICYD5HK.js";import{e as l}from"./chunk-S66425KA.js";import{c as o}from"./chunk-4HX2PQZF.js";var i=l`
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
