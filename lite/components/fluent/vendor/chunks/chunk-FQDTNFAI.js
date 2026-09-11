import{d as p}from"./chunk-BOJ24NZH.js";import{Ic as c,Qf as m,Sc as l,Sf as u,Xa as e,mb as s,yc as d,za as t}from"./chunk-DVLTGBYE.js";import{a}from"./chunk-FUXJWCXM.js";import{b as n}from"./chunk-SRPHT6VS.js";import{b as r}from"./chunk-JB4YKTVJ.js";import{e as i}from"./chunk-IQAG6JCP.js";import{c as o}from"./chunk-3MFZGGQB.js";var h=o`
  ${n("block")}

  :host {
    width: 100%;
    height: 2px;
    overflow-x: hidden;
    background-color: ${t};
    border-radius: ${u};
    contain: content;

    @supports (width: attr(value type(<number>))) {
      --max: attr(max type(<number>), 100);
      --min: attr(min type(<number>), 0);
      --value: attr(value type(<number>), 0);
      --indicator-width: clamp(0%, calc((var(--value) - var(--min)) / (var(--max) - var(--min)) * 100%), 100%);
    }
  }

  :host([thickness='large']) {
    height: 4px;
  }

  :host([shape='square']) {
    border-radius: ${m};
  }

  .indicator {
    background-color: ${s};
    border-radius: inherit;
    height: 100%;
  }

  :host([value]) .indicator {
    transition: all 0.2s ease-in-out;

    @supports (width: attr(value type(<number>))) {
      width: var(--indicator-width);
    }
  }

  :host(:not([value])) .indicator {
    position: relative;
    width: 33%;
    background-image: linear-gradient(
      to right,
      ${t} 0%,
      ${e} 50%,
      ${t} 100%
    );
    animation-name: indeterminate;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  :host([validation-state='error']) .indicator {
    background-color: ${d};
  }

  :host([validation-state='warning']) .indicator {
    background-color: ${l};
  }

  :host([validation-state='success']) .indicator {
    background-color: ${c};
  }

  @layer animations {
    /* Disable animations for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      :host([value]) {
        transition: none;
      }
      :host(:not([value])) .indicator {
        animation-duration: 0.01ms;
        animation-iteration-count: 1;
      }
    }
  }

  @keyframes indeterminate {
    0% {
      inset-inline-start: -33%;
    }
    100% {
      inset-inline-start: 100%;
    }
  }

  @media (forced-colors: active) {
    :host {
      background-color: CanvasText;
    }
    .indicator,
    :host(:is([validation-state='success'], [validation-state='warning'], [validation-state='error'])) .indicator {
      background-color: Highlight;
    }
  }
`;function v(){return i` <div class="indicator" part="indicator" ${r("indicator")}></div> `}var g=v();var P={name:p,registry:a.registry,styles:h,template:g};export{h as a,g as b,P as c};
