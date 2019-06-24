import { LitElement, html } from 'lit-element';

export class HelloWorld extends LitElement {

    static get properties() {
        return {
            nombre: {
                type: String
            }
        };
    }

    render() {
        return html`
            <p>Hola <b>${this.nombre}</b></p>
        `;
    }
}
customElements.define('hello-world', HelloWorld);