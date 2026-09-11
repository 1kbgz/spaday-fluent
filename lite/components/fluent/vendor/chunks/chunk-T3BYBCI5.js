import{h as _o}from"./chunk-RW72S7MH.js";import{$f as Eo,Ah as Zo,Be as oo,Bg as No,Ce as eo,Cg as Wo,Dc as m,Dg as Go,Ee as to,Eg as Co,Fe as ro,He as ao,Id as w,Ie as so,Kd as v,Ke as lo,Ld as B,Le as io,Mg as Ho,Nd as y,Ne as co,Ng as t,Od as F,Oe as no,Og as c,P as b,Pg as n,Qd as M,Qe as ho,Rd as S,Re as uo,Rf as yo,Sf as Fo,Td as E,Te as go,Tf as Mo,Ud as R,Ue as po,Uf as So,Wd as I,We as $o,Xd as T,Xe as fo,Zd as q,Ze as bo,_d as A,_e as zo,_f as i,ae as D,af as ko,be as L,bf as mo,cg as Ro,de as O,df as xo,dg as Io,ee as N,ef as Po,eg as To,fa as s,fg as qo,ge as W,gf as wo,gg as Ao,he as G,hf as vo,hg as Do,je as C,jf as Bo,ke as H,l as f,lh as d,me as U,mg as Lo,ne as X,og as Oo,pb as l,pe as j,qe as J,qh as h,rd as x,rh as e,se as K,sh as Uo,te as Q,th as Xo,uh as jo,ve as V,vh as Jo,we as Y,wh as Ko,xc as k,xd as P,xh as Qo,ye as Z,yh as Vo,za as z,ze as _,zh as Yo}from"./chunk-DVLTGBYE.js";import{a as p}from"./chunk-FUXJWCXM.js";import{b as $}from"./chunk-SRPHT6VS.js";import{b as g}from"./chunk-RD5DBDNA.js";import{b as r}from"./chunk-JB4YKTVJ.js";import{e as a}from"./chunk-IQAG6JCP.js";import{c as u}from"./chunk-3MFZGGQB.js";var re=a`<svg
  width="1em"
  height="1em"
  viewBox="0 0 20 20"
  class="default-icon"
  fill="currentcolor"
  aria-hidden="true"
>
  <path
    d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0010 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0017 13a2 2 0 00-2-2H5zm-1 2a1 1 0 011-1h10a1 1 0 011 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0110 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 014 13z"
  ></path>
</svg>`;function ae(){return a`
    <slot class="default-slot" ${g("slottedDefaults")} ${r("defaultSlot")}></slot>
    <span class="monogram" ${r("monogram")}>${te=>te.initials}</span>
    ${re}
    <slot name="badge"></slot>
  `}var oe=ae();var o={fastOutSlowInMax:Jo,fastOutSlowInMid:Ko,fastOutSlowInMin:Qo,slowOutFastInMax:Uo,slowOutFastInMid:Xo,slowOutFastInMin:jo,fastEase:Vo,normalEase:Yo,nullEasing:Zo},ee=u`
  ${$("inline-grid")} :host {
    position: relative;
    place-items: center;
    place-content: center;
    grid-template: 1fr / 1fr;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    font-family: ${Eo};
    font-weight: ${Oo};
    font-size: ${To};
    border-radius: ${i};
    color: ${f};
    background-color: ${z};
    contain: layout style;
  }

  .monogram,
  .default-icon {
    grid-area: 1 / 1 / -1 / -1;
  }

  .monogram:empty {
    display: none;
  }

  .default-slot:is(.has-slotted, :has-slotted) ~ .default-icon,
  .default-slot:is(.has-slotted, :has-slotted) ~ .monogram,
  :host(:is([name]):not([name=''])) .default-icon,
  :host(:is([initials]):not([initials=''])) .default-icon {
    display: none;
  }

  .default-icon,
  ::slotted(svg) {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  ::slotted(img) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: ${i};
  }

  ::slotted([slot='badge']) {
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 0 ${Ho} ${s};
  }

  :host([size='64']) ::slotted([slot='badge']),
  :host([size='72']) ::slotted([slot='badge']),
  :host([size='96']) ::slotted([slot='badge']),
  :host([size='120']) ::slotted([slot='badge']),
  :host([size='128']) ::slotted([slot='badge']) {
    box-shadow: 0 0 0 ${t} ${s};
  }

  :host([size='16']),
  :host([size='20']),
  :host([size='24']) {
    font-size: ${Ro};
    font-weight: ${Lo};
  }

  :host([size='16']) {
    width: 16px;
    height: 16px;
  }

  :host([size='20']) {
    width: 20px;
    height: 20px;
  }

  :host([size='24']) {
    width: 24px;
    height: 24px;
  }

  :host([size='16']) .default-icon,
  :host([size='16']) ::slotted(svg) {
    width: 12px;
    height: 12px;
    font-size: 12px;
  }

  :host([size='20']) .default-icon,
  :host([size='24']) .default-icon,
  :host([size='20']) ::slotted(svg),
  :host([size='24']) ::slotted(svg) {
    width: 16px;
    height: 16px;
    font-size: 16px;
  }

  :host([size='28']) {
    width: 28px;
    height: 28px;
    font-size: ${Io};
  }

  :host([size='36']) {
    width: 36px;
    height: 36px;
  }

  :host([size='40']) {
    width: 40px;
    height: 40px;
  }

  :host([size='48']),
  :host([size='56']) {
    font-size: ${qo};
  }

  :host([size='48']) {
    width: 48px;
    height: 48px;
  }

  :host([size='48']) .default-icon,
  :host([size='48']) ::slotted(svg) {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  :host([size='56']) {
    width: 56px;
    height: 56px;
  }

  :host([size='56']) .default-icon,
  :host([size='56']) ::slotted(svg) {
    width: 28px;
    height: 28px;
    font-size: 28px;
  }

  :host([size='64']),
  :host([size='72']),
  :host([size='96']) {
    font-size: ${Ao};
  }

  :host([size='64']) .default-icon,
  :host([size='72']) .default-icon,
  :host([size='64']) ::slotted(svg),
  :host([size='72']) ::slotted(svg) {
    width: 32px;
    height: 32px;
    font-size: 32px;
  }

  :host([size='64']) {
    width: 64px;
    height: 64px;
  }

  :host([size='72']) {
    width: 72px;
    height: 72px;
  }

  :host([size='96']) {
    width: 96px;
    height: 96px;
  }

  :host([size='96']) .default-icon,
  :host([size='120']) .default-icon,
  :host([size='128']) .default-icon,
  :host([size='96']) ::slotted(svg),
  :host([size='120']) ::slotted(svg),
  :host([size='128']) ::slotted(svg) {
    width: 48px;
    height: 48px;
    font-size: 48px;
  }

  :host([size='120']),
  :host([size='128']) {
    font-size: ${Do};
  }

  :host([size='120']) {
    width: 120px;
    height: 120px;
  }

  :host([size='128']) {
    width: 128px;
    height: 128px;
  }

  :host([shape='square']) {
    border-radius: ${Fo};
  }

  :host([shape='square'][size='20']),
  :host([shape='square'][size='24']) {
    border-radius: ${yo};
  }

  :host([shape='square'][size='56']),
  :host([shape='square'][size='64']),
  :host([shape='square'][size='72']) {
    border-radius: ${Mo};
  }
  :host([shape='square'][size='96']),
  :host([shape='square'][size='120']),
  :host([shape='square'][size='128']) {
    border-radius: ${So};
  }

  :host([data-color='brand']) {
    color: ${b};
    background-color: ${l};
  }

  :host([data-color='dark-red']) {
    color: ${W};
    background-color: ${N};
  }

  :host([data-color='cranberry']) {
    color: ${D};
    background-color: ${A};
  }

  :host([data-color='red']) {
    color: ${m};
    background-color: ${k};
  }

  :host([data-color='pumpkin']) {
    color: ${$o};
    background-color: ${po};
  }

  :host([data-color='peach']) {
    color: ${lo};
    background-color: ${so};
  }

  :host([data-color='marigold']) {
    color: ${P};
    background-color: ${x};
  }

  :host([data-color='gold']) {
    color: ${U};
    background-color: ${H};
  }

  :host([data-color='brass']) {
    color: ${E};
    background-color: ${S};
  }

  :host([data-color='brown']) {
    color: ${I};
    background-color: ${R};
  }

  :host([data-color='forest']) {
    color: ${C};
    background-color: ${G};
  }

  :host([data-color='seafoam']) {
    color: ${xo};
    background-color: ${mo};
  }

  :host([data-color='dark-green']) {
    color: ${O};
    background-color: ${L};
  }

  :host([data-color='light-teal']) {
    color: ${V};
    background-color: ${Q};
  }

  :host([data-color='teal']) {
    color: ${Bo};
    background-color: ${vo};
  }

  :host([data-color='steel']) {
    color: ${wo};
    background-color: ${Po};
  }

  :host([data-color='blue']) {
    color: ${M};
    background-color: ${F};
  }

  :host([data-color='royal-blue']) {
    color: ${ko};
    background-color: ${zo};
  }

  :host([data-color='cornflower']) {
    color: ${q};
    background-color: ${T};
  }

  :host([data-color='navy']) {
    color: ${ao};
    background-color: ${ro};
  }

  :host([data-color='lavender']) {
    color: ${K};
    background-color: ${J};
  }

  :host([data-color='purple']) {
    color: ${bo};
    background-color: ${fo};
  }

  :host([data-color='grape']) {
    color: ${j};
    background-color: ${X};
  }

  :host([data-color='lilac']) {
    color: ${Z};
    background-color: ${Y};
  }

  :host([data-color='pink']) {
    color: ${co};
    background-color: ${io};
  }

  :host([data-color='magenta']) {
    color: ${oo};
    background-color: ${_};
  }

  :host([data-color='plum']) {
    color: ${go};
    background-color: ${uo};
  }

  :host([data-color='beige']) {
    color: ${y};
    background-color: ${B};
  }

  :host([data-color='mink']) {
    color: ${to};
    background-color: ${eo};
  }

  :host([data-color='platinum']) {
    color: ${ho};
    background-color: ${no};
  }

  :host([data-color='anchor']) {
    color: ${v};
    background-color: ${w};
  }

  :host([active]) {
    /* Work-around for text pixel snapping at the end of the animation */
    transform: perspective(1px);
    transition-property: transform, opacity;
    transition-duration: ${e}, ${d};
    transition-delay: ${o.fastEase}, ${o.nullEasing};
  }

  :host([active])::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    transition-property: margin, opacity;
    transition-duration: ${e}, ${h};
    transition-delay: ${o.fastEase}, ${o.nullEasing};
  }
  :host([active])::before {
    box-shadow: ${Wo};
    border-style: solid;
    border-color: ${l};
  }

  :host([active][appearance='shadow'])::before {
    border-style: none;
    border-color: none;
  }

  :host([active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${t});
    border-width: ${t};
  }

  :host([size='56'][active]:not([appearance='shadow']))::before,
  :host([size='64'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${c});
    border-width: ${c};
  }

  :host([size='72'][active]:not([appearance='shadow']))::before,
  :host([size='96'][active]:not([appearance='shadow']))::before,
  :host([size='120'][active]:not([appearance='shadow']))::before,
  :host([size='128'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${n});
    border-width: ${n};
  }

  :host([size='20'][active][appearance])::before,
  :host([size='24'][active][appearance])::before,
  :host([size='28'][active][appearance])::before {
    box-shadow: ${No};
  }

  :host([size='56'][active][appearance])::before,
  :host([size='64'][active][appearance])::before {
    box-shadow: ${Go};
  }

  :host([size='72'][active][appearance])::before,
  :host([size='96'][active][appearance])::before,
  :host([size='120'][active][appearance])::before,
  :host([size='128'][active][appearance])::before {
    box-shadow: ${Co};
  }

  :host([active][appearance='ring'])::before {
    box-shadow: none;
  }

  :host([active='inactive']) {
    opacity: 0.8;
    transform: scale(0.875);
    transition-property: transform, opacity;
    transition-duration: ${e}, ${d};
    transition-delay: ${o.fastOutSlowInMin}, ${o.nullEasing};
  }

  :host([active='inactive'])::before {
    margin: 0;
    opacity: 0;
    transition-property: margin, opacity;
    transition-duration: ${e}, ${h};
    transition-delay: ${o.fastOutSlowInMin}, ${o.nullEasing};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host([active]) {
      transition-duration: 0.01ms;
    }

    :host([active])::before {
      transition-duration: 0.01ms;
      transition-delay: 0.01ms;
    }
  }
`;var $e={name:_o,registry:p.registry,styles:ee,template:oe};export{oe as a,ee as b,$e as c};
