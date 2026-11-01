import{d as n}from"./chunk-JAKZ54UE.js";import{Bg as d,Mb as i,Mg as h,Sf as s,_f as r}from"./chunk-I3TN42IT.js";import{a as e}from"./chunk-MTF7GSAX.js";import{e as o}from"./chunk-3WMUIIMG.js";import{c as t}from"./chunk-L44UMAPT.js";var m=t`
  :host {
    contain: content;
  }

  :host ::slotted(img) {
    box-sizing: border-box;
    min-height: 8px;
    min-width: 8px;
    display: inline-block;
  }
  :host([block]) ::slotted(img) {
    width: 100%;
    height: auto;
  }
  :host([bordered]) ::slotted(img) {
    border: ${h} solid ${i};
  }
  :host([fit='none']) ::slotted(img) {
    object-fit: none;
    object-position: top left;
    height: 100%;
    width: 100%;
  }
  :host([fit='center']) ::slotted(img) {
    object-fit: none;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host([fit='contain']) ::slotted(img) {
    object-fit: contain;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host([fit='cover']) ::slotted(img) {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host([shadow]) ::slotted(img) {
    box-shadow: ${d};
  }
  :host([shape='circular']) ::slotted(img) {
    border-radius: ${r};
  }
  :host([shape='rounded']) ::slotted(img) {
    border-radius: ${s};
  }
`;var c=o`<slot></slot>`;var x={name:n,registry:e.registry,styles:m,template:c};export{m as a,c as b,x as c};
