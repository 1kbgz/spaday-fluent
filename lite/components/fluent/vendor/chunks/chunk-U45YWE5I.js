import{b as n}from"./chunk-BO5HJIKD.js";import{j as a}from"./chunk-FKR45OA7.js";import{Wg as r,Yg as s}from"./chunk-DVLTGBYE.js";import{a as o}from"./chunk-FUXJWCXM.js";import{b as i}from"./chunk-SRPHT6VS.js";import{e}from"./chunk-IQAG6JCP.js";import{c as t}from"./chunk-3MFZGGQB.js";var l=t`
  ${i("grid")}
  :host {
    box-sizing: border-box;
    grid-template-rows: min-content auto min-content;
    position: relative;
    height: 100%;
    padding: ${s};
    max-height: 100svh;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${a}
  }

  .footer {
    display: flex;
    justify-content: flex-start;
    gap: ${r};
  }

  ::slotted([slot='title']) {
    font: inherit;
    padding: 0;
    margin: 0;
  }
`;function c(){return e`
    <div class="header" part="header">
      <slot name="title"></slot>
      <slot name="close" @click="${(p,d)=>p.clickHandler(d.event)}"></slot>
    </div>
    <div class="content" part="content">
      <slot></slot>
    </div>
    <div class="footer" part="footer">
      <slot name="footer"></slot>
    </div>
  `}var m=c();var H={name:n,registry:o.registry,styles:l,template:m};export{l as a,m as b,H as c};
