import{b as I}from"./chunk-G6AO2FLI.js";import{c as o,g as t}from"./chunk-7W6XT5GS.js";import{$a as y,Bg as S,Eb as N,Fb as w,Gb as H,K as m,L as v,M as f,Ng as C,Rg as D,Xa as x,_f as F,ec as a,hc as s,l as p,m as g,mb as n,n as b,nb as i,nc as B,nh as T,ob as d,x as c,zh as A}from"./chunk-DVLTGBYE.js";import{a as k}from"./chunk-FUXJWCXM.js";import{a as u}from"./chunk-P326MSZE.js";import{b as $}from"./chunk-SRPHT6VS.js";import{e as h}from"./chunk-IQAG6JCP.js";import{c as l}from"./chunk-3MFZGGQB.js";var P=l`
  ${$("inline-flex")}

  :host {
    box-sizing: border-box;
    align-items: center;
    flex-direction: row;
    outline: none;
    user-select: none;
    contain: content;
    padding: 0 ${D};
    width: 40px;
    height: 20px;
    background-color: ${x};
    border: 1px solid ${N};
    border-radius: ${F};
  }

  :host(:enabled) {
    cursor: pointer;
  }

  :host(:hover) {
    background: none;
    border-color: ${w};
  }
  :host(:active) {
    border-color: ${H};
  }
  :host(${t}),
  :host([readonly]) {
    border: 1px solid ${a};
    background-color: none;
    pointer: default;
  }
  :host(${o}) {
    background: ${n};
    border-color: ${n};
  }
  :host(${o}:hover) {
    background: ${i};
    border-color: ${i};
  }
  :host(${o}:active) {
    background: ${d};
    border-color: ${d};
  }
  :host(${o}${t}) {
    background: ${y};
    border-color: ${a};
  }
  .checked-indicator {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    margin-inline-start: 0;
    background-color: ${p};
    transition-duration: ${T};
    transition-timing-function: ${A};
    transition-property: margin-inline-start;
  }
  :host(${o}) .checked-indicator {
    background-color: ${m};
    margin-inline-start: calc(100% - 14px);
  }
  :host(${o}:hover) .checked-indicator {
    background: ${v};
  }
  :host(${o}:active) .checked-indicator {
    background: ${f};
  }
  :host(:hover) .checked-indicator {
    background-color: ${g};
  }
  :host(:active) .checked-indicator {
    background-color: ${b};
  }
  :host(${t}) .checked-indicator,
  :host([readonly]) .checked-indicator {
    background: ${c};
  }
  :host(${o}${t}) .checked-indicator {
    background: ${c};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']):focus-visible) {
    border-color: ${s};
    outline: ${C} solid ${s};
    outline-offset: 1px;
    box-shadow: ${S}, 0 0 0 2px ${B};
  }

  @media (forced-colors: active) {
    :host {
      border-color: InactiveBorder;
    }
    :host(${o}),
    :host(${o}:active),
    :host(${o}:hover) {
      background: Highlight;
      border-color: Highlight;
    }
    .checked-indicator,
    :host(:hover) .checked-indicator,
    :host(:active) .checked-indicator {
      background-color: ActiveCaption;
    }
    :host(${o}) .checked-indicator,
    :host(${o}:hover) .checked-indicator,
    :host(${o}:active) .checked-indicator {
      background-color: ButtonFace;
    }
    :host(${t}) .checked-indicator,
    :host(${o}${t}) .checked-indicator {
      background-color: GrayText;
    }
  }
`;function X(E={}){return h`
    <template
      @click="${(r,e)=>r.clickHandler(e.event)}"
      @input="${(r,e)=>r.inputHandler(e.event)}"
      @keydown="${(r,e)=>r.keydownHandler(e.event)}"
      @keyup="${(r,e)=>r.keyupHandler(e.event)}"
    >
      <slot name="switch">${u(E.switch)}</slot>
    </template>
  `}var z=X({switch:'<span class="checked-indicator" part="checked-indicator"></span>'});var V={name:I,registry:k.registry,styles:P,template:z};export{P as a,z as b,V as c};
