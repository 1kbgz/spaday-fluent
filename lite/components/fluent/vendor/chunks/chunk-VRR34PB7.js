import{c as v}from"./chunk-R2DNPMJJ.js";import{$f as p,A as a,C as c,D as h,E as d,Mg as x,eg as m,mg as f,nc as u,y as l,z as s}from"./chunk-DVLTGBYE.js";import{a as n}from"./chunk-FUXJWCXM.js";import{b as i}from"./chunk-SRPHT6VS.js";import{e as r}from"./chunk-IQAG6JCP.js";import{c as t}from"./chunk-3MFZGGQB.js";var g=t`
  ${i("inline")}

  :host {
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    color: ${l};
    cursor: pointer;
    font-family: ${p};
    font-size: ${m};
    font-weight: ${f};
    overflow: inherit;
    text-align: start;
    text-decoration: none;
    text-decoration-thickness: ${x};
    text-overflow: inherit;
    user-select: text;
  }

  :host(:hover) {
    outline: none;
    text-decoration-line: underline;
  }

  @media (hover: hover) {
    :host(:hover) {
      color: ${s};
    }

    :host(:active) {
      color: ${a};
    }

    :host([appearance='subtle']:hover) {
      color: ${h};
    }

    :host([appearance='subtle']:active) {
      color: ${d};
    }
  }

  :host([appearance='subtle']) {
    color: ${c};
  }

  :host-context(:is(h1, h2, h3, h4, h5, h6, p, fluent-text)),
  :host([inline]) {
    font: inherit;
    text-decoration: underline;
  }

  :host(:focus-visible),
  :host-context(:is(h1, h2, h3, h4, h5, h6, p, fluent-text)):focus-visible,
  :host([inline]:focus-visible) {
    outline-style: none;
    text-decoration-line: underline;
    text-decoration-style: double;
    text-decoration-color: ${u};
  }

  :host(:not([href])) {
    color: inherit;
    text-decoration: none;
  }

  ::slotted(a) {
    position: absolute;
    inset: 0;
  }

  @media (forced-colors: active) {
    :host {
      color: LinkText;
    }
  }
`;function $(){return r`
    <template
      tabindex="0"
      @click="${(o,e)=>o.clickHandler(e.event)}"
      @keydown="${(o,e)=>o.keydownHandler(e.event)}"
    >
      <slot></slot>
    </template>
  `}var k=$();var T={name:v,registry:n.registry,styles:g,template:k};export{g as a,k as b,T as c};
