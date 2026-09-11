import{b as h}from"./chunk-BACMES6O.js";import{$f as n,Zg as b,a as e,dh as t,eg as c,fa as o,gg as d,gh as $,ih as i,mg as g,og as m,sg as p,ug as f}from"./chunk-DVLTGBYE.js";import{a as s}from"./chunk-FUXJWCXM.js";import{b as r}from"./chunk-SRPHT6VS.js";import{e as a}from"./chunk-IQAG6JCP.js";import{c as l}from"./chunk-3MFZGGQB.js";var x=l`
  ${r("grid")}

  :host {
    background: ${o};
    box-sizing: border-box;
    gap: ${t};
    padding: ${i} ${b};
    container: dialog-body / inline-size;
  }

  .title {
    box-sizing: border-box;
    align-items: flex-start;
    background: ${o};
    color: ${e};
    column-gap: 8px;
    display: flex;
    font-family: ${n};
    font-size: ${d};
    font-weight: ${m};
    inset-block-start: 0;
    justify-content: space-between;
    line-height: ${f};
    margin-block-end: calc(${t} * -1);
    margin-block-start: calc(${i} * -1);
    padding-block-end: ${t};
    padding-block-start: ${i};
  }

  .content {
    box-sizing: border-box;
    color: ${e};
    font-family: ${n};
    font-size: ${c};
    font-weight: ${g};
    line-height: ${p};
    min-height: 32px;
  }

  .actions {
    box-sizing: border-box;
    background: ${o};
    display: flex;
    flex-direction: column;
    gap: ${t};
    inset-block-end: 0;
    margin-block-end: calc(${i} * -1);
    padding-block-end: ${i};
    padding-block-start: ${$};
  }

  ::slotted([slot='title-action']) {
    margin-inline-start: auto;
  }

  ::slotted([slot='title']) {
    font: inherit;
    padding: 0;
    margin: 0;
  }

  /* align  title content to the end when there is no title*/
  :not(:has(:is([slot='title'], [slot='title-action']))) .title {
    justify-content: end;
  }

  @container (min-width: 480px) {
    .actions {
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      margin-block-start: calc(${t} * -1);
      padding-block-start: ${t};
    }
  }

  /* For a11y, set sticky position for title and actions when the viewport is tall enough */
  @media (min-height: 480px) {
    .title {
      position: sticky;
      z-index: 1;
    }
    .actions {
      position: sticky;
      z-index: 2;
    }
  }
`;var k=a`
  <template>
    <div class="title" part="title">
      <slot name="title"></slot>
      <slot name="title-action"></slot>
      <slot name="close" @click="${(y,u)=>y.clickHandler(u.event)}"></slot>
    </div>
    <div class="content" part="content"><slot></slot></div>
    <div class="actions" part="actions"><slot name="action"></slot></div>
  </template>
`;var N={name:h,registry:s.registry,styles:x,template:k};export{x as a,k as b,N as c};
