import{e as g}from"./chunk-RIDJT2TH.js";import{$f as v,Rf as i,Sf as y,Ug as n,Vg as d,Wg as t,Xa as b,a as f,dg as w,eg as s,fg as z,gg as C,mc as $,mg as B,nc as k,rg as S,sg as l,tg as F,ug as L,x}from"./chunk-DVLTGBYE.js";import{d as h}from"./chunk-GERPARLC.js";import{a as m}from"./chunk-FUXJWCXM.js";import{a as r}from"./chunk-P326MSZE.js";import{b as u}from"./chunk-SRPHT6VS.js";import{b as c}from"./chunk-JB4YKTVJ.js";import{e as o}from"./chunk-IQAG6JCP.js";import{c as p}from"./chunk-3MFZGGQB.js";var H=p`
  ${u("block")}

  :host {
    max-width: fit-content;
    contain: content;
    color: ${f};
  }

  .heading {
    height: 44px;
    display: grid;
    position: relative;
    padding-inline: ${t} ${d};
    border-radius: ${y};
    font-family: ${v};
    font-size: ${s};
    font-weight: ${B};
    line-height: ${l};
    grid-template-columns: auto auto 1fr auto;
  }

  .button {
    appearance: none;
    background: ${b};
    border: none;
    box-sizing: border-box;
    color: inherit;
    cursor: pointer;
    font: inherit;
    grid-column: auto / span 2;
    grid-row: 1;
    height: 44px;
    outline: none;
    padding: 0;
    text-align: start;
  }

  .button::before {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${i};
  }

  :where(.default-marker-collapsed, .default-marker-expanded),
  ::slotted(:is([slot='marker-collapsed'], [slot='marker-expanded'])) {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    position: relative;
    height: 100%;
    padding-inline-end: ${n};
    grid-column: 1 / span 1;
    grid-row: 1;
  }

  .content {
    margin: 0 ${t};
  }

  ::slotted([slot='start']) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: ${n};
    grid-column: 2 / span 1;
    grid-row: 1;
  }

  button:focus-visible::after {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${i};
    outline: none;
    border: 2px solid ${$};
    box-shadow: inset 0 0 0 1px ${k};
  }

  /* --- Disabled attr styles --- */

  :host([disabled]) .button {
    color: ${x};
  }

  :host([disabled]) svg {
    filter: invert(89%) sepia(0%) saturate(569%) hue-rotate(155deg) brightness(88%) contrast(87%);
  }

  /* --- Expanded attr styles --- */

  :host([expanded]) .content {
    display: block;
  }

  :host([expanded]) .default-marker-collapsed,
  :host([expanded]) ::slotted([slot='marker-collapsed']),
  :host(:not([expanded])) :is(.default-marker-expanded, .content),
  :host(:not([expanded])) ::slotted([slot='marker-expanded']) {
    display: none;
  }

  :host([expanded]) ::slotted([slot='marker-expanded']),
  :host(:not([expanded])) ::slotted([slot='marker-collapsed']) {
    display: flex;
  }

  /* --- Appearance attr styles --- */

  .heading {
    font-size: ${s};
    line-height: ${l};
  }

  :host([size='small']) .heading {
    font-size: ${w};
    line-height: ${S};
  }

  :host([size='large']) .heading {
    font-size: ${z};
    line-height: ${F};
  }

  :host([size='extra-large']) .heading {
    font-size: ${C};
    line-height: ${L};
  }

  /* --- marker-position attr styles --- */

  :host([marker-position='end']) ::slotted([slot='start']) {
    grid-column: 1 / span 1;
    color: currentColor;
  }

  :host([marker-position='end']) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 4 / span 1;
    padding-inline-start: ${n};
    padding-inline-end: 0;
  }

  :host([marker-position='end']) .button {
    grid-column: 2 / span 3;
  }

  /* --- Block attr styles --- */

  :host([block]) {
    max-width: 100%;
  }

  :host([marker-position='end']) .heading {
    grid-template-columns: auto auto 28px;
    padding-inline: ${t};
  }

  :host([marker-position='end']:has([slot='start'])) .heading {
    padding-inline: ${d} ${t};
  }

  :host([block][marker-position='end']) .heading {
    grid-template-columns: auto 1fr;
  }

  :host([marker-position='end']) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 5 / span 1;
  }
`;var M=o.partial(`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="default-marker-collapsed"
  aria-hidden="true"
>
  <path
    d="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z"
    fill="currentColor"
  />
</svg>`),D=o.partial(`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="default-marker-expanded"
  aria-hidden="true"
>
  <path
    d="M15.794 7.73271C16.0797 8.03263 16.0681 8.50737 15.7682 8.79306L10.5178 13.7944C10.2281 14.0703 9.77285 14.0703 9.48318 13.7944L4.23271 8.79306C3.93279 8.50737 3.92125 8.03263 4.20694 7.73271C4.49264 7.43279 4.96737 7.42125 5.26729 7.70694L10.0005 12.2155L14.7336 7.70694C15.0336 7.42125 15.5083 7.43279 15.794 7.73271Z"
    fill="currentColor"
  />
</svg>`);function N(a={}){return o`
    <div class="heading" part="heading" role="heading" aria-level="${e=>e.headinglevel}">
      <button
        class="button"
        part="button"
        id="control"
        aria-controls="panel"
        aria-expanded="${e=>e.expanded}"
        ?disabled="${e=>e.disabled}"
        ${c("expandbutton")}
      >
        <slot name="heading"></slot>
      </button>
      ${g(a)}
      <slot name="marker-expanded"> ${r(a.expandedIcon)} </slot>
      <slot name="marker-collapsed"> ${r(a.collapsedIcon)} </slot>
    </div>
    <div class="content" part="content" id="panel" role="region" aria-labelledby="control">
      <slot></slot>
    </div>
  `}var I=N({collapsedIcon:M,expandedIcon:D});var P={name:h,registry:m.registry,styles:H,template:I};export{H as a,I as b,P as c};
