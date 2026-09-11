import{c as a}from"./chunk-Z2QD3N52.js";import{a as r}from"./chunk-FUXJWCXM.js";import{b as m}from"./chunk-SRPHT6VS.js";import{b as n}from"./chunk-JB4YKTVJ.js";import{e as l}from"./chunk-IQAG6JCP.js";import{c as o}from"./chunk-3MFZGGQB.js";var i=l`
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
