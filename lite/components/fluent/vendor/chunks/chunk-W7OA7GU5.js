import{c as F}from"./chunk-JOGQRVRZ.js";import{c as e,g as o,l as r}from"./chunk-7W6XT5GS.js";import{$a as p,Eb as v,Fb as f,Gb as x,K as $,Mg as z,Ng as N,Rf as d,Sf as H,_f as T,bc as y,cc as S,dc as w,ec as c,fa as m,hc as B,mb as b,nb as k,nc as C,ob as g}from"./chunk-DVLTGBYE.js";import{a as h}from"./chunk-FUXJWCXM.js";import{a}from"./chunk-P326MSZE.js";import{b as u}from"./chunk-SRPHT6VS.js";import{e as n}from"./chunk-IQAG6JCP.js";import{c as l}from"./chunk-3MFZGGQB.js";var I=l`
  ${u("inline-flex")}

  :host {
    --size: 16px;
    background-color: ${m};
    border-radius: ${d};
    border: ${z} solid ${v};
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    width: var(--size);
  }

  :host,
  .indeterminate-indicator,
  .checked-indicator {
    aspect-ratio: 1;
  }

  :host(:hover) {
    border-color: ${f};
  }

  :host(:active) {
    border-color: ${x};
  }

  :host(${e}:hover) {
    background-color: ${k};
    border-color: ${S};
  }

  :host(${e}:active) {
    background-color: ${g};
    border-color: ${w};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']))::after {
    content: '';
    position: absolute;
    inset: -8px;
    box-sizing: border-box;
    outline: none;
    border: ${N} solid ${B};
    border-radius: ${H};
  }

  :host(:not([slot='input']):focus-visible)::after {
    border-color: ${C};
  }

  .indeterminate-indicator,
  .checked-indicator {
    color: ${$};
    inset: 0;
    margin: auto;
    position: absolute;
  }

  ::slotted([slot='checked-indicator']),
  .checked-indicator {
    fill: currentColor;
    display: inline-flex;
    flex: 1 0 auto;
    width: 12px;
  }

  :host(:not(${e})) *:is(::slotted([slot='checked-indicator']), .checked-indicator) {
    display: none;
  }

  :host(${e}),
  :host(${r}) {
    border-color: ${y};
  }

  :host(${e}),
  :host(${r}) .indeterminate-indicator {
    background-color: ${b};
  }

  :host(${r}) .indeterminate-indicator {
    border-radius: ${d};
    position: absolute;
    width: calc(var(--size) / 2);
    inset: 0;
  }

  :host([size='large']) {
    --size: 20px;
  }

  :host([size='large']) ::slotted([slot='checked-indicator']),
  :host([size='large']) .checked-indicator {
    width: 16px;
  }

  :host([shape='circular']),
  :host([shape='circular']) .indeterminate-indicator {
    border-radius: ${T};
  }

  :host(${o}),
  :host(${o}${e}) {
    background-color: ${p};
    border-color: ${c};
  }

  :host(${o}) {
    cursor: unset;
  }

  :host(${o}${r}) .indeterminate-indicator {
    background-color: ${c};
  }

  :host(${o}${e}) .checked-indicator {
    color: ${c};
  }

  @media (forced-colors: active) {
    :host {
      border-color: FieldText;
    }

    :host(:not([slot='input']:focus-visible))::after {
      border-color: Canvas;
    }

    :host(:not(${o}):hover),
    :host(${e}:not(${o}):hover),
    :host(:not([slot='input']):focus-visible)::after {
      border-color: Highlight;
    }

    .indeterminate-indicator,
    .checked-indicator {
      color: HighlightText;
    }

    :host(${e}),
    :host(${r}) .indeterminate-indicator {
      background-color: FieldText;
    }

    :host(${e}:not(${o}):hover),
    :host(${r}:not(${o}):hover) .indeterminate-indicator {
      background-color: Highlight;
    }

    :host(${o}) {
      border-color: GrayText;
    }

    :host(${o}${r}) .indeterminate-indicator {
      background-color: GrayText;
    }

    :host(${o}),
    :host(${o}${e}) .checked-indicator {
      color: GrayText;
    }
  }
`;var A=n.partial(`
    <svg
        fill="currentColor"
        aria-hidden="true"
        class="checked-indicator"
        width="1em"
        height="1em"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 0 1 1.06-.04Z" fill="currentColor"></path>
    </svg>
`),G=n.partial(`
    <span class="indeterminate-indicator"></span>
`);function P(s={}){return n`
    <template
      @click="${(t,i)=>t.clickHandler(i.event)}"
      @input="${(t,i)=>t.inputHandler(i.event)}"
      @keydown="${(t,i)=>t.keydownHandler(i.event)}"
      @keyup="${(t,i)=>t.keyupHandler(i.event)}"
    >
      <slot name="checked-indicator">${a(s.checkedIndicator)}</slot>
      <slot name="indeterminate-indicator">${a(s.indeterminateIndicator)}</slot>
    </template>
  `}var D=P({checkedIndicator:A,indeterminateIndicator:G});var U={name:F,registry:h.registry,styles:I,template:D};export{I as a,D as b,U as c};
