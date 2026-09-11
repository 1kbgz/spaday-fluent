import{e as N}from"./chunk-ANJP4DSM.js";import{b as B}from"./chunk-55TBP5WP.js";import{d as n,e as p}from"./chunk-RIDJT2TH.js";import{J as f,Sg as y,Tg as S,Ug as H,dg as x,e as o,eg as s,f as c,fg as $,g,i as h,j as m,mg as b,sg as z,tg as v,x as u}from"./chunk-DVLTGBYE.js";import{a as d}from"./chunk-FUXJWCXM.js";import{b as l}from"./chunk-RD5DBDNA.js";import{e as a}from"./chunk-IQAG6JCP.js";import{c as r}from"./chunk-3MFZGGQB.js";function k(i={}){return a`
    <template
      @click="${(t,e)=>t.clickHandler(e.event)}"
      @keypress="${(t,e)=>t.keypressHandler(e.event)}"
    >
      ${p(i)}
      <span class="content" part="content">
        <slot ${l("defaultSlottedContent")}></slot>
        <slot name="description"></slot>
      </span>
      ${n(i)}
    </template>
  `}var w=k();var F=r`
  ${B}

  :host,
  :host(:is([size])) {
    gap: 12px;
    height: auto;
    padding-top: 14px;
    padding-inline: 12px;
    padding-bottom: 16px;
    font-size: ${s};
    line-height: ${z};
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  ::slotted([slot='description']) {
    color: ${o};
    line-height: 100%;
    font-size: ${x};
    font-weight: ${b};
  }

  ::slotted(svg),
  :host([size='large']) ::slotted(svg) {
    font-size: 40px;
    height: 40px;
    width: 40px;
  }

  :host(:hover) ::slotted([slot='description']) {
    color: ${c};
  }

  :host(:active) ::slotted([slot='description']) {
    color: ${g};
  }

  :host(:is([appearance='primary'], [appearance='primary']:is(:hover, :active))) ::slotted([slot='description']) {
    color: ${f};
  }

  :host(:is([appearance='transparent'], [appearance='subtle'], [appearance='subtle']:is(:hover, :active)))
    ::slotted([slot='description']) {
    color: ${o};
  }

  :host([appearance='transparent']:hover) ::slotted([slot='description']) {
    color: ${h};
  }

  :host([appearance='transparent']:active) ::slotted([slot='description']) {
    color: ${m};
  }

  :host(
      :is(
          :disabled,
          :disabled[appearance],
          [disabled],
          [disabled][appearance],
          [disabled-focusable],
          [disabled-focusable][appearance]
        )
    )
    ::slotted([slot='description']) {
    color: ${u};
  }

  :host([size='small']) {
    padding: 8px;
    padding-bottom: 10px;
  }

  :host([icon-only]) {
    min-width: 52px;
    max-width: 52px;
    padding: ${S};
  }

  :host([icon-only][size='small']) {
    min-width: 48px;
    max-width: 48px;
    padding: ${y};
  }

  :host([icon-only][size='large']) {
    min-width: 56px;
    max-width: 56px;
    padding: ${H};
  }

  :host([size='large']) {
    padding-top: 18px;
    padding-inline: 16px;
    padding-bottom: 20px;
    font-size: ${$};
    line-height: ${v};
  }
  :host([size='large']) ::slotted([slot='description']) {
    font-size: ${s};
  }

  @media (forced-colors: active) {
    :host([appearance='primary']:not(:hover, :focus-visible, :disabled, [disabled], [disabled-focusable]))
      ::slotted([slot='description']) {
      color: HighlightText;
    }
  }
`;var E={name:N,registry:d.registry,styles:F,template:w};export{w as a,F as b,E as c};
