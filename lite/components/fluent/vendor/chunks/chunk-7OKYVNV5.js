import{d as w}from"./chunk-YLMZVTWU.js";import{g as i}from"./chunk-7W6XT5GS.js";import{$a as m,Eb as v,Ib as p,Rf as f,Sf as x,_f as $,fa as o,mb as h,mc as g,nb as u,nc as k,ob as b,x as d}from"./chunk-DVLTGBYE.js";import{a as c}from"./chunk-FUXJWCXM.js";import{a as s}from"./chunk-P326MSZE.js";import{b as l}from"./chunk-SRPHT6VS.js";import{b as e}from"./chunk-JB4YKTVJ.js";import{e as n}from"./chunk-IQAG6JCP.js";import{c as a}from"./chunk-3MFZGGQB.js";var z=a`
  ${l("inline-grid")}

  :host {
    --thumb-size: 20px;
    --track-margin-inline: calc(var(--thumb-size) / 2);
    --track-size: 4px;
    --track-overhang: calc(var(--track-size) / -2);
    --rail-color: ${h};
    --track-color: ${v};
    --slider-direction: 90deg;
    --border-radius: ${x};
    --step-marker-inset: var(--track-overhang) -1px;

    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    outline: none;
    user-select: none;
    touch-action: none;
    min-width: 120px;
    min-height: 32px;
    grid-template-rows: 1fr var(--thumb-size) 1fr;
    grid-template-columns: var(--track-margin-inline) 1fr var(--track-margin-inline);
  }

  :host(:hover) {
    --rail-color: ${u};
  }

  :host(:active) {
    --rail-color: ${b};
  }

  :host(${i}) {
    --rail-color: ${d};
    --track-color: ${m};
  }

  :host(:not(${i})) {
    cursor: pointer;
  }

  :host(:dir(rtl)) {
    --slider-direction: -90deg;
  }

  :host([size='small']) {
    --thumb-size: 16px;
    --track-overhang: -1px;
    --track-size: 2px;
    --border-radius: ${f};
  }

  :host([orientation='vertical']) {
    --slider-direction: 0deg;
    --step-marker-inset: -1px var(--track-overhang);
    min-height: 120px;
    grid-template-rows: var(--track-margin-inline) 1fr var(--track-margin-inline);
    grid-template-columns: 1fr var(--thumb-size) 1fr;
    width: unset;
    min-width: 32px;
    justify-items: center;
  }

  :host(:not([slot='input']):focus-visible) {
    box-shadow: 0 0 0 2pt ${k};
    outline: 1px solid ${g};
  }

  :host:after,
  .track {
    height: var(--track-size);
    width: 100%;
  }

  :host:after {
    background-image: linear-gradient(
      var(--slider-direction),
      var(--rail-color) 0%,
      var(--rail-color) 50%,
      var(--track-color) 50.1%,
      var(--track-color) 100%
    );
    border-radius: var(--border-radius);
    content: '';
    grid-row: 1 / -1;
    grid-column: 1 / -1;
  }

  .track {
    position: relative;
    background-color: var(--track-color);
    grid-row: 2 / 2;
    grid-column: 2 / 2;
    forced-color-adjust: none;
    overflow: hidden;
  }

  :host([orientation='vertical'])::after,
  :host([orientation='vertical']) .track {
    height: 100%;
    width: var(--track-size);
  }

  .track::before {
    content: '';
    position: absolute;
    height: 100%;
    border-radius: inherit;
    inset-inline-start: 0;
    width: var(--slider-progress);
  }

  :host(:dir(rtl)) .track::before {
    width: calc(100% - var(--slider-progress));
  }

  :host([orientation='vertical']) .track::before {
    width: 100%;
    bottom: 0;
    height: var(--slider-progress);
  }

  :host([step]) .track::after {
    content: '';
    position: absolute;
    border-radius: inherit;
    inset: var(--step-marker-inset);
    background-image: repeating-linear-gradient(
      var(--slider-direction),
      #0000 0%,
      #0000 calc(var(--step-rate) - 1px),
      ${o} calc(var(--step-rate) - 1px),
      ${o} var(--step-rate)
    );
  }

  .thumb-container {
    position: absolute;
    grid-row: 2 / 2;
    grid-column: 2 / 2;
    transform: translateX(-50%);
    left: var(--slider-thumb);
  }

  :host([orientation='vertical']) .thumb-container {
    transform: translateY(50%);
    left: unset;
    bottom: var(--slider-thumb);
  }

  :host(:not(:active)) :is(.thumb-container, .track::before) {
    transition: all 0.2s ease;
  }

  .thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: ${$};
    box-shadow: 0 0 0 calc(var(--thumb-size) * 0.2) ${o} inset;
    border: calc(var(--thumb-size) * 0.05) solid ${p};
    box-sizing: border-box;
  }

  .thumb,
  .track::before {
    background-color: var(--rail-color);
  }

  @media (forced-colors: active) {
    .track:hover,
    .track:active,
    .track {
      background: WindowText;
    }
    .thumb:hover,
    .thumb:active,
    .thumb {
      background: ButtonText;
    }

    :host(:hover) .track::before,
    :host(:active) .track::before,
    .track::before {
      background: Highlight;
    }
  }
`;function S(B={}){return n`
    <template
      @pointerdown="${(r,t)=>r.handlePointerDown(t.event)}"
      @keydown="${(r,t)=>r.handleKeydown(t.event)}"
    >
      <div ${e("track")} part="track-container" class="track" style="${r=>r.position}"></div>
      <div
        ${e("thumb")}
        part="thumb-container"
        class="thumb-container"
        style="${r=>r.position}"
        @pointerdown="${(r,t)=>r.handleThumbPointerDown(t.event)}"
      >
        <slot name="thumb">${s(B.thumb)}</slot>
      </div>
    </template>
  `}var y=S({thumb:'<div class="thumb"></div>'});var W={name:w,registry:c.registry,styles:z,template:y};export{z as a,y as b,W as c};
