import{d as a,e as p}from"./chunk-OUGR4WG6.js";import{b as o}from"./chunk-KQ53VGFF.js";import{e as n}from"./chunk-3WMUIIMG.js";function r(l={}){return n`
    <template
      @click="${(t,e)=>t.clickHandler(e.event)}"
      @keypress="${(t,e)=>t.keypressHandler(e.event)}"
    >
      ${p(l)}
      <span class="content" part="content">
        <slot ${o("defaultSlottedContent")}></slot>
      </span>
      ${a(l)}
    </template>
  `}var c=r();export{r as a,c as b};
