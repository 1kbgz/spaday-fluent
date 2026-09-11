import{e as b}from"./chunk-RNKB453C.js";import{$f as g,Ib as p,Mb as c,Mg as t,Nb as h,V as l,Yb as f,a as n,dg as d,e as i,l as s,mg as m}from"./chunk-DVLTGBYE.js";import{a as r}from"./chunk-FUXJWCXM.js";import{b as a}from"./chunk-SRPHT6VS.js";import{e as o}from"./chunk-IQAG6JCP.js";import{c as e}from"./chunk-3MFZGGQB.js";var x=e`
  ${a("flex")}

  :host {
    contain: content;
  }

  :host::after,
  :host::before {
    align-self: center;
    background: ${c};
    box-sizing: border-box;
    content: '';
    display: flex;
    flex-grow: 1;
    height: ${t};
  }

  :host([inset]) {
    padding: 0 12px;
  }

  :host ::slotted(*) {
    color: ${i};
    font-family: ${g};
    font-size: ${d};
    font-weight: ${m};
    margin: 0;
    padding: 0 12px;
  }

  :host([align-content='start'])::before,
  :host([align-content='end'])::after {
    flex-basis: 12px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  :host([orientation='vertical']) {
    align-items: center;
    flex-direction: column;
    height: 100%;
    min-height: 84px;
  }

  :host([orientation='vertical']):empty {
    min-height: 20px;
  }

  :host([orientation='vertical'][inset])::before {
    margin-top: 12px;
  }
  :host([orientation='vertical'][inset])::after {
    margin-bottom: 12px;
  }

  :host([orientation='vertical']):empty::before,
  :host([orientation='vertical']):empty::after {
    height: 10px;
    min-height: 10px;
    flex-grow: 0;
  }

  :host([orientation='vertical'])::before,
  :host([orientation='vertical'])::after {
    width: ${t};
    min-height: 20px;
    height: 100%;
  }

  :host([orientation='vertical']) ::slotted(*) {
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    line-height: 20px;
  }

  :host([orientation='vertical'][align-content='start'])::before {
    min-height: 8px;
  }
  :host([orientation='vertical'][align-content='end'])::after {
    min-height: 8px;
  }

  :host([appearance='strong'])::before,
  :host([appearance='strong'])::after {
    background: ${p};
  }
  :host([appearance='strong']) ::slotted(*) {
    color: ${n};
  }
  :host([appearance='brand'])::before,
  :host([appearance='brand'])::after {
    background: ${f};
  }
  :host([appearance='brand']) ::slotted(*) {
    color: ${l};
  }
  :host([appearance='subtle'])::before,
  :host([appearance='subtle'])::after {
    background: ${h};
  }
  :host([appearance='subtle']) ::slotted(*) {
    color: ${s};
  }

  @media (forced-colors: active) {
    :host([appearance='strong'])::before,
    :host([appearance='strong'])::after,
    :host([appearance='brand'])::before,
    :host([appearance='brand'])::after,
    :host([appearance='subtle'])::before,
    :host([appearance='subtle'])::after,
    :host::after,
    :host::before {
      background: WindowText;
      color: WindowText;
    }
  }
`;function $(){return o`<slot></slot>`}var u=$();var z={name:b,registry:r.registry,styles:x,template:u};export{x as a,u as b,z as c};
