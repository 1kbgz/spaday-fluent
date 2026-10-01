import{b as $}from"./chunk-EYNQ6SZ4.js";import{c as f,f as g}from"./chunk-KEKDZXDJ.js";import{Ug as p,a as e,dh as m,e as s,gh as u,l as c,x as d}from"./chunk-AZ2PJJNA.js";import{a as n}from"./chunk-2JM5GVQW.js";import{b as a}from"./chunk-2JVXI2VH.js";import{b as i}from"./chunk-HBQAVC5C.js";import{e as l}from"./chunk-S66425KA.js";import{c as r}from"./chunk-4HX2PQZF.js";var h=r`
  ${a("flex")}

  :host {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    gap: ${u};
  }

  :host([orientation='vertical']) {
    flex-direction: column;
    justify-content: flex-start;
  }

  :host([orientation='horizontal']) {
    flex-direction: row;
  }

  ::slotted(*) {
    color: ${c};
  }

  ::slotted(:hover) {
    color: ${s};
  }

  ::slotted(:active) {
    color: ${e};
  }

  ::slotted(${g}) {
    color: ${d};
  }

  ::slotted(${f}) {
    color: ${e};
  }

  :host([slot='input']) {
    margin: ${m} ${p};
  }
`;function v(){return l`
    <template
      focusgroup="radiogroup wrap"
      @disabled="${(o,t)=>o.disabledRadioHandler(t.event)}"
      @change="${(o,t)=>o.changeHandler(t.event)}"
      @click="${(o,t)=>o.clickHandler(t.event)}"
      @focusin="${(o,t)=>o.focusinHandler(t.event)}"
      @keydown="${(o,t)=>o.keydownHandler(t.event)}"
    >
      <slot ${i("slottedRadios")}></slot>
    </template>
  `}var y=v();var V={name:$,registry:n.registry,styles:h,template:y};export{h as a,y as b,V as c};
