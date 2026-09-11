import{a as d}from"./chunk-3OP6IK7L.js";import{a as l}from"./chunk-XW4QLO47.js";var f="adoptedStyleSheets"in document,y="CSSScopeRule"in window,r=new Map,i=new Map,c=new Map,a=new Map,s=new CSSStyleSheet;function k(e,t=document){if(!(!t||!w(t))){if(!f||t instanceof HTMLElement&&!t.shadowRoot&&!y){let o=t===document?document.documentElement:t;A(e,o);return}[document,document.documentElement,document.body].includes(t)?g(e):b(e,t)}}var h=/^[a-zA-Z_-][a-zA-Z0-9_-]*$/;function T(e){return h.test(e)?e:""}var m=/(;|{|}|\/\*|\*\/|@import|url\s*\(|expression\s*\(|javascript:)/i;function E(e){return m.test(e)?"":e}function S(e){return r.has(e)||r.set(e,Object.keys(e).reduce((t,o)=>{let n=T(o),u=E(e[o].toString());return n&&u?`${t}--${n}:${u};`:t},"")),r.get(e)}function w(e){return[document,document.documentElement].includes(e)||e instanceof HTMLElement&&!!e.closest("body")}function g(e){if(e===null){document.adoptedStyleSheets.includes(s)&&s.replaceSync("");return}s.replaceSync(`
    html {
      ${S(e)}
    }
  `),document.adoptedStyleSheets.includes(s)||document.adoptedStyleSheets.push(s)}function b(e,t){if(e===null){t.shadowRoot&&c.has(t)?c.get(t).replaceSync(""):(delete t.dataset.fluentTheme,p(t));return}t.shadowRoot?P(t).replaceSync(`
      :host {
        ${S(e)}
      }
    `):(t.dataset.fluentTheme=_(e),p(t))}function P(e){if(!c.has(e)){let t=new CSSStyleSheet;c.set(e,t),e.shadowRoot?.adoptedStyleSheets.push(t)}return c.get(e)}function _(e){if(!i.has(e)){let t=d("fluent-theme-"),o=new CSSStyleSheet;i.set(e,t),o.replaceSync(`
      @scope ([data-fluent-theme="${t}"]) {
        :scope {
          ${S(e)}
        }
      }
    `),document.adoptedStyleSheets.push(o)}return i.get(e)}function A(e,t){let o;if(e===null){if(!a.has(t))return;o=a.get(t)}else a.set(t,e),o=e;for(let[n,u]of Object.entries(o))e===null?t.style.removeProperty(`--${n}`):t.style.setProperty(`--${n}`,u.toString())}var{userAgent:M}=navigator,O=/\bAppleWebKit\/[\d+\.]+\b/.test(M);function p(e){if(!O)return;let t="visibility",o="hidden",n=e.style.getPropertyValue(t);e.style.setProperty(t,o),l.process(),e.style.setProperty(t,n)}export{k as a};
