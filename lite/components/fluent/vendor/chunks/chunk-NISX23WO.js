import{d as ro}from"./chunk-63MQUEMX.js";import{g as r}from"./chunk-7W6XT5GS.js";import{d as w,e as B}from"./chunk-RIDJT2TH.js";import{$f as f,Ag as G,Bc as O,Eb as $,Fa as A,Fb as h,Gb as u,Ib as g,Jb as I,K as M,Kb as P,Mg as t,Rg as n,Sf as e,Sg as z,Tg as J,Ug as K,Vg as Q,Wg as Y,Xa as s,a as i,bc as R,bh as Z,dc as q,dg as W,ec as b,eg as k,fa as c,fg as x,gg as j,hc as C,hg as L,ic as m,kh as _,l as T,mg as a,na as p,nh as oo,rg as U,s as X,sg as V,tg as E,th as eo,wh as to,x as D}from"./chunk-DVLTGBYE.js";import{a as H}from"./chunk-FUXJWCXM.js";import{b as F}from"./chunk-SRPHT6VS.js";import{b as N}from"./chunk-RD5DBDNA.js";import{b as d}from"./chunk-JB4YKTVJ.js";import{e as y}from"./chunk-IQAG6JCP.js";import{c as S}from"./chunk-3MFZGGQB.js";var lo=S`
  ${F("block")}

  :host {
    font-family: ${f};
    font-size: ${k};
    font-weight: ${a};
    line-height: ${V};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${i};
    padding-bottom: ${Z};
    flex-shrink: 0;
    padding-inline-end: ${z};
  }

  .label[hidden],
  :host(:empty) .label {
    display: none;
  }

  .root {
    align-items: center;
    background-color: ${c};
    border: ${t} solid ${g};
    border-bottom-color: ${$};
    border-radius: ${e};
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    gap: ${n};
    padding: 0 ${Q};
    position: relative;
    width: 100%;
  }

  :has(.control:user-invalid) {
    border-color: ${O};
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${e});
    border-radius: 0 0 ${e} ${e};
    border-bottom: 2px solid ${R};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${_};
    transition-delay: ${eo};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${i};
    border-radius: ${e};
    background: ${s};
    font-family: ${f};
    font-weight: ${a};
    font-size: ${k};
    border: none;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${X};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${T};
    font-size: ${j};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${n};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${n};
    gap: ${z};
  }
  :host(:hover) .root {
    border-color: ${I};
    border-bottom-color: ${h};
  }
  :host(:active) .root {
    border-color: ${P};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${oo};
    transition-delay: ${to};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${q};
  }
  :host([appearance='outline']:focus-within) .root {
    border: ${t} solid ${g};
  }
  :host(:focus-within) .control {
    color: ${i};
  }
  :host(${r}) .root {
    background: ${s};
    border: ${t} solid ${b};
  }
  :host(${r}) .control::placeholder,
  :host(${r}) ::slotted([slot='start']),
  :host(${r}) ::slotted([slot='end']) {
    color: ${D};
  }
  ::selection {
    color: ${M};
    background-color: ${A};
  }
  :host([control-size='small']) .control {
    font-size: ${W};
    font-weight: ${a};
    line-height: ${U};
  }
  :host([control-size='small']) .root {
    height: 24px;
    gap: ${n};
    padding: 0 ${J};
  }
  :host([control-size='small']) ::slotted([slot='start']),
  :host([control-size='small']) ::slotted([slot='end']) {
    font-size: ${x};
  }
  :host([control-size='large']) .control {
    font-size: ${x};
    font-weight: ${a};
    line-height: ${E};
  }
  :host([control-size='large']) .root {
    height: 40px;
    gap: ${K};
    padding: 0 ${Y};
  }
  :host([control-size='large']) ::slotted([slot='start']),
  :host([control-size='large']) ::slotted([slot='end']) {
    font-size: ${L};
  }
  :host([appearance='underline']) .root {
    background: ${s};
    border: 0;
    border-radius: 0;
    border-bottom: ${t} solid ${$};
  }
  :host([appearance='underline']:hover) .root {
    border-bottom-color: ${h};
  }
  :host([appearance='underline']:active) .root {
    border-bottom-color: ${u};
  }
  :host([appearance='underline']:focus-within) .root {
    border: 0;
    border-bottom-color: ${u};
  }
  :host([appearance='underline']${r}) .root {
    border-bottom-color: ${b};
  }
  :host([appearance='filled-lighter']) .root,
  :host([appearance='filled-darker']) .root {
    border: ${t} solid ${C};
    box-shadow: ${G};
  }
  :host([appearance='filled-lighter']) .root {
    background: ${c};
  }
  :host([appearance='filled-darker']) .root {
    background: ${p};
  }
  :host([appearance='filled-lighter']:hover) .root,
  :host([appearance='filled-darker']:hover) .root {
    border-color: ${m};
  }
  :host([appearance='filled-lighter']:active) .root,
  :host([appearance='filled-darker']:active) .root {
    border-color: ${m};
    background: ${p};
  }
`;function no(v={}){return y`
    <template @keydown="${(o,l)=>o.keydownHandler(l.event)}">
      <label part="label" for="control" class="label" ${d("controlLabel")}>
        <slot ${N("defaultSlottedNodes")}></slot>
      </label>
      <div class="root" part="root">
        ${B(v)}
        <input
          class="control"
          part="control"
          id="control"
          @change="${(o,l)=>o.changeHandler(l.event)}"
          @input="${(o,l)=>o.inputHandler(l.event)}"
          autocomplete="${o=>o.autocomplete}"
          ?disabled="${o=>o.disabled}"
          list="${o=>o.list}"
          maxlength="${o=>o.maxlength}"
          minlength="${o=>o.minlength}"
          ?multiple="${o=>o.multiple}"
          name="${o=>o.name}"
          pattern="${o=>o.pattern}"
          placeholder="${o=>o.placeholder}"
          ?readonly="${o=>o.readOnly}"
          ?required="${o=>o.required}"
          size="${o=>o.size}"
          spellcheck="${o=>o.spellcheck}"
          type="${o=>o.type}"
          value="${o=>o.value}"
          ${d("control")}
        />
        ${w(v)}
      </div>
    </template>
  `}var ao=no();var xo={name:ro,registry:H.registry,shadowOptions:{delegatesFocus:!0},styles:lo,template:ao};export{lo as a,ao as b,xo as c};
