import{$a as y,$f as q,Ag as I,Bg as J,Ib as S,J as e,Jb as w,Kb as F,Ma as m,Mg as K,Na as x,Ng as Q,Oa as B,Qf as P,Rf as R,Sf as W,Sg as U,Tf as D,Tg as V,Ug as Y,Wg as Z,Xa as o,Xg as _,Ya as t,Za as l,_f as j,a as p,b as u,c as b,dg as C,e as a,ec as T,eg as E,f as h,fa as v,fg as L,g,ga as f,ha as k,hc as n,i as s,ib as N,j as i,jb as z,kb as H,lh as oo,mg as M,nc as d,og as G,rg as O,sg as X,tg as A,x as $,zh as eo}from"./chunk-DVLTGBYE.js";import{b as c}from"./chunk-SRPHT6VS.js";import{c as r}from"./chunk-3MFZGGQB.js";var ro=r`
  ${c("inline-flex")}

  :host {
    --icon-spacing: ${V};
    position: relative;
    contain: layout style;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${v};
    color: ${p};
    border: ${K} solid ${S};
    padding: 0 ${Z};
    min-width: 96px;
    border-radius: ${W};
    font-size: ${E};
    font-family: ${q};
    font-weight: ${G};
    line-height: ${X};
    transition-duration: ${oo};
    transition-property: background, border, color;
    transition-timing-function: ${eo};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${f};
    color: ${u};
    border-color: ${w};
  }

  :host(:hover:active) {
    background-color: ${k};
    border-color: ${F};
    color: ${b};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${n};
    outline: ${Q} solid ${n};
    box-shadow: ${J}, 0 0 0 2px ${d};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host {
      transition-duration: 0.01ms;
    }
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  ::slotted([slot='start']) {
    margin-inline-end: var(--icon-spacing);
  }

  ::slotted([slot='end']),
  [slot='end'] {
    flex-shrink: 0;
    margin-inline-start: var(--icon-spacing);
  }

  :host([icon-only]) {
    min-width: 32px;
    max-width: 32px;
  }

  :host([size='small']) {
    --icon-spacing: ${U};
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${Y};
    border-radius: ${R};
    font-size: ${C};
    line-height: ${O};
    font-weight: ${M};
  }

  :host([size='small'][icon-only]) {
    min-width: 24px;
    max-width: 24px;
  }

  :host([size='large']) {
    min-height: 40px;
    border-radius: ${D};
    padding: 0 ${_};
    font-size: ${L};
    line-height: ${A};
  }

  :host([size='large'][icon-only]) {
    min-width: 40px;
    max-width: 40px;
  }

  :host([size='large']) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(:is([shape='circular'], [shape='circular']:focus-visible)) {
    border-radius: ${j};
  }

  :host(:is([shape='square'], [shape='square']:focus-visible)) {
    border-radius: ${P};
  }

  :host([appearance='primary']) {
    background-color: ${N};
    color: ${e};
    border-color: transparent;
  }

  :host([appearance='primary']:hover) {
    background-color: ${z};
  }

  :host([appearance='primary']:is(:hover, :hover:active):not(:focus-visible)) {
    border-color: transparent;
  }

  :host([appearance='primary']:is(:hover, :hover:active)) {
    color: ${e};
  }

  :host([appearance='primary']:hover:active) {
    background-color: ${H};
  }

  :host([appearance='primary']:focus-visible) {
    border-color: ${e};
    box-shadow: ${I}, 0 0 0 2px ${d};
  }

  :host([appearance='outline']) {
    background-color: ${o};
  }

  :host([appearance='outline']:hover) {
    background-color: ${t};
  }

  :host([appearance='outline']:hover:active) {
    background-color: ${l};
  }

  :host([appearance='subtle']) {
    background-color: ${m};
    color: ${a};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) {
    background-color: ${x};
    color: ${h};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover:active) {
    background-color: ${B};
    color: ${g};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) ::slotted(svg) {
    fill: ${s};
  }

  :host([appearance='subtle']:hover:active) ::slotted(svg) {
    fill: ${i};
  }

  :host([appearance='transparent']) {
    background-color: ${o};
    color: ${a};
  }

  :host([appearance='transparent']:hover) {
    background-color: ${t};
    color: ${s};
  }

  :host([appearance='transparent']:hover:active) {
    background-color: ${l};
    color: ${i};
  }

  :host(:is([appearance='transparent'], [appearance='transparent']:is(:hover, :active))) {
    border-color: transparent;
  }
`,to=r`
  ${ro}

  :host(:is(:disabled, [disabled], [disabled-focusable], [appearance]:disabled, [appearance][disabled], [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled], [disabled-focusable], [appearance]:disabled, [appearance][disabled], [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled], [disabled-focusable], [appearance]:disabled, [appearance][disabled], [appearance][disabled-focusable]):hover:active) {
    background-color: ${y};
    border-color: ${T};
    color: ${$};
    cursor: not-allowed;
  }

  :host([appearance='primary']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='primary']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host([appearance='outline']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='outline']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${o};
  }

  :host([appearance='subtle']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='subtle']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${o};
    border-color: transparent;
  }

  :host([appearance='transparent']:is(:disabled, [disabled], [disabled-focusable])),
  :host([appearance='transparent']:is(:disabled, [disabled], [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${o};
  }

  @media (forced-colors: active) {
    :host {
      background-color: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight !important;
    }

    :host([appearance='primary']:not(:is(:hover, :focus-visible))) {
      background-color: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }

    :host(
        :is(
            :disabled,
            [disabled],
            [disabled-focusable],
            [appearance]:disabled,
            [appearance][disabled],
            [appearance][disabled-focusable]
          )
      ) {
      background-color: ButtonFace;
      color: GrayText;
      border-color: ButtonText;
    }
  }
`;export{ro as a,to as b};
