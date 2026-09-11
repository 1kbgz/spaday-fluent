import{c as y}from"./chunk-MGDWEGIX.js";import{Ah as h,Fg as c,Mg as g,Uf as s,a as t,fa as l,gb as d,hc as n,oh as p,th as m,wh as b}from"./chunk-DVLTGBYE.js";import{a as r}from"./chunk-FUXJWCXM.js";import{b as e}from"./chunk-JB4YKTVJ.js";import{e as i}from"./chunk-IQAG6JCP.js";import{c as a}from"./chunk-3MFZGGQB.js";var u=a`
  @layer base {
    :host {
      --dialog-backdrop: ${d};
      --dialog-starting-scale: 0.85;
    }

    ::backdrop {
      background: var(--dialog-backdrop, rgba(0, 0, 0, 0.4));
    }

    dialog {
      background: ${l};
      border-radius: ${s};
      border: none;
      box-shadow: ${c};
      color: ${t};
      max-height: 100vh;
      padding: 0;
      width: 100%;
      max-width: 600px;
    }

    :host([type='non-modal']) dialog {
      inset: 0;
      z-index: 2;
      overflow: auto;
    }

    @supports (max-height: 1dvh) {
      dialog {
        max-height: 100dvh;
      }
    }
  }

  @layer animations {
    /* Disable animations for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      dialog,
      ::backdrop {
        transition: display allow-discrete, opacity, overlay allow-discrete, scale;
        transition-duration: ${p};
        transition-timing-function: ${b};
        /* Set opacity to 0 when closed */
        opacity: 0;
      }
      ::backdrop {
        transition-timing-function: ${h};
      }

      /* Set opacity to 1 when open */
      [open],
      [open]::backdrop {
        opacity: 1;
      }

      /* Exit styles for dialog */
      dialog:not([open]) {
        /* Make small when leaving */
        scale: var(--dialog-starting-scale);
        /* Faster leaving the stage then entering */
        transition-timing-function: ${m};
      }
    }

    @starting-style {
      [open],
      [open]::backdrop {
        opacity: 0;
      }

      dialog {
        scale: var(--dialog-starting-scale);
      }
    }
  }

  @media (forced-colors: active) {
    @layer base {
      dialog {
        border: ${g} solid ${n};
      }
    }
  }
`;var $=i`
  <dialog
    class="dialog"
    part="dialog"
    aria-modal="${o=>o.dialogModal}"
    aria-describedby="${o=>o.dialogDescribedby}"
    aria-labelledby="${o=>o.dialogLabelledby}"
    aria-label="${o=>o.dialogLabel}"
    role="${o=>o.dialogRole}"
    @click="${(o,f)=>o.clickHandler(f.event)}"
    @cancel="${o=>o.hide()}"
    ${e("dialog")}
  >
    <div tabindex="-1"></div>
    <slot></slot>
  </dialog>
`;var N={name:y,registry:r.registry,styles:u,template:$};export{u as a,$ as b,N as c};
