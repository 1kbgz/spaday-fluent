import{b as n}from"./chunk-4BKK5RED.js";import{j as a}from"./chunk-3ASB7JMB.js";import{Wg as r,Yg as s}from"./chunk-I3TN42IT.js";import{a as o}from"./chunk-MTF7GSAX.js";import{b as i}from"./chunk-27T3HUJZ.js";import{e}from"./chunk-3WMUIIMG.js";import{c as t}from"./chunk-L44UMAPT.js";var l=t`
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
