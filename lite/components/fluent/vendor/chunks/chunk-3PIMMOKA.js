import{a as n,f as y}from"./chunk-PZXQDU5I.js";import{$f as _,Rg as o,Sg as i,Tg as l,V as d,a as t,dg as f,eg as h,og as x,qb as g,rd as p,rg as $,sg as z,td as v,za as u}from"./chunk-DVLTGBYE.js";import{a as c}from"./chunk-FUXJWCXM.js";import{b as m}from"./chunk-SRPHT6VS.js";import{b as a}from"./chunk-JB4YKTVJ.js";import{e as s}from"./chunk-IQAG6JCP.js";import{c as r}from"./chunk-3MFZGGQB.js";var k='<path d="M5.28347 1.54605C5.57692 0.951448 6.42479 0.951449 6.71825 1.54605L7.82997 3.79866L10.3159 4.15988C10.9721 4.25523 11.2341 5.0616 10.7592 5.52443L8.96043 7.27785L9.38507 9.7537C9.49716 10.4072 8.81122 10.9056 8.22431 10.597L6.00086 9.4281L3.7774 10.597C3.19049 10.9056 2.50455 10.4072 2.61664 9.7537L3.04128 7.27784L1.24246 5.52443C0.767651 5.0616 1.02966 4.25523 1.68584 4.15988L4.17174 3.79865L5.28347 1.54605Z" />',b=`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">${k}</svg>
`,w=`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"
    fill="none" stroke="black" stroke-width="2"
>${k}</svg>
`;function C(){return s`
    <div ${a("display")} class="display" aria-hidden="true"></div>
    <slot name="icon" ${a("iconSlot")} @slotchange="${e=>e.handleSlotChange()}"></slot>
    <slot name="value"><span class="value-label" aria-hidden="true">${e=>e.value}</span></slot>
    <slot name="count"><span class="count-label" aria-hidden="true">${e=>e.formattedCount}</span></slot>
  `}var B=C();var L=r`
  ${m("inline-flex")}

  :host {
    --_icon-size: 16px;
    --_icon-gradient-degree: 90deg;
    --_icon-color-value: ${v};
    --_icon-color-empty: ${p};
    --_default-value: 0;
    --_default-max: 5;
    --_mask-image-filled: url(${n(b)});
    --_mask-image-outlined: url(${n(w)});
    --_mask-position-x: left;

    align-items: center;
    color: ${t};
    font-family: ${_};
    font-size: ${f};
    line-height: ${$};
    contain: layout style;
    user-select: none;
  }

  :host(:dir(rtl)) {
    --_icon-gradient-degree: -90deg;
    --_mask-position-x: right;
  }

  :host([size='small']) {
    --_icon-size: 12px;
  }

  :host([size='large']) {
    --_icon-size: 20px;
    font-size: ${h};
    line-height: ${z};
  }

  ::slotted([slot='icon']) {
    display: none;
  }

  :host([color='neutral']) {
    --_icon-color-value: ${t};
    --_icon-color-empty: ${u};
  }

  :host([color='brand']) {
    --_icon-color-value: ${d};
    --_icon-color-empty: ${g};
  }

  @supports (width: attr(value type(<number>))) {
    :host {
      --_attr-value: attr(value type(<number>));
      --_attr-max: attr(max type(<number>));
    }
  }

  :host([compact]) .display {
    --_max: 1;
  }

  .display {
    --_value: max(0, round(var(--_attr-value, var(--_default-value)) * 2) / 2);
    --_max: max(1, var(--_attr-max, var(--_default-max)));
    --_mask-inline-size: calc(var(--_icon-size) + ${o});
    --_icon-gradient-stop-visual-adjustment: 0px;
    --_icon-gradient-stop: calc(
      var(--_mask-inline-size) * var(--_value) - var(--_icon-gradient-stop-visual-adjustment)
    );

    background-image: linear-gradient(
      var(--_icon-gradient-degree),
      var(--_icon-color-value) var(--_icon-gradient-stop),
      var(--_icon-color-empty) calc(var(--_icon-gradient-stop) + 0.5px)
    );
    block-size: var(--_icon-size);
    display: grid;
    inline-size: calc(var(--_max) * var(--_mask-inline-size) - ${o} / 2);
    mask-image: var(--_mask-image-filled);
    mask-repeat: repeat no-repeat;
    mask-size: var(--_mask-inline-size) var(--_icon-size);
    mask-position: var(--_mask-position-x) center;
  }

  .value-label,
  ::slotted([slot='value']) {
    display: block;
    margin-inline-start: ${i};
    font-weight: ${x};
  }

  :host([size='small']) .value-label,
  :host([size='small']) ::slotted([slot='value']) {
    margin-inline-start: ${o};
  }

  :host([size='large']) .value-label,
  :host([size='large']) ::slotted([slot='value']) {
    margin-inline-start: ${l};
  }

  :host(:not([count])) .count-label {
    display: none;
  }

  .count-label::before,
  ::slotted([slot='count'])::before {
    content: '·';
    margin-inline: ${i};
  }

  :host([size='small']) .count-label::before,
  :host([size='small']) ::slotted([slot='count'])::before {
    margin-inline: ${o};
  }

  :host([size='large']) .count-label::before,
  :host([size='large']) ::slotted([slot='count'])::before {
    margin-inline: ${l};
  }

  @media (forced-colors: active) {
    .display {
      --_icon-color-value: CanvasText;
      --_icon-color-empty: Canvas;
      --_icon-gradient-stop-visual-adjustment: 0.5px;

      forced-color-adjust: none;
    }

    .display::before {
      background-color: var(--_icon-color-value);
      content: '';
      grid-area: 1 / 1 / -1 / -1;
      mask: inherit;
      mask-image: var(--_mask-image-outlined);
    }
  }
`;var A={name:y,registry:c.registry,styles:L,template:B};export{B as a,L as b,A as c};
