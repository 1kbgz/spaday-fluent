import{d as F}from"./chunk-CG3IVX62.js";import{H as m,Na as $,Oa as s,Og as t,Tg as x,Vg as e,Wg as y,_f as n,a as u,ah as w,b as p,bc as k,ch as l,dh as a,e as f,eg as v,eh as P,fg as I,gh as S,ph as N,sg as B,tg as z,vh as H,x as o}from"./chunk-DVLTGBYE.js";import{a as h}from"./chunk-FUXJWCXM.js";import{b as g}from"./chunk-SRPHT6VS.js";import{b}from"./chunk-RD5DBDNA.js";import{e as c}from"./chunk-IQAG6JCP.js";import{c as d}from"./chunk-3MFZGGQB.js";var C=d`
  ${g("flex")}

  :host {
    --tabPaddingInline: ${e};
    --tabPaddingBlock: ${y};
    --tabIndicatorInsetInline: var(--tabPaddingInline);
    --tabIndicatorInsetBlock: 0;
    box-sizing: border-box;
    color: ${f};
    flex-direction: row;
    position: relative;
  }

  :host([size='small']) {
    --tabPaddingBlock: ${l};
    --tabPaddingInline: ${x};
  }

  :host([size='large']) {
    --tabPaddingBlock: ${S};
    --tabPaddingInline: ${e};
  }

  :host([orientation='vertical']) {
    --tabPaddingBlock: ${a};
    --tabIndicatorInsetBlock: ${a};
    --_col-start-width: 0px;
    display: grid;
    grid-template-columns: ${e} var(--_col-start-width) 1fr auto ${e};
  }

  :host(:has([slot='start'])) {
    --_col-start-width: 24px;
  }

  @scope {
    :scope:has([slot='start']) {
      --_col-start-width: 24px;
    }
  }

  :host([orientation='vertical'][size='small']) {
    --tabPaddingBlock: ${w};
    --tabIndicatorInsetBlock: ${l};
  }

  :host([orientation='vertical'][size='large']) {
    --tabPaddingBlock: ${a};
    --tabIndicatorInsetBlock: ${P};
  }

  ::slotted([slot='tab']) {
    padding-inline: var(--tabPaddingInline);
    padding-block: var(--tabPaddingBlock);
  }

  :host([orientation='vertical']) ::slotted([role='tab']) {
    justify-content: flex-start;
    display: grid;
    gap: 0;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    grid-row: unset;
    padding-inline: 0;
  }

  :host ::slotted([slot='tab'])::after {
    height: ${t};
    margin-block-start: auto;
  }

  :host([orientation='vertical']) ::slotted([slot='tab'])::after {
    width: ${t};
    height: unset;
    margin-block-start: unset;
  }

  /* ::before adds a secondary indicator placeholder that appears right after click on the active tab */
  :host ::slotted([slot='tab'])::before {
    height: ${t};
    border-radius: ${n};
    content: '';
    inset-inline: var(--tabIndicatorInsetInline);
    inset-block: var(--tabIndicatorInsetBlock);
    position: absolute;
    margin-top: auto;
  }

  :host ::slotted([slot='tab'])::before {
    inset-inline: var(--tabIndicatorInsetInline);
    inset-block: var(--tabIndicatorInsetBlock);
  }

  :host ::slotted([slot='tab'][aria-selected='true'])::before {
    background-color: ${o};
  }

  :host ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: ${t};
    margin-block-start: auto;
    transform-origin: left;
  }

  :host([orientation='vertical']) ::slotted([slot='tab'])::before,
  :host([orientation='vertical']) ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: unset;
    width: ${t};
    margin-inline-end: auto;
    transform-origin: top;
  }

  :host([size='small']) ::slotted([slot='tab']) {
    font-size: ${v};
    line-height: ${B};
  }

  :host([size='large']) ::slotted([slot='tab']) {
    font-size: ${I};
    line-height: ${z};
  }

  /* horizontal spacing for indicator */
  :host ::slotted([slot='tab'])::after,
  :host ::slotted([slot='tab'])::before,
  :host ::slotted([slot='tab']:hover)::after {
    inset-inline: var(--tabIndicatorInsetInline);
  }

  :host([orientation='vertical']) ::slotted([slot='tab'])::after,
  :host([orientation='vertical']) ::slotted([slot='tab'])::before,
  :host([orientation='vertical']) ::slotted([slot='tab']:hover)::after {
    inset-inline: 0;
    inset-block: var(--tabIndicatorInsetBlock);
  }

  /* disabled styles */
  :host([disabled]) {
    cursor: not-allowed;
    color: ${o};
  }

  :host([disabled]) ::slotted([slot='tab']) {
    pointer-events: none;
    cursor: not-allowed;
    color: ${o};
  }

  :host([disabled]) ::slotted([slot='tab']:after) {
    background-color: ${o};
  }

  :host([disabled]) ::slotted([slot='tab'][aria-selected='true'])::after {
    background-color: ${o};
  }

  :host([disabled]) ::slotted([slot='tab']:hover):before {
    content: unset;
  }

  :host([appearance='subtle']) ::slotted([slot='tab']:hover) {
    background-color: ${$};
    color: ${p};
    fill: ${m};
  }

  :host([appearance='subtle']) ::slotted([slot='tab']:active) {
    background-color: ${s};
    fill: ${s};
    color: ${u};
  }

  /*
   * TODO: Remove '(text-size-adjust: auto)' after this bug is fixed:
   * https://bugs.webkit.org/show_bug.cgi?id=298646
   * Also remove the same trick from tab.styles.ts.
   * Using '@supports (text-size-adjust: auto)' here to exclude Safari 26.0 from
   * using CSS Anchor Positioning here because it crashes.
   */
  @supports (anchor-name: --a) and (text-size-adjust: auto) {
    ::slotted([slot='tab'][aria-selected='true']) {
      anchor-name: --tab;
    }

    :host::after {
      background-color: ${k};
      content: '';
      inline-size: 100%;
      inset-block: auto anchor(end);
      inset-inline: anchor(center) auto;
      position: fixed;
      position-anchor: --tab;
      transform: translateX(-50%);
      transition-property: inset-inline, width;
      transition-duration: ${N};
      transition-timing-function: ${H};
      z-index: 3;

      /* These styles should be in sync with tab.styles.ts’s :host::after */
      border-radius: ${n};
      width: calc(anchor-size() - var(--tabIndicatorInsetInline) * 2);
      height: ${t};
    }

    :host(:dir(rtl))::after {
      transform: translateX(50%);
    }

    :host([orientation='vertical'])::after {
      inset-block: anchor(center) auto;
      inset-inline: anchor(start) auto;
      transform: translateY(-50%);
      transition-property: inset-block, height;

      /* These styles should be in sync with #vertical-tab-highlight above */
      width: ${t};
      height: calc(anchor-size() - var(--tabIndicatorInsetBlock) * 2);
    }

    :host([disabled])::after {
      background-color: ${o};
    }
  }
`;var T=c`
  <template
    role="tablist"
    focusgroup="tablist inline block"
    @click="${(i,r)=>i.handleClick(r.event)}"
    @focusin="${(i,r)=>i.handleFocusIn(r.event)}"
  >
    <slot name="tab" ${b("slottedTabs")}></slot>
  </template>
`;var U={name:F,registry:h.registry,styles:C,template:T};export{C as a,T as b,U as c};
