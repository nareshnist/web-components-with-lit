import { LitElement, html,css } from "lit";
import { customElement } from "lit/decorators.js";



@customElement('lit-card')
export class litCard extends LitElement {

      constructor() {
        super();
      }
    
      static styles = css`
    :host {
      /* Base card dimensions */
      --card-width: var(--ac-card-width, 100%);
      --card-max-width: var(--ac-card-max-width, 800px);
      --card-min-width: var(--ac-card-min-width, 300px);
      
      /* Colors */
      --card-bg: var(--ac-card-bg, white);
      --card-border-color: var(--ac-card-border-color, #e0e0e0);
      --card-shadow: var(--ac-card-shadow, 0 2px 4px rgba(0,0,0,0.1));
      --card-hover-shadow: var(--ac-card-hover-shadow, 0 4px 8px rgba(0,0,0,0.15));
      
      /* Typography */
      --title-color: var(--ac-title-color, #333);
      --title-font-size: var(--ac-title-font-size, 1.5rem);
      --subtitle-color: var(--ac-subtitle-color, #666);
      --subtitle-font-size: var(--ac-subtitle-font-size, 1rem);
      --body-color: var(--ac-body-color, #444);
      
      /* Spacing */
      --header-spacing: var(--ac-header-spacing, 1rem);
      --body-spacing: var(--ac-body-spacing, 1rem);
      --footer-spacing: var(--ac-footer-spacing, 1rem);
      
      /* Border Radius */
      --border-radius: var(--ac-border-radius, 8px);
      
      display: block;
      width: var(--card-width);
      max-width: var(--card-max-width);
      min-width: var(--card-min-width);
      margin: 1rem;
    }

    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border-color);
      border-radius: var(--border-radius);
      overflow: hidden;
      transition: all 0.3s ease;
      position: relative;
    }


    .card-header {
      padding: var(--header-spacing);
      border-bottom: 1px solid var(--card-border-color);
    }

    ::slotted([slot="title"]) {
      margin: 0;
      color: var(--title-color);
      font-size: var(--title-font-size);
      font-weight: 600;
    }

    ::slotted([slot="subtitle"]) {
      margin: 0.5rem 0 0;
      color: var(--subtitle-color);
      font-size: var(--subtitle-font-size);
    }

    .card-body {
      padding: var(--body-spacing);
      color: var(--body-color);
    }

    .card-footer {
      padding: var(--footer-spacing);
      border-top: 1px solid var(--card-border-color);
      display: flex;
      gap: 0.5rem;
      justify-content: space-between;
    }

    /* Slot-specific styles */
    ::slotted([slot="header-start"]) {
      margin-bottom: var(--header-spacing);
    }

    ::slotted([slot="header-end"]) {
      margin-top: var(--header-spacing);
    }

    ::slotted([slot="footer"]) {
      display: flex;
      gap: 0.5rem;
      width: 100%;
    }

    /* Theme handling */
    :host([theme]) {
      background: var(--theme-bg-color);
      color: var(--theme-text-color);
    }

    /* Rounded variant */
    :host([rounded]) .card {
      border-radius: 24px;
    }

    ::slotted(button) {
      background-color: none;
      color: white;
      border:none;
    }
  `;
   

  render() {
    return html`
      <div class="card">
        <div class="card-header">
          <slot name="header-start"></slot>
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
          <slot name="header-end"></slot>
        </div>

        <div class="card-body">
          <slot name="body"></slot>
        </div>

        <div class="card-footer" >
          
        </div>
      </div>
    `;
  }

}



declare global {
    interface HTMLElementTagNameMap {
      'lit-card': litCard
    }
  }