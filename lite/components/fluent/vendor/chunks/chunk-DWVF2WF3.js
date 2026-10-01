import{e as p}from"./chunk-WDIY6Y4N.js";import{a as n,b as u,c as b,d as f,e as y,f as c}from"./chunk-BUBB7TRO.js";import{d as s,e as a}from"./chunk-6ZJ4EDBN.js";import{Qf as m,Rf as l,Sf as d}from"./chunk-AZ2PJJNA.js";import{a as i}from"./chunk-2JM5GVQW.js";import{a as o}from"./chunk-ATBOKLAS.js";import{e as r}from"./chunk-S66425KA.js";import{c as t}from"./chunk-4HX2PQZF.js";var $=t`
  :host([shape='square']) {
    border-radius: ${m};
  }

  :host([shape='rounded']) {
    border-radius: ${d};
  }

  :host([shape='rounded']:is([size='tiny'], [size='extra-small'], [size='small'])) {
    border-radius: ${l};
  }

  ${c}
  ${y}
  ${f}
  ${b}
  ${u}
  ${n}

  @media (forced-colors: active) {
    :host,
    :host([appearance='outline']),
    :host([appearance='tint']) {
      border-color: CanvasText;
    }
  }
`;function h(e={}){return r`
    ${a(e)}
    <slot>${o(e.defaultContent)}</slot>
    ${s(e)}
  `}var g=h();var G={name:p,registry:i.registry,styles:$,template:g};export{$ as a,g as b,G as c};
