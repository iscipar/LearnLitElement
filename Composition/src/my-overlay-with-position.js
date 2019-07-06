import { LitElement, html } from 'lit-element';
import { MyOverlay } from './my-overlay';

export class MyOverlayWithPosition extends MyOverlay {

    static get properties() {
        return {
            top: {
                type: Number
            }
        };
    }

    constructor() {
        super();
        this.top = 0;
    }

    get contentTemplate() {
        return html`
            <section class="${this.cerrado ? 'cerrado' : ''}" style="top: ${this.top}px">
                <slot></slot>
            </section>
        `;
    }
}
customElements.define('my-overlay-with-position', MyOverlayWithPosition);