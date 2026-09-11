import{e as m}from"./chunk-INVEMUY5.js";import{Ng as r,Og as i,Pg as c,Ub as n,Yb as s,Zb as d,zh as l}from"./chunk-DVLTGBYE.js";import{a as e}from"./chunk-FUXJWCXM.js";import{b as a}from"./chunk-SRPHT6VS.js";import{e as t}from"./chunk-IQAG6JCP.js";import{c as o}from"./chunk-3MFZGGQB.js";var p=t`
  <slot name="indicator">
    <div class="background"></div>
    <div class="progress">
      <div class="spinner">
        <div class="start">
          <div class="indicator"></div>
        </div>
        <div class="end">
          <div class="indicator"></div>
        </div>
      </div>
    </div>
  </slot>
`;var g=o`
  ${a("inline-flex")}

  :host {
    --duration: 1.5s;
    --indicatorSize: ${i};
    --size: 32px;
    height: var(--size);
    width: var(--size);
    contain: strict;
    content-visibility: auto;
  }

  :host([size='tiny']) {
    --indicatorSize: ${r};
    --size: 20px;
  }
  :host([size='extra-small']) {
    --indicatorSize: ${r};
    --size: 24px;
  }
  :host([size='small']) {
    --indicatorSize: ${r};
    --size: 28px;
  }
  :host([size='large']) {
    --indicatorSize: ${i};
    --size: 36px;
  }
  :host([size='extra-large']) {
    --indicatorSize: ${i};
    --size: 40px;
  }
  :host([size='huge']) {
    --indicatorSize: ${c};
    --size: 44px;
  }

  .progress,
  .background,
  .spinner,
  .start,
  .end,
  .indicator {
    position: absolute;
    inset: 0;
  }

  .progress,
  .spinner,
  .indicator {
    animation: none var(--duration) infinite ${l};
  }

  .progress {
    animation-timing-function: linear;
    animation-name: spin-linear;
  }

  .background {
    border: var(--indicatorSize) solid ${d};
    border-radius: 50%;
  }

  :host([appearance='inverted']) .background {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .spinner {
    animation-name: spin-swing;
  }

  .start {
    overflow: hidden;
    right: 50%;
  }

  .end {
    overflow: hidden;
    left: 50%;
  }

  .indicator {
    color: ${s};
    box-sizing: border-box;
    border-radius: 50%;
    border: var(--indicatorSize) solid transparent;
    border-block-start-color: currentcolor;
    border-right-color: currentcolor;
  }

  :host([appearance='inverted']) .indicator {
    color: ${n};
  }

  .start .indicator {
    rotate: 135deg; /* Starts 9 o'clock */
    inset: 0 -100% 0 0;
    animation-name: spin-start;
  }

  .end .indicator {
    rotate: 135deg; /* Ends at 3 o'clock */
    inset: 0 0 0 -100%;
    animation-name: spin-end;
  }

  @keyframes spin-linear {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-swing {
    0% {
      transform: rotate(-135deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(225deg);
    }
  }

  @keyframes spin-start {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-80deg);
    }
  }

  @keyframes spin-end {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(70deg);
    }
  }

  @media (forced-colors: active) {
    .background {
      display: none;
    }
    .indicator {
      border-color: Canvas;
      border-block-start-color: Highlight;
      border-right-color: Highlight;
    }
  }
`;var $={name:m,registry:e.registry,styles:g,template:p};export{p as a,g as b,$ as c};
