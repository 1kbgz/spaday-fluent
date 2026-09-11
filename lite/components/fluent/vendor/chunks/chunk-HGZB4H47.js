import{b as S}from"./chunk-HW3IN56J.js";import{d as l,e as d}from"./chunk-RIDJT2TH.js";import{$f as $,Jb as o,Rf as b,Sf as x,Vg as v,Wg as y,_f as e,a as m,bc as p,e as f,eg as k,mc as g,nc as h,og as r,sg as i,x as t}from"./chunk-DVLTGBYE.js";import{a as c}from"./chunk-FUXJWCXM.js";import{b as u}from"./chunk-SRPHT6VS.js";import{e as n}from"./chunk-IQAG6JCP.js";import{c as a}from"./chunk-3MFZGGQB.js";var z=a`
  ${u("inline-flex")}

  :host {
    position: relative;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    justify-content: center;
    line-height: ${i};
    font-family: ${$};
    font-size: ${k};
    color: ${f};
    fill: currentcolor;
    grid-row: 1;
    padding: ${y} ${v};
    border-radius: ${x};
    gap: 4px;
  }

  :host .tab-content {
    display: inline-flex;
    flex-direction: column;
    padding: 0 2px;
    grid-column: 3;
  }

  :host([aria-selected='true']) {
    color: ${m};
    font-weight: ${r};
  }

  /* adds hidden textContent to prevent shifting ui on bold / unbolding of text */
  :host .tab-content::after {
    content: var(--textContent);
    visibility: hidden;
    height: 0;
    line-height: ${i};
    font-weight: ${r};
  }

  :host([aria-selected='true'])::after {
    background-color: ${p};
    border-radius: ${e};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 2;
  }

  :host([aria-selected='false']:hover)::after {
    background-color: ${o};
    border-radius: ${e};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 1;
  }

  /*
   * TODO: Remove '(text-size-adjust: auto)' after this bug is fixed:
   * https://bugs.webkit.org/show_bug.cgi?id=298646
   * Also remove the same trick from tablist.styles.ts.
   * Using '@supports (text-size-adjust: auto)' here to exclude Safari 26 from
   * using CSS Anchor Positioning here because it crashes.
   */
  @supports (anchor-name: --a) and (text-size-adjust: auto) {
    :host([aria-selected='true'])::after {
      background-color: transparent;
    }

    :host([aria-selected='true']:hover)::after {
      background-color: ${o};
    }
  }

  :host([aria-selected='true'][disabled])::after {
    background-color: ${t};
  }

  ::slotted([slot='start']) {
    grid-column: 2;
  }

  ::slotted([slot='end']) {
    grid-column: -1;
  }

  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    display: flex;
  }
  :host([disabled]) {
    cursor: not-allowed;
    fill: ${t};
    color: ${t};
    pointer-events: none;
  }

  :host([disabled]:hover)::after {
    background-color: unset;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    border-radius: ${b};
    box-shadow: 0 0 0 3px ${h};
    outline: 1px solid ${g};
  }

  @media (forced-colors: active) {
    :host([aria-selected='true'])::after {
      background-color: Highlight;
    }
  }
`;function F(s={}){return n`
    <template slot="tab" role="tab">
      ${d(s)}
      <span class="tab-content"><slot></slot></span>
      ${l(s)}
    </template>
  `}var w=F({});var P={name:S,registry:c.registry,styles:z,template:w};export{z as a,w as b,P as c};
