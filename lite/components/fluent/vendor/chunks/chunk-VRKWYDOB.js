import{e as Q,i as Y}from"./chunk-44LJ736W.js";import{a as J,d as K,e as L}from"./chunk-FKR45OA7.js";import{g as o,n as E,p as q}from"./chunk-7W6XT5GS.js";import{$a as k,Eb as v,Fb as y,Gb as x,Ib as N,Jb as z,Kb as B,Mg as r,Ng as n,Qf as M,Rg as a,Sf as t,Tg as X,Ug as j,Vg as G,Wg as I,Xa as f,a as u,bc as H,bh as l,ch as c,dh as i,ec as F,fa as b,hc as e,ic as T,kh as O,l as h,mc as D,na as m,nb as w,nc as C,nh as R,ob as S,rg as A,s as $,sg as P,tg as V,th as U,wh as W,x as g}from"./chunk-DVLTGBYE.js";import{a as d}from"./chunk-FUXJWCXM.js";import{b as p}from"./chunk-SRPHT6VS.js";import{c as s}from"./chunk-3MFZGGQB.js";var Z=s`
  ${p("inline-flex")}

  :host {
    box-sizing: border-box;
    color: ${u};
    cursor: pointer;
  }

  :host(${q}) {
    color: ${$};
  }

  .control {
    appearance: none;
    background-color: ${b};
    border-radius: ${t};
    border: ${r} solid ${e};
    box-shadow: inset 0 0 0 ${r} var(--control-border-color);
    box-sizing: border-box;
    color: inherit;
    column-gap: ${a};
    display: inline-flex;
    justify-content: space-between;
    min-width: 160px;
    overflow: hidden;
    padding: ${c} ${G};
    white-space: normal;
    position: relative;
    text-align: start;
    width: 100%;
    z-index: 1;
    ${J}
  }

  :host([size='small']) .control {
    column-gap: ${a};
    padding: ${l} ${X};
    ${L}
  }

  :host([size='large']) .control {
    column-gap: ${j};
    padding: ${i} ${I};
    ${K}
  }

  ::slotted(:is(input, button)) {
    all: unset;
    flex: 1 1 auto;
  }

  ::slotted(button) {
    cursor: pointer;
  }

  ::slotted(input) {
    cursor: text;
  }

  :where(slot[name='indicator'] > *, ::slotted([slot='indicator'])) {
    all: unset;
    align-items: center;
    appearance: none;
    aspect-ratio: 1;
    color: ${h};
    display: inline-flex;
    justify-content: center;
    width: 20px;
  }

  :host([size='small']) :where(slot[name='indicator'] > *, ::slotted([slot='indicator'])) {
    width: 16px;
  }

  :host([size='large']) :where(slot[name='indicator'] > *, ::slotted([slot='indicator'])) {
    width: 24px;
  }

  .control::after,
  .control::before {
    content: '' / '';
    inset: auto 0 0;
    pointer-events: none;
    position: absolute;
  }

  .control::before {
    height: ${r};
  }

  .control::after {
    background-color: ${H};
    height: ${n};
    scale: 0 1;
    transition: scale ${O} ${W};
  }

  /**
  * focus-ring style uses lingering :focus-within selector due to platform limitations
  * TODO: Convert selector to \`:host(:has(:focus-visible)) .control\` when browser support increases
  * ISSUE: https://issues.chromium.org/issues/40062355
  */
  :host(:where(:focus-within)) .control {
    border-radius: ${t};
    box-shadow: inset 0 0 0 1px ${D};
    outline: ${n} solid ${C};
  }

  :host(:where(${E}, :focus-within)) .control::after {
    scale: 1 1;
    transition-duration: ${R};
    transition-timing-function: ${U};
  }

  :host(:where([appearance='outline'], [appearance='transparent'])) .control::before {
    background-color: ${v};
  }

  :host([appearance='transparent']) .control {
    --control-border-color: ${T};
    background-color: ${f};
    border-radius: ${M};
  }

  :host([appearance='outline']) .control {
    --control-border-color: ${N};
  }

  :host([appearance='outline']) .control:hover {
    --control-border-color: ${z};
  }

  :host(:where([appearance='outline'], [appearance='transparent'])) .control:hover::before {
    background-color: ${y};
  }

  :host([appearance='outline']) .control:hover::after {
    background-color: ${w};
  }

  :host([appearance='outline']) .control:active {
    --control-border-color: ${B};
  }

  :host(:where([appearance='outline'], [appearance='transparent'])) .control:active::before {
    background-color: ${x};
  }

  :host(:where([appearance='outline'], [appearance='transparent'])) .control:active::after {
    background-color: ${S};
  }

  :host([appearance='filled-darker']) .control {
    background-color: ${m};
  }

  :host(:where([appearance='filled-lighter'], [appearance='filled-darker'])) .control {
    --control-border-color: ${e};
  }

  :host(${o}),
  :host(${o}) ::slotted(:where(button, input)) {
    cursor: not-allowed;
  }

  :host(${o}) .control::before,
  :host(${o}) .control::after {
    content: none;
  }

  :host(${o}) .control:is(*, :active, :hover),
  :host(${o}) :where(slot[name='indicator'] > *, ::slotted([slot='indicator'])) {
    --control-border-color: ${F};
    background-color: ${k};
    color: ${g};
  }

  ::slotted(:not([slot]):not([popover])),
  ::slotted([popover]:not(:popover-open)) {
    display: none;
  }

  @supports not (anchor-name: --anchor) {
    :host {
      --listbox-max-height: 50vh;
      --margin-offset: calc(${P} + (${c} * 2) + ${r});
    }

    :host([size='small']) {
      --margin-offset: calc(${A} + (${l} * 2) + ${r});
    }

    :host([size='large']) {
      --margin-offset: calc(${V} + (${i} * 2) + ${r});
    }
  }

  @media (forced-colors: active) {
    :host(${o}) .control {
      border-color: GrayText;
    }
    :host(${o}) :where(slot[name='indicator'] > *, ::slotted([slot='indicator'])) {
      color: GrayText;
    }
  }
`;var so={name:Q,registry:d.registry,styles:Z,template:Y};export{Z as a,so as b};
