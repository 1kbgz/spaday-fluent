import{b as t,c as P}from"./chunk-IAQVJUB6.js";import{B as q,C as D,b as V,d as x,f as j,j as I,o as N,r as O,s as R,t as W,v as X,x as E,y as L,z as U}from"./chunk-7W6XT5GS.js";import{$f as a,Cc as b,Ng as H,Sf as S,Sg as k,Wg as g,a as s,ah as d,dg as i,dh as F,eg as y,fg as w,fh as B,l as c,mg as r,nc as u,og as z,rg as n,sg as v,tg as M}from"./chunk-DVLTGBYE.js";import{a as h}from"./chunk-FUXJWCXM.js";import{b as $}from"./chunk-SRPHT6VS.js";import{b as l}from"./chunk-RD5DBDNA.js";import{e as f}from"./chunk-IQAG6JCP.js";import{a as p}from"./chunk-XLSJPDLR.js";import{c as m}from"./chunk-3MFZGGQB.js";var T=m`
  ${$("inline-grid")}

  :host {
    color: ${s};
    align-items: center;
    gap: 0 ${g};
    justify-items: start;
  }

  :has([slot='message']) {
    color: ${s};
    row-gap: ${F};
  }

  :not(::slotted([slot='label'])) {
    gap: 0;
  }

  :host([label-position='before']) {
    grid-template-areas: 'label input' 'label message';
  }

  :host([label-position='after']) {
    gap: 0;
    grid-template-areas: 'input label' 'message message';
    grid-template-columns: auto 1fr;
  }

  :host([label-position='after']) ::slotted([slot='input']) {
    margin-inline-end: ${g};
  }

  :host([label-position='above']) {
    grid-template-areas: 'label' 'input' 'message';
    row-gap: ${d};
  }

  :host([label-position='below']) {
    grid-template-areas: 'input' 'label' 'message';
    justify-items: center;
  }

  :host([label-position='below']) ::slotted([slot='label']) {
    margin-block-start: ${B};
  }

  :host(${W}) ::slotted([slot='label'])::after {
    content: '*' / '';
    color: ${b};
    margin-inline-start: ${k};
  }

  ::slotted([slot='input']) {
    grid-area: input;
  }

  ::slotted([slot='message']) {
    color: ${c};
    font-family: ${a};
    font-size: ${i};
    font-weight: ${r};
    grid-area: message;
    line-height: ${n};
    margin-block-start: ${d};
  }

  :host(${I}:focus-within) {
    border-radius: ${S};
    outline: ${H} solid ${u};
  }

  ::slotted(label),
  ::slotted([slot='label']) {
    cursor: inherit;
    display: inline-flex;
    font-family: ${a};
    font-size: ${y};
    font-weight: ${r};
    grid-area: label;
    line-height: ${v};
    justify-self: stretch;
    user-select: none;
  }

  :host([size='small']) ::slotted(label) {
    font-size: ${i};
    line-height: ${n};
  }

  :host([size='large']) ::slotted(label) {
    font-size: ${w};
    line-height: ${M};
  }

  :host([size='large']) ::slotted(label),
  :host([weight='semibold']) ::slotted(label) {
    font-weight: ${z};
  }

  :host(${j}) {
    cursor: default;
  }

  ::slotted([flag]) {
    display: none;
  }

  :host(${V}) ::slotted([flag='${t.badInput}']),
  :host(${x}) ::slotted([flag='${t.customError}']),
  :host(${N}) ::slotted([flag='${t.patternMismatch}']),
  :host(${O}) ::slotted([flag='${t.rangeOverflow}']),
  :host(${R}) ::slotted([flag='${t.rangeUnderflow}']),
  :host(${X}) ::slotted([flag='${t.stepMismatch}']),
  :host(${E}) ::slotted([flag='${t.tooLong}']),
  :host(${L}) ::slotted([flag='${t.tooShort}']),
  :host(${U}) ::slotted([flag='${t.typeMismatch}']),
  :host(${D}) ::slotted([flag='${t.valueMissing}']),
  :host(${q}) ::slotted([flag='${t.valid}']) {
    display: block;
  }
`;var A=f`
  <template
    @click="${(e,o)=>e.clickHandler(o.event)}"
    @change="${(e,o)=>e.changeHandler(o.event)}"
    @focusin="${(e,o)=>e.focusinHandler(o.event)}"
    @focusout="${(e,o)=>e.focusoutHandler(o.event)}"
  >
    <slot name="label" part="label" ${l("labelSlot")}></slot>
    <slot name="input" part="input" ${l("slottedInputs")}></slot>
    <slot name="message" part="message" ${l({property:"messageSlot",filter:p("[flag]")})}></slot>
  </template>
`;var st={name:P,registry:h.registry,shadowOptions:{delegatesFocus:!0},styles:T,template:A};export{T as a,A as b,st as c};
