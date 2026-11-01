import{b as p}from"./chunk-T56KFFDJ.js";import{Ib as a,Mg as o}from"./chunk-I3TN42IT.js";import{a as n}from"./chunk-MTF7GSAX.js";import{b as l}from"./chunk-27T3HUJZ.js";import{b as e}from"./chunk-KQ53VGFF.js";import{b as i}from"./chunk-WJ6BGRAP.js";import{e as s}from"./chunk-3WMUIIMG.js";import{a as t}from"./chunk-QDYRH5Y7.js";import{c as r}from"./chunk-L44UMAPT.js";function g(){return s`
    <template @keydown="${(c,f)=>c.menuKeydownHandler(f.event)}">
      <slot name="primary-action" ${i("primaryAction")}></slot>
      <slot name="trigger" ${e({property:"slottedTriggers",filter:t()})}></slot>
      <slot ${e({property:"slottedMenuList",filter:t()})}></slot>
    </template>
  `}var d=g();var m=r`
  ${l("inline-block")}

  ::slotted([slot='trigger']) {
    anchor-name: --menu-trigger;
  }

  ::slotted([popover]) {
    margin: 0;
    max-height: var(--menu-max-height, auto);
    position-anchor: --menu-trigger;
    inset: unset;
    inset-block-start: anchor(outside);
    inset-inline-start: anchor(self-start);
    position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    position: fixed;
    z-index: 1;
  }

  :host([split]) ::slotted([popover]) {
    inset-inline-start: unset;
    inset-inline-end: anchor(self-end);
  }

  ::slotted([popover]:not(:popover-open)) {
    display: none;
  }

  :host([split]) {
    display: inline-flex;
  }

  :host([split]) ::slotted([slot='primary-action']) {
    border-inline-end: ${o} solid ${a};
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  /* Keeps focus visible visuals above trigger slot*/
  :host([split]) ::slotted([slot='primary-action']:focus-visible) {
    z-index: 1;
  }

  :host([split]) ::slotted([slot='primary-action'][appearance='primary']) {
    border-inline-end: ${o} solid white;
  }

  :host([split]) ::slotted([slot='trigger']) {
    border-inline-start: 0;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }
`;var z={name:p,registry:n.registry,styles:m,template:d};export{d as a,m as b,z as c};
