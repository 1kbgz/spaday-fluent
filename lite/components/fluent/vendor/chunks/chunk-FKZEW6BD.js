import{a as o,b as c}from"./chunk-ZNBZOVFQ.js";import{$f as b,Sf as f,Sg as d,Vg as h,a as r,bh as $,dg as m,fa as s,hc as a,oc as p,pc as l,rg as g}from"./chunk-DVLTGBYE.js";import{a as e}from"./chunk-FUXJWCXM.js";import{b as n}from"./chunk-SRPHT6VS.js";import{e as t}from"./chunk-IQAG6JCP.js";import{c as i}from"./chunk-3MFZGGQB.js";var u=i`
  ${n("inline-flex")}

  :host(:not(:popover-open)) {
    display: none;
  }

  :host {
    --position-area: block-start;
    --position-try-options: flip-block;
    --block-offset: ${$};
    --inline-offset: ${d};
    background: ${s};
    border-radius: ${f};
    border: 1px solid ${a};
    box-sizing: border-box;
    color: ${r};
    display: inline-flex;
    filter: drop-shadow(0 0 2px ${p}) drop-shadow(0 4px 8px ${l});
    font-family: ${b};
    font-size: ${m};
    inset: unset;
    line-height: ${g};
    margin: unset; /* Remove browser default for [popover] */
    max-width: 240px;
    overflow: visible;
    padding: 4px ${h} 6px;
    position: absolute;
    position-area: var(--position-area);
    position-try-fallbacks: var(--position-try-options);
    width: auto;
    z-index: 1;
  }

  @supports (inset-area: block-start) {
    :host {
      inset-area: var(--position-area);
      position-try-fallbacks: var(--position-try-options);
    }
  }

  :host(:is([positioning^='above'], [positioning^='below'], :not([positioning]))) {
    margin-block: var(--block-offset);
  }

  :host(:is([positioning^='before'], [positioning^='after'])) {
    margin-inline: var(--inline-offset);
    --position-try-options: flip-inline;
  }

  :host([positioning='above-start']) {
    --position-area: ${o["above-start"]};
  }
  :host([positioning='above']) {
    --position-area: ${o.above};
  }
  :host([positioning='above-end']) {
    --position-area: ${o["above-end"]};
  }
  :host([positioning='below-start']) {
    --position-area: ${o["below-start"]};
  }
  :host([positioning='below']) {
    --position-area: ${o.below};
  }
  :host([positioning='below-end']) {
    --position-area: ${o["below-end"]};
  }
  :host([positioning='before-top']) {
    --position-area: ${o["before-top"]};
  }
  :host([positioning='before']) {
    --position-area: ${o.before};
  }
  :host([positioning='before-bottom']) {
    --position-area: ${o["before-bottom"]};
  }
  :host([positioning='after-top']) {
    --position-area: ${o["after-top"]};
  }
  :host([positioning='after']) {
    --position-area: ${o.after};
  }
  :host([positioning='after-bottom']) {
    --position-area: ${o["after-bottom"]};
  }
`;var v=t`
  <template popover aria-hidden="true">
    <slot></slot>
  </template>
`;var R={name:c,registry:e.registry,styles:u,template:v};export{u as a,v as b,R as c};
