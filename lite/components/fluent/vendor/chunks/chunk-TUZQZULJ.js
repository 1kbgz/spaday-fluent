import{d as u}from"./chunk-R66NIKL3.js";import{$f as l,Cc as n,Sg as $,a as r,dg as a,eg as m,fg as f,mg as g,og as h,rg as p,sg as d,tg as c,x as s}from"./chunk-DVLTGBYE.js";import{a as o}from"./chunk-FUXJWCXM.js";import{b as i}from"./chunk-SRPHT6VS.js";import{e as t}from"./chunk-IQAG6JCP.js";import{c as e}from"./chunk-3MFZGGQB.js";var z=e`
  ${i("inline-flex")}

  :host {
    color: ${r};
    cursor: pointer;
    font-family: ${l};
    font-size: ${m};
    font-weight: ${g};
    line-height: ${d};
    user-select: none;
  }

  .asterisk {
    color: ${n};
    margin-inline-start: ${$};
  }

  :host([size='small']) {
    font-size: ${a};
    line-height: ${p};
  }

  :host([size='large']) {
    font-size: ${f};
    line-height: ${c};
  }

  :host(:is([size='large'], [weight='semibold'])) {
    font-weight: ${h};
  }

  :host([disabled]),
  :host([disabled]) .asterisk {
    color: ${s};
  }
`;function b(){return t`
    <slot></slot>
    <span part="asterisk" class="asterisk" aria-hidden="true" ?hidden="${B=>!B.required}">*</span>
  `}var y=b();var q={name:u,registry:o.registry,styles:z,template:y};export{z as a,y as b,q as c};
