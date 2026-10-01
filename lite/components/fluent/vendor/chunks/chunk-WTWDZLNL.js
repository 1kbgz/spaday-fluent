import{d as a,e as p}from"./chunk-6ZJ4EDBN.js";import{b as o}from"./chunk-HBQAVC5C.js";import{e as n}from"./chunk-S66425KA.js";function r(l={}){return n`
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
