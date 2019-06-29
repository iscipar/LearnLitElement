import { LitElement, html, css } from 'lit-element';
import { sharedStyles } from './shared-styles';

export class MyCard extends LitElement {

    static get properties() {
        return {
            title: {
                type: String
            }
        };
    }

    static get styles() {
        return [sharedStyles, css`
            :host {
                display: block;
                border: 1px solid;
                margin-bottom: 5px;
            }

            :host([hidden]) {
                display: none;
            }

            :host(.red) {
                border-color: #b71c1c;
            }

            ::slotted(p) {
                background-color: #fff59d;
            }

            h2 {
                margin-top: 20px;
                color: var(--my-card-title-color, #212121);
                background-color: var(--my-card-title-background-color, transparent);
            }
        `];
    }

    render() {
        return html`
            ${this.title
                ? html`<h2>${this.title}</h2>` 
                : ''
            }
            <slot></slot>
        `;
    }
}
customElements.define('my-card', MyCard);