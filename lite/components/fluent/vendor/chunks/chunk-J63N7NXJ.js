import{b}from"./chunk-D7IB7ZVQ.js";import{i as d}from"./chunk-7W6XT5GS.js";import{Dg as m,Mg as c,Rg as f,Sf as p,Sg as h,fa as l,hc as s}from"./chunk-DVLTGBYE.js";import{a as n}from"./chunk-FUXJWCXM.js";import{b as a}from"./chunk-SRPHT6VS.js";import{b as r}from"./chunk-JB4YKTVJ.js";import{e as i}from"./chunk-IQAG6JCP.js";import{c as e}from"./chunk-3MFZGGQB.js";var g=e`
  ${a("inline-flex")}

  :host {
    background-color: ${l};
    border-radius: ${p};
    border: ${c} solid ${s};
    box-shadow: ${m};
    box-sizing: border-box;
    flex-direction: column;
    margin: 0;
    min-inline-size: 160px;
    padding: ${h};
    row-gap: ${f};
    width: auto;
  }

  :host([popover]) {
    inset: unset;
    overflow: auto;
  }

  @supports (anchor-name: --anchor) {
    :host([popover]) {
      position: fixed;
      max-block-size: var(--listbox-max-height, calc(50vh - anchor-size(self-block)));
      min-inline-size: anchor-size(inline);
      inset-block-start: anchor(outside);
      inset-inline-start: anchor(inside);
      position-try-fallbacks: flip-block, flip-inline, flip-inline flip-block;
    }
  }

  @supports not (anchor-name: --anchor) {
    :host([popover]) {
      margin-block-start: var(--margin-offset, 0);
      max-block-size: var(--listbox-max-height, 50vh);
      position: absolute;
    }

    :host([popover]${d}) {
      margin-block-start: revert;
      translate: 0 -100%;
    }
  }
`;function x(){return i`
    <template
      @beforetoggle="${(o,t)=>o.beforetoggleHandler(t.event)}"
      @click="${(o,t)=>o.clickHandler(t.event)}"
    >
      <slot ${r("defaultSlot")} @slotchange="${(o,t)=>o.slotchangeHandler(t.event)}"></slot>
    </template>
  `}var u=x();var N={name:b,registry:n.registry,styles:g,template:u};export{g as a,x as b,u as c,N as d};
