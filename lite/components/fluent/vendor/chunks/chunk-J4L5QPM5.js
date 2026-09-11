import{d as _}from"./chunk-VBEW52HM.js";import{$g as e,Ma as v,Na as b,Oa as f,Pa as k,Qa as S,Ra as x,Rg as w,Sa as y,Sf as F,Sg as i,Wg as a,Xa as B,Ya as z,Za as X,Zg as s,_a as H,ah as V,dh as A,e as u,eg as L,f as h,g as m,h as o,ih as l,jh as M,lh as P,nc as n,o as $,sg as N,yh as T}from"./chunk-DVLTGBYE.js";import{a as p}from"./chunk-FUXJWCXM.js";import{b as g}from"./chunk-SRPHT6VS.js";import{b as d}from"./chunk-JB4YKTVJ.js";import{e as r}from"./chunk-IQAG6JCP.js";import{c}from"./chunk-3MFZGGQB.js";var D=r`
  <svg viewBox="0 0 12 12" fill="currentColor">
    <path
      d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"
    ></path>
  </svg>
`,j=r`
  <template tabindex="0" ?focusgroupstart="${t=>t.selected}">
    <div class="positioning-region" part="positioning-region">
      <div class="content" part="content">
        <span class="chevron" part="chevron" aria-hidden="true">
          <slot name="chevron">${D}</slot>
        </span>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </div>
      <div class="aside" part="aside">
        <slot name="aside"></slot>
      </div>
    </div>
    <div role="group" class="items" part="items">
      <slot name="item" ${d("itemSlot")} @slotchange="${t=>t.handleItemSlotChange()}"></slot>
    </div>
  </template>
`;var C=c`
  ${g("block")}

  :host {
    --_subitem-padding-inline-start: ${s};

    outline: none;
    font-size: ${L};
    line-height: ${N};
  }

  :host([size='small']) {
    --_subitem-padding-inline-start: ${a};
  }

  :host(:focus-visible) .positioning-region {
    box-shadow: ${e} ${e} ${e} ${V}
      ${n} inset;
  }

  /**
   * Default variants:
   * Size - medium
   * Appearance - subtle
   */
  .positioning-region {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: ${M};
    padding-inline-end: ${A};
    border-radius: ${F};
    background-color: ${v};
    color: ${u};
    gap: ${i};
  }

  @media (prefers-contrast: more) {
    :host(:focus-visible) .positioning-region {
      outline: 1px solid ${n};
    }
  }

  .content {
    display: flex;
    align-items: center;
    gap: ${i};
  }

  .chevron {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    width: ${s};
    height: ${l};
    transition: transform ${P} ${T};
    transform: rotate(0deg);
  }

  .chevron:dir(rtl) {
    transform: rotate(180deg);
  }

  .chevron svg {
    inline-size: 12px;
    block-size: 12px;
  }

  .aside {
    display: flex;
    align-items: center;
  }

  .positioning-region:hover {
    background-color: ${b};
    color: ${h};
  }

  .positioning-region:active {
    background-color: ${f};
    color: ${m};
  }

  ::slotted([slot='start']),
  ::slotted([slot='end']),
  ::slotted(:not([slot])) {
    display: flex;
    align-items: center;
    min-width: 0;
  }

  ::slotted([slot='start']) {
    flex-shrink: 0;
  }

  ::slotted(:not([slot])) {
    padding-inline: ${w};
  }

  .items {
    display: none;
    padding-inline-start: var(--_subitem-padding-inline-start);
  }

  :host([expanded]) .items {
    display: block;
  }

  :host([empty]) .chevron,
  :host([empty]) .items {
    visibility: hidden;
  }

  :host([selected]) .positioning-region {
    background-color: ${k};
    color: ${o};
  }

  :host([selected]) .content,
  :host([selected]) .chevron {
    color: ${$};
  }

  :host([size='small']) .positioning-region {
    height: ${l};
    padding-inline-start: ${a};
  }

  :host([appearance='subtle-alpha']) .positioning-region:hover {
    background-color: ${S};
  }

  :host([appearance='subtle-alpha']) .positioning-region:active {
    background-color: ${x};
  }

  :host([appearance='subtle-alpha'][selected]) .positioning-region {
    background-color: ${y};
    color: ${o};
  }

  :host([appearance='transparent']) .positioning-region {
    background-color: ${B};
  }

  :host([appearance='transparent']) .positioning-region:hover {
    background-color: ${z};
  }

  :host([appearance='transparent']) .positioning-region:active {
    background-color: ${X};
  }

  :host([appearance='transparent'][selected]) .positioning-region {
    background-color: ${H};
    color: ${o};
  }

  :host([expanded]) .chevron {
    transform: rotate(90deg);
  }
`;var W={name:_,registry:p.registry,styles:C,template:j};export{j as a,C as b,W as c};
