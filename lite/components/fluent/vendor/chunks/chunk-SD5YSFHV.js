import{e as a}from"./chunk-LOJXAMNR.js";import{a as i}from"./chunk-55TBP5WP.js";import{d as m,e as s}from"./chunk-RIDJT2TH.js";import{a as l}from"./chunk-FUXJWCXM.js";import{e as n}from"./chunk-IQAG6JCP.js";import{c as r}from"./chunk-3MFZGGQB.js";var p=r`
  ${i}

  ::slotted(a) {
    position: absolute;
    inset: 0;
  }

  @media (forced-colors: active) {
    :host {
      border-color: LinkText;
      color: LinkText;
    }
  }
`;function d(o={}){return n`
    <template
      tabindex="0"
      @click="${(t,e)=>t.clickHandler(e.event)}"
      @keydown="${(t,e)=>t.keydownHandler(e.event)}"
    >
      ${s(o)}
      <span class="content" part="content">
        <slot></slot>
      </span>
      ${m(o)}
    </template>
  `}var c=d();var h={name:a,registry:l.registry,styles:p,template:c};export{p as a,c as b,h as c};
