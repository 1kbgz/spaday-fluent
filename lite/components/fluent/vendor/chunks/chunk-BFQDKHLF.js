import{d as D}from"./chunk-X2B6NP2Y.js";import{c,f as e,w as u}from"./chunk-7W6XT5GS.js";import{d as g,e as h}from"./chunk-RIDJT2TH.js";import{$a as S,$f as a,I as k,Sf as i,dg as z,e as b,eg as C,f as v,fa as w,g as y,ga as B,ia as F,l as x,mg as d,nc as N,rg as M,sg as T,x as s}from"./chunk-DVLTGBYE.js";import{a as $}from"./chunk-FUXJWCXM.js";import{a as n}from"./chunk-P326MSZE.js";import{b as f}from"./chunk-SRPHT6VS.js";import{b as m}from"./chunk-RD5DBDNA.js";import{e as l}from"./chunk-IQAG6JCP.js";import{c as p}from"./chunk-3MFZGGQB.js";var H=p`
  ${f("flex")}

  :host {
    align-items: center;
    background: ${w};
    border-radius: ${i};
    box-sizing: border-box;
    color: ${b};
    cursor: pointer;
    font: ${d} ${C} / ${T} ${a};
    gap: 4px;
    min-block-size: 32px;
    overflow: visible;
    padding-inline: 10px;
  }

  @supports (grid-template-columns: subgrid) {
    :host {
      display: grid;
      gap: 0;
      grid-template-columns: subgrid;
      padding-inline: unset;
    }
  }

  :host(:hover) {
    background: ${B};
    color: ${v};
  }

  :host(:active) {
    background-color: ${F};
    color: ${y};
  }

  :host(:active) ::slotted([slot='start']) {
    color: ${k};
  }

  :host(${e}) {
    background-color: ${S};
    color: ${s};
  }

  :host(${e}) ::slotted([slot='start']),
  :host(${e}) ::slotted([slot='end']) {
    color: ${s};
  }

  :host(:focus-visible) {
    border-radius: ${i};
    outline: 2px solid ${N};
  }

  :host(:not(${c})) .indicator,
  :host(:not(${c})) ::slotted([slot='indicator']),
  :host(:not(${u})) .submenu-glyph,
  :host(:not(${u})) ::slotted([slot='submenu-glyph']) {
    display: none;
  }

  ::slotted([slot='end']) {
    color: ${x};
    font: ${d} ${z} / ${M} ${a};
    white-space: nowrap;
  }

  .indicator,
  ::slotted([slot='indicator']) {
    grid-column: 2 / span 1;
    width: 20px;
  }

  ::slotted([slot='start']) {
    display: inline-flex;
    grid-column: 3 / span 1;
  }

  .content {
    flex-grow: 1;
    grid-column: 4 / span 1;
    padding: 0 2px;
    white-space: nowrap;
  }

  ::slotted([slot='end']) {
    grid-column: 5 / span 1;
    justify-self: end;
  }

  .submenu-glyph,
  ::slotted([slot='submenu-glyph']) {
    grid-column: 6 / span 1;
    justify-self: end;
  }

  @layer popover {
    :host {
      anchor-name: --menu-trigger;
      position: relative;
    }

    @position-try --inline-inside {
      inset-inline-start: unset;
      inset-inline-end: anchor(inside);
    }

    ::slotted([popover]) {
      margin: 0;
      max-block-size: var(--menu-max-height, auto);
      position: fixed;
      position-anchor: --menu-trigger;
      inset: unset;
      inset-block-start: anchor(inside);
      inset-inline-start: anchor(outside);
      position-try-fallbacks: --inline-inside, flip-block, flip-block --inline-inside;
      z-index: 1;
    }

    ::slotted([popover]:not(:popover-open)) {
      display: none;
    }

    /* Fallback for no anchor-positioning */
    @supports not (anchor-name: --menu-trigger) {
      ::slotted([popover]) {
        align-self: start;
      }
    }
  }

  @media (forced-colors: active) {
    :host(${e}),
    :host(${e}) ::slotted([slot='start']),
    :host(${e}) ::slotted([slot='end']) {
      color: GrayText;
    }
  }
`;var I=l.partial('<svg class="indicator" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 014.9 12L2.22 9.28a.75.75 0 111.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 011.06.04z" fill="currentColor"></path></svg>'),R=l.partial('<svg class="submenu-glyph" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.74 3.2a.75.75 0 00-.04 1.06L9.23 8 5.7 11.74a.75.75 0 101.1 1.02l4-4.25a.75.75 0 000-1.02l-4-4.25a.75.75 0 00-1.06-.04z" fill="currentColor"></path></svg>');function j(r={}){return l`
    <template
      tabindex="0"
      @keydown="${(o,t)=>o.handleMenuItemKeyDown(t.event)}"
      @click="${(o,t)=>o.handleMenuItemClick(t.event)}"
      @mouseover="${(o,t)=>o.handleMouseOver(t.event)}"
      @mouseout="${(o,t)=>o.handleMouseOut(t.event)}"
      @toggle="${(o,t)=>o.handleToggle(t.event)}"
    >
      <slot name="indicator"> ${n(r.indicator)} </slot>
      ${h(r)}
      <div part="content" class="content">
        <slot></slot>
      </div>
      ${g(r)}
      <slot name="submenu-glyph"> ${n(r.submenuGlyph)} </slot>
      <slot name="submenu" ${m({property:"slottedSubmenu"})}></slot>
    </template>
  `}var G=j({indicator:I,submenuGlyph:R});var Y={name:D,registry:$.registry,styles:H,template:G};export{H as a,G as b,Y as c};
