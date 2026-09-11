import{$c as j,$f as E,Ac as y,Cc as N,Eb as S,Ec as p,Gc as G,Ic as O,J as t,K as b,Lc as R,Mb as c,Mc as D,Mg as M,Nc as H,Oc as Y,P as k,Qc as T,Rg as e,Sc as X,Sg as u,Tg as Q,Uc as C,V as d,W as x,Wc as I,Yc as h,Z as f,Zb as w,Zc as W,_f as q,a,bd as A,cg as J,dg as i,ed as n,fa as l,hc as g,ib as B,l as o,og as K,qb as P,qg as L,ra as m,rg as s,va as z,wc as F,yc as v}from"./chunk-DVLTGBYE.js";import{b as $}from"./chunk-SRPHT6VS.js";import{c as r}from"./chunk-3MFZGGQB.js";var _=r.partial`
  ${$("inline-flex")} :host {
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-family: ${E};
    font-weight: ${K};
    font-size: ${i};
    line-height: ${s};
    min-width: 20px;
    height: 20px;
    padding-inline: calc(${u} + ${e});
    border-radius: ${q};
    border-color: ${g};
    background-color: ${B};
    color: ${t};
    contain: content;
  }

  ::slotted(svg) {
    font-size: 12px;
  }

  :host(:not([appearance='ghost']))::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: ${M};
    border-color: inherit;
    border-radius: inherit;
  }
`,oo=r.partial`
  :host([size='tiny']) {
    width: 6px;
    height: 6px;
    font-size: 4px;
    line-height: 4px;
    padding-inline: 0;
    min-width: unset;
  }
  :host([size='tiny']) ::slotted(svg) {
    font-size: 6px;
  }
  :host([size='extra-small']) {
    width: 10px;
    height: 10px;
    font-size: 6px;
    line-height: 6px;
    padding-inline: 0;
    min-width: unset;
  }
  :host([size='extra-small']) ::slotted(svg) {
    font-size: 10px;
  }
  :host([size='small']) {
    min-width: 16px;
    height: 16px;
    font-size: ${J};
    line-height: ${L};
    padding-inline: calc(${e} + ${e});
  }
  :host([size='small']) ::slotted(svg) {
    font-size: 12px;
  }
  :host([size='large']) {
    min-width: 24px;
    height: 24px;
    font-size: ${i};
    line-height: ${s};
    padding-inline: calc(${u} + ${e});
  }
  :host([size='large']) ::slotted(svg) {
    font-size: 16px;
  }
  :host([size='extra-large']) {
    min-width: 32px;
    height: 32px;
    font-size: ${i};
    line-height: ${s};
    padding-inline: calc(${Q} + ${e});
  }
  :host([size='extra-large']) ::slotted(svg) {
    font-size: 20px;
  }
`,ro=r.partial`
  :host([color='danger']) {
    background-color: ${v};
    color: ${t};
  }

  :host([color='important']) {
    background-color: ${a};
    color: ${l};
  }

  :host([color='informative']) {
    background-color: ${z};
    color: ${o};
  }

  :host([color='severe']) {
    background-color: ${X};
    color: ${t};
  }

  :host([color='subtle']) {
    background-color: ${l};
    color: ${a};
  }

  :host([color='success']) {
    background-color: ${O};
    color: ${t};
  }

  :host([color='warning']) {
    background-color: ${j};
    color: ${f};
  }
`,eo=r.partial`
  :host([appearance='ghost']) {
    color: ${d};
    background-color: initial;
  }

  :host([appearance='ghost'][color='danger']) {
    color: ${p};
  }

  :host([appearance='ghost'][color='important']) {
    color: ${a};
  }

  :host([appearance='ghost'][color='informative']) {
    color: ${o};
  }

  :host([appearance='ghost'][color='severe']) {
    color: ${h};
  }

  :host([appearance='ghost'][color='subtle']) {
    color: ${b};
  }

  :host([appearance='ghost'][color='success']) {
    color: ${Y};
  }

  :host([appearance='ghost'][color='warning']) {
    color: ${n};
  }
`,to=r.partial`
  :host([appearance='outline']) {
    border-color: currentColor;
    color: ${d};
    background-color: initial;
  }

  :host([appearance='outline'][color='danger']) {
    color: ${p};
  }

  :host([appearance='outline'][color='important']) {
    color: ${o};
    border-color: ${S};
  }

  :host([appearance='outline'][color='informative']) {
    color: ${o};
    border-color: ${c};
  }

  :host([appearance='outline'][color='severe']) {
    color: ${h};
  }

  :host([appearance='outline'][color='subtle']) {
    color: ${k};
  }

  :host([appearance='outline'][color='success']) {
    color: ${H};
  }

  :host([appearance='outline'][color='warning']) {
    color: ${n};
  }
`,lo=r.partial`
  :host([appearance='tint']) {
    background-color: ${P};
    color: ${x};
    border-color: ${w};
  }

  :host([appearance='tint'][color='danger']) {
    background-color: ${F};
    color: ${N};
    border-color: ${y};
  }

  :host([appearance='tint'][color='important']) {
    background-color: ${o};
    color: ${l};
    border-color: ${g};
  }

  :host([appearance='tint'][color='informative']) {
    background-color: ${m};
    color: ${o};
    border-color: ${c};
  }

  :host([appearance='tint'][color='severe']) {
    background-color: ${T};
    color: ${I};
    border-color: ${C};
  }

  :host([appearance='tint'][color='subtle']) {
    background-color: ${l};
    color: ${o};
    border-color: ${c};
  }

  :host([appearance='tint'][color='success']) {
    background-color: ${G};
    color: ${D};
    border-color: ${R};
  }

  :host([appearance='tint'][color='warning']) {
    background-color: ${W};
    color: ${n};
    border-color: ${A};
  }
`;export{_ as a,oo as b,ro as c,eo as d,to as e,lo as f};
