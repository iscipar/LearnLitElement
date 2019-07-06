import { LitElement, html } from 'lit-element';
import './my-feedback';

export class MyApp extends LitElement {

    constructor() {
        super();
        this.addEventListener('my-feedback-message', (e) => {
            this.shadowRoot.getElementById('feedback').mostrar(e.detail);
        })
    }

    render() {
        return html`
            <slot></slot>
            <my-feedback id="feedback"></my-feedback>
        `;
    }
}
customElements.define('my-app', MyApp);