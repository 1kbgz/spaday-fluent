import{b as H}from"./chunk-CEKJ3GWI.js";import{c as o,f as r}from"./chunk-7W6XT5GS.js";import{$a as k,Eb as $,Fb as g,Gb as f,K as h,Mg as T,Ng as B,Sf as S,_f as a,bc as v,ec as i,fa as u,hc as x,mb as p,nb as b,nc as y,ob as m}from"./chunk-DVLTGBYE.js";import{a as l}from"./chunk-FUXJWCXM.js";import{a as s}from"./chunk-P326MSZE.js";import{b as n}from"./chunk-SRPHT6VS.js";import{e as c}from"./chunk-IQAG6JCP.js";import{c as d}from"./chunk-3MFZGGQB.js";var N=d`
  ${n("inline-flex")}

  :host {
    --size: 16px;
    aspect-ratio: 1;
    background-color: ${u};
    border: ${T} solid ${$};
    border-radius: ${a};
    box-sizing: border-box;
    position: relative;
    width: var(--size);
  }

  :host([size='large']) {
    --size: 20px;
  }

  .checked-indicator {
    aspect-ratio: 1;
    border-radius: ${a};
    color: ${h};
    inset: 0;
    margin: auto;
    position: absolute;
    width: calc(var(--size) * 0.625);
  }

  :host(:not([slot='input']))::after {
    content: '' / '';
    position: absolute;
    display: block;
    inset: -8px;
    box-sizing: border-box;
    outline: none;
    border: ${B} solid ${x};
    border-radius: ${S};
  }

  :host(:not([slot='input']):focus-visible)::after {
    border-color: ${y};
  }

  :host(:hover) {
    border-color: ${g};
  }

  :host(${o}) {
    border-color: ${v};
  }

  :host(${o}) .checked-indicator {
    background-color: ${p};
  }

  :host(${o}:hover) .checked-indicator {
    background-color: ${b};
  }

  :host(:active) {
    border-color: ${f};
  }

  :host(${o}:active) .checked-indicator {
    background-color: ${m};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(${r}) {
    background-color: ${k};
    border-color: ${i};
  }

  :host(${o}${r}) .checked-indicator {
    background-color: ${i};
  }

  @media (forced-colors: active) {
    :host {
      border-color: FieldText;
    }

    :host(:not([slot='input']:focus-visible))::after {
      border-color: Canvas;
    }

    :host(:not(${r}):hover),
    :host(:not([slot='input']):focus-visible)::after {
      border-color: Highlight;
    }

    .checked-indicator {
      color: HighlightText;
    }

    :host(${o}) .checked-indicator {
      background-color: FieldText;
    }

    :host(${o}:not(${r}):hover) .checked-indicator {
      background-color: Highlight;
    }

    :host(${r}) {
      border-color: GrayText;
      color: GrayText;
    }

    :host(${r}${o}) .checked-indicator {
      background-color: GrayText;
    }
  }
`;var F=c.partial(`
    <span part="checked-indicator" class="checked-indicator" role="presentation"></span>
`);function w(C={}){return c`
    <template
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="checked-indicator">${s(C.checkedIndicator)}</slot>
    </template>
  `}var z=w({checkedIndicator:F});var K={name:H,registry:l.registry,styles:N,template:z};export{N as a,z as b,K as c};
