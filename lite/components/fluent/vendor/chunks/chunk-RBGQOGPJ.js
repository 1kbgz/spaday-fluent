import{d as x}from"./chunk-C5CNXBNK.js";import{$f as m,Ah as w,Fg as $,Mg as u,Zg as y,a as c,eg as h,fa as g,gb as t,hc as i,mg as f,oh as a,sg as b,th as e,wh as r}from"./chunk-DVLTGBYE.js";import{a as s}from"./chunk-FUXJWCXM.js";import{b as p}from"./chunk-SRPHT6VS.js";import{b as l}from"./chunk-JB4YKTVJ.js";import{e as d}from"./chunk-IQAG6JCP.js";import{c as n}from"./chunk-3MFZGGQB.js";var k=n`
  ${p("block")}

  :host {
    --dialog-backdrop: ${t};
  }

  :host([type='non-modal']) dialog[open]::backdrop {
    display: none;
  }

  :host([type='non-modal']) dialog {
    position: fixed;
    top: 0;
    bottom: 0;
  }

  :host([type='inline']) {
    height: 100%;
    width: fit-content;
  }

  :host([type='inline']) dialog[open] {
    box-shadow: none;
    position: relative;
  }

  :host([size='small']) dialog {
    width: 320px;
    max-width: 320px;
  }

  :host([size='large']) dialog {
    width: 940px;
    max-width: 940px;
  }

  :host([size='full']) dialog {
    width: 100%;
    max-width: 100%;
  }

  :host([position='end']) dialog {
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  dialog {
    background: ${g};
    border-radius: 0;
    border: ${u} solid ${i};
    border-inline-end-color: ${i};
    border-inline-start-color: var(--drawer-separator, ${i});
    box-shadow: ${$};
    box-sizing: border-box;
    color: ${c};
    font-family: ${m};
    font-size: ${h};
    font-weight: ${f};
    height: 100%;
    line-height: ${b};
    margin-inline-end: auto;
    margin-inline-start: 0;
    max-height: 100vh;
    max-width: calc(100vw - ${y});
    outline: none;
    padding: 0;
    bottom: 0;
    top: 0;
    width: var(--drawer-width, 592px);
    z-index: var(--drawer-elevation, 1000);
  }

  dialog::backdrop {
    background: var(--dialog-backdrop);
  }

  @layer animations {
    /* Disable animations for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      dialog {
        transition: display allow-discrete, opacity, overlay allow-discrete, transform;
        transition-duration: ${a};
        transition-timing-function: ${r};
      }

      /* Exit styles for dialog */
      :host dialog:not([open]) {
        transform: translateX(-100%);
        transition-timing-function: ${e};
      }
      :host([position='end']) dialog:not([open]) {
        transform: translateX(100%);
        transition-timing-function: ${e};
      }

      dialog[open] {
        transform: translateX(0);
      }

      dialog::backdrop {
        transition: display allow-discrete, opacity, overlay allow-discrete, scale;
        transition-duration: ${a};
        transition-timing-function: ${r};
        background: var(--dialog-backdrop, ${t});
        opacity: 0;
      }

      dialog[open]::backdrop {
        opacity: 1;
      }

      dialog::backdrop {
        transition-timing-function: ${w};
      }
    }

    @starting-style {
      dialog[open] {
        transform: translateX(-100%);
      }
      :host([position='end']) dialog[open] {
        transform: translateX(100%);
      }
      dialog[open]::backdrop {
        opacity: 0;
      }
    }
  }
`;function X(){return d`
    <dialog
      class="dialog"
      part="dialog"
      aria-describedby="${o=>o.dialogDescribedby}"
      aria-labelledby="${o=>o.dialogLabelledby}"
      aria-label="${o=>o.dialogLabel}"
      aria-modal="${o=>o.dialogModal}"
      role="${o=>o.dialogRole}"
      size="${o=>o.size}"
      position="${o=>o.position}"
      @click="${(o,z)=>o.clickHandler(z.event)}"
      @cancel="${o=>o.cancelHandler()}"
      ${l("dialog")}
    >
      <slot></slot>
    </dialog>
  `}var v=X();var W={name:x,registry:s.registry,styles:k,template:v};export{k as a,v as b,W as c};
