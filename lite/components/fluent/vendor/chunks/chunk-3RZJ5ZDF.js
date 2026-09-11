import{f as K}from"./chunk-5MF56QCF.js";import{A as J,g as e}from"./chunk-7W6XT5GS.js";import{$f as F,Ag as I,Bc as n,Eb as v,Fa as z,Fb as x,Gb as y,Ib as S,Jb as N,K as $,Kb as w,Mg as E,Rg as a,Sf as r,Sg as P,Tg as c,Vg as R,Wg as V,Xa as f,a as g,bc as B,bh as d,ch as q,dg as T,dh as L,ec as H,eg as X,fa as k,fg as A,kh as O,mg as C,na as m,nh as W,rg as D,s as u,sg as M,tg as G,th as U,wh as j,x as i}from"./chunk-DVLTGBYE.js";import{a as p}from"./chunk-FUXJWCXM.js";import{b as h}from"./chunk-SRPHT6VS.js";import{b as t}from"./chunk-RD5DBDNA.js";import{b as l}from"./chunk-JB4YKTVJ.js";import{e as b}from"./chunk-IQAG6JCP.js";import{c as s}from"./chunk-3MFZGGQB.js";var Q=s`
  ${h("inline-block")}

  :host {
    /* typography */
    --font-size: ${X};
    --line-height: ${M};

    /* layout */
    --padding-inline: ${R};
    --padding-block: ${q};
    --min-block-size: 52px;
    --block-size: var(--min-block-size);
    --inline-size: 18rem;
    --border-width: ${E};
    --control-padding-inline: ${a};

    /* colors */
    --color: ${g};
    --background-color: ${k};
    --border-color: ${S};
    --border-block-end-color: ${v};
    --placeholder-color: ${u};
    --focus-indicator-color: ${B};

    /* elevations */
    --box-shadow: none;

    /* others */
    --contain-size: size;
    --resize: none;

    color: var(--color);
    font-family: ${F};
    font-size: var(--font-size);
    font-weight: ${C};
    line-height: var(--line-height);
    position: relative;
  }

  :host(:hover) {
    --border-color: ${N};
    --border-block-end-color: ${x};
  }

  :host(:active) {
    --border-color: ${w};
    --border-block-end-color: ${y};
  }

  :host(:focus-within) {
    outline: none;
  }

  :host([block]:not([hidden])) {
    display: block;
  }

  :host([size='small']) {
    --font-size: ${T};
    --line-height: ${D};
    --min-block-size: 40px;
    --padding-block: ${d};
    --padding-inline: ${c};
    --control-padding-inline: ${a};
  }

  :host([size='large']) {
    --font-size: ${A};
    --line-height: ${G};
    --min-block-size: 64px;
    --padding-block: ${L};
    --padding-inline: ${V};
    --control-padding-inline: ${c};
  }

  :host([resize='both']:not(${e})) {
    --resize: both;
  }

  :host([resize='horizontal']:not(${e})) {
    --resize: horizontal;
  }

  :host([resize='vertical']:not(${e})) {
    --resize: vertical;
  }

  :host([auto-resize]) {
    --block-size: auto;
    --contain-size: inline-size;
  }

  :host([appearance='filled-darker']) {
    --background-color: ${m};
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host([appearance='filled-lighter']) {
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host([appearance='filled-darker'][display-shadow]),
  :host([appearance='filled-lighter'][display-shadow]) {
    --box-shadow: ${I};
  }

  :host(${J}) {
    --border-color: ${n};
    --border-block-end-color: ${n};
  }

  :host(${e}) {
    --color: ${i};
    --background-color: ${f};
    --border-color: ${H};
    --border-block-end-color: var(--border-color);
    --box-shadow: none;
    --placeholder-color: ${i};

    cursor: no-drop;
    user-select: none;
  }

  .root {
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);
    border-block-end-color: var(--border-block-end-color);
    border-radius: ${r};
    box-sizing: border-box;
    box-shadow: var(--box-shadow);
    contain: paint layout style var(--contain-size);
    display: grid;
    grid-template: 1fr / 1fr;
    inline-size: var(--inline-size);
    min-block-size: var(--min-block-size);
    block-size: var(--block-size);
    overflow: hidden;
    padding: var(--padding-block) var(--padding-inline);
    position: relative;
    resize: var(--resize);
  }

  :host([block]) .root {
    inline-size: auto;
  }

  .root::after {
    border-bottom: 2px solid var(--focus-indicator-color);
    border-radius: 0 0 ${r} ${r};
    box-sizing: border-box;
    clip-path: inset(calc(100% - 2px) 1px 0px);
    content: '';
    height: max(2px, ${r});
    inset: auto -1px 0;
    position: absolute;
    transform: scaleX(0);
    transition-delay: ${U};
    transition-duration: ${O};
    transition-property: transform;
  }

  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${W};
    transition-delay: ${j};
  }

  :host([readonly]) .root::after,
  :host(${e}) .root::after {
    content: none;
  }

  label {
    color: var(--color);
    display: flex;
    inline-size: fit-content;
    padding-block-end: ${d};
    padding-inline-end: ${P};
  }

  :host(:empty) label,
  label[hidden] {
    display: none;
  }

  .auto-sizer,
  .control {
    box-sizing: border-box;
    font: inherit;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    letter-space: inherit;
    padding: 0 var(--control-padding-inline);
  }

  .auto-sizer {
    display: none;
    padding-block-end: 2px; /* avoid scroll bar in Firefox */
    pointer-events: none;
    visibility: hidden;
    white-space: pre-wrap;
  }

  :host([auto-resize]) .auto-sizer {
    display: block;
  }

  .control {
    appearance: none;
    background-color: transparent;
    border: 0;
    color: inherit;
    field-sizing: content;
    max-block-size: 100%;
    outline: 0;
    overflow: auto;
    resize: none;
    text-align: inherit;
  }

  .control:disabled {
    cursor: inherit;
  }

  .control::placeholder {
    color: var(--placeholder-color);
  }

  ::selection {
    color: ${$};
    background-color: ${z};
  }

  @media (forced-colors: active) {
    :host {
      --border-color: FieldText;
      --border-block-end-color: FieldText;
      --focus-indicator-color: Highlight;
      --placeholder-color: FieldText;
    }

    :host(:hover),
    :host(:active),
    :host(:focus-within) {
      --border-color: Highlight;
      --border-block-end-color: Highlight;
    }

    :host(${e}) {
      --color: GrayText;
      --border-color: GrayText;
      --border-block-end-color: GrayText;
      --placeholder-color: GrayText;
    }
  }
`;function Z(){return b`
    <template>
      <label ${l("labelEl")} for="control" part="label">
        <slot name="label" ${t("labelSlottedNodes")}></slot>
      </label>
      <div class="root" part="root" ${l("rootEl")}>
        <textarea
          ${l("controlEl")}
          id="control"
          class="control"
          part="control"
          ?required="${o=>o.required}"
          ?disabled="${o=>o.disabled}"
          ?readonly="${o=>o.readOnly}"
          ?spellcheck="${o=>o.spellcheck}"
          autocomplete="${o=>o.autocomplete}"
          maxlength="${o=>o.maxLength}"
          minlength="${o=>o.minLength}"
          placeholder="${o=>o.placeholder}"
          @change="${o=>o.handleControlChange()}"
          @select="${o=>o.handleControlSelect()}"
          @input="${o=>o.handleControlInput()}"
        ></textarea>
      </div>
      <div hidden>
        <slot ${t("defaultSlottedNodes")}></slot>
      </div>
    </template>
  `}var Y=Z();var bo={name:K,registry:p.registry,shadowOptions:{delegatesFocus:!0},styles:Q,template:Y};export{Q as a,Y as b,bo as c};
