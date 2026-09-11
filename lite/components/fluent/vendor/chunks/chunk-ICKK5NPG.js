import{b as R}from"./chunk-UHUKOXOV.js";import{a as O,e as P}from"./chunk-FKR45OA7.js";import{a as I,e as M,g as r,m as o,u as a}from"./chunk-7W6XT5GS.js";import{e as p}from"./chunk-RIDJT2TH.js";import{$a as S,Eb as N,K as f,Mg as D,Ng as T,Rf as z,Sf as C,Sg as H,Tg as e,bc as B,e as g,ec as F,f as h,fa as t,g as $,ga as v,ha as y,l as k,mb as x,nc as w,x as b}from"./chunk-DVLTGBYE.js";import{a as u}from"./chunk-FUXJWCXM.js";import{a as n}from"./chunk-P326MSZE.js";import{b as m}from"./chunk-SRPHT6VS.js";import{b as l}from"./chunk-RD5DBDNA.js";import{e as i}from"./chunk-IQAG6JCP.js";import{a as d}from"./chunk-XLSJPDLR.js";import{c as s}from"./chunk-3MFZGGQB.js";var W=s`
  ${m("inline-grid")}

  :host {
    -webkit-tap-highlight-color: transparent;
    ${O}
    align-items: center;
    background-color: ${t};
    border-radius: ${C};
    box-sizing: border-box;
    color: ${g};
    column-gap: ${H};
    cursor: pointer;
    grid-template-areas: 'indicator start content';
    grid-template-columns: auto auto 1fr;
    min-height: 32px;
    padding: ${e};
    text-align: start;
  }

  .content {
    grid-area: content;
    line-height: 1;
  }

  ::slotted([slot='start']) {
    grid-area: start;
  }

  :host(:hover) {
    background-color: ${v};
    color: ${h};
  }

  :host(:active) {
    background-color: ${y};
    color: ${$};
  }

  :host(${r}) {
    background-color: ${t};
    color: ${b};
    cursor: default;
  }

  .checkmark-16-filled {
    fill: currentColor;
    width: 16px;
  }

  slot[name='checked-indicator'] > *,
  ::slotted([slot='checked-indicator']) {
    aspect-ratio: 1;
    flex: 0 0 auto;
    grid-area: indicator;
    visibility: hidden;
  }

  :host(${a}) :is(slot[name='checked-indicator'] > *, ::slotted([slot='checked-indicator'])) {
    visibility: visible;
  }

  :host(${o}) .checkmark-16-filled,
  :host(:not(${o})) .checkmark-12-regular {
    display: none;
  }

  :host(${o}) .checkmark-12-regular {
    background-color: ${t};
    border-radius: ${z};
    border: ${D} solid ${N};
    box-sizing: border-box;
    cursor: pointer;
    fill: transparent;
    position: relative;
    visibility: visible;
    width: 16px;
  }

  :host(${o}${a}) .checkmark-12-regular {
    background-color: ${x};
    border-color: ${B};
    fill: ${f};
  }

  :host(${r}${o}) .checkmark-12-regular {
    border-color: ${F};
  }

  :host(${r}${o}${a}) .checkmark-12-regular {
    background-color: ${S};
  }

  :host(${I}) {
    border: ${T} solid ${w};
  }

  @supports (selector(:host(:has(*)))) {
    :host(:has([slot='start']:not([size='16']))) {
      column-gap: ${e};
    }
  }

  :host(${M}) {
    column-gap: ${e};
    grid-template-areas:
      'indicator start content'
      'indicator start description';
  }

  ::slotted([slot='description']) {
    color: ${k};
    grid-area: description;
    ${P}
  }

  @media (forced-colors: active) {
    :host(${r}) {
      color: GrayText;
    }
  }
`;var G=i.partial(`
  <svg aria-hidden="true" class="checkmark-16-filled" viewBox="0 0 16 16">
    <path
      d="M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032"
    />
  </svg>
  <svg aria-hidden="true" class="checkmark-12-regular" viewBox="0 0 12 12">
    <path
      d="M9.854 3.146a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L5 7.293l4.146-4.147a.5.5 0 0 1 .708 0"
    />
  </svg>
`);function L(c={}){return i`
    <slot name="checked-indicator">${n(c.checkedIndicator)}</slot>
    ${p(c)}
    <div class="content" part="content">
      <slot ${l({property:"freeformOutputs",filter:d("output")})}></slot>
    </div>
    <div class="description" part="description">
      <slot name="description" ${l("descriptionSlot")}></slot>
    </div>
  `}var A=L({checkedIndicator:G});var to={name:R,registry:u.registry,styles:W,template:A};export{W as a,A as b,to as c};
