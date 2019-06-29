import { LitElement, html, css } from 'lit-element';
import { icons } from './my-icons';

export class MyIcon extends LitElement {

    static get properties() {
        return {
            icon: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.icon = 'done';
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                line-height: 0;
                position: relative;
                top: 0.5em;
            }

            :host([hidden]) {
                display: none;
            }

            path {
                fill: var(--my-icon-color, #212121);
            }
            
            path[fill="none"] {
                fill: transparent;
            }

            svg {
                width: var(--my-icon-size, 24px);
                height: var(--my-icon-size, 24px);
                display: inline-block;
            }
        `;
    }

    render() {
        return html`
            ${icons[this.icon]}
        `;
    }
}
customElements.define('my-icon', MyIcon);