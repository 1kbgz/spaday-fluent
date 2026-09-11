import{d as b}from"./chunk-7EXHDRLJ.js";import{$f as h,Ac as c,Gc as m,Ib as l,Kc as g,Qc as u,Sf as f,Uc as p,Ug as o,Wg as i,dg as $,eh as t,l as e,na as s,rg as y,wc as d}from"./chunk-DVLTGBYE.js";import{a}from"./chunk-FUXJWCXM.js";import{e as n}from"./chunk-IQAG6JCP.js";import{c as r}from"./chunk-3MFZGGQB.js";var k=r`
  :host {
    display: grid;
    box-sizing: border-box;
    font-family: ${h};
    font-size: ${$};
    line-height: ${y};
    width: 100%;
    background: ${s};
    color: ${e};
    border: 1px solid ${l};
    padding-inline: ${i};
    border-radius: ${f};
    min-height: 36px;
    align-items: center;
    grid-template: 'icon body actions dismiss' / auto 1fr auto auto;
    contain: layout style paint;
  }

  :host([shape='square']) {
    border-radius: 0;
  }

  :host([intent='success']) {
    background-color: ${m};
    border-color: ${g};
  }

  :host([intent='warning']) {
    background-color: ${u};
    border-color: ${p};
  }

  :host([intent='error']) {
    background-color: ${d};
    border-color: ${c};
  }

  :host([layout='multiline']) {
    grid-template-areas:
      'icon body dismiss'
      'actions actions actions';
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto 1fr;
    padding-block: ${t};
    padding-inline: ${i};
  }

  .content {
    grid-area: body;
    padding-block: ${t};
    padding-inline: 0;
  }

  :host([layout='multiline']) .content {
    padding: 0;
  }

  ::slotted([slot='icon']) {
    display: flex;
    grid-area: icon;
    flex-direction: column;
    align-items: center;
    color: ${e};
    margin-inline-end: ${o};
  }

  :host([layout='multiline']) ::slotted([slot='icon']) {
    align-items: start;
    height: 100%;
  }

  ::slotted([slot='dismiss']) {
    grid-area: dismiss;
  }

  .actions {
    grid-area: actions;
    display: flex;
    justify-self: end;
    margin-inline-end: ${o};
    gap: ${o};
  }

  :host([layout='multiline']) .actions {
    margin-block-start: ${t};
    margin-inline-end: 0;
  }

  :host([layout='multiline']) ::slotted([slot='dismiss']) {
    align-items: start;
    height: 100%;
  }

  ::slotted(*) {
    font-size: inherit;
  }
`;function B(){return n`
    <slot name="icon"></slot>
    <div class="content">
      <slot></slot>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
    <slot name="dismiss"></slot>
  `}var x=B();var M={name:b,registry:a.registry,styles:k,template:x};export{k as a,x as b,M as c};
