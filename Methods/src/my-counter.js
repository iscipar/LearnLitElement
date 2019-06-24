import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {

    static get properties() {
        return {
            contador: {
                type: Number
            }
        };
    }

    constructor() {
        super();
        this.contador = 0;
    }

    render() {
        return html`
            <style>
                div {
                    padding: 10px;
                }
            </style>

            <div>Valor del contador: ${this.contador}</div> 
            <div>
                <button @click="${this._incrementar}">Incrementar</button>
                <button @click="${this._decrementar}">Decrementar</button>
            </div>
            <my-feedback id="feedback"></my-feedback>
        `;
    }

    get feedback() {
        return this.shadowRoot.getElementById('feedback');
    }

    _incrementar() {
        this.contador++;
        if (this.contador == 10) {
            this.feedback.mostrar('El valor del contador ha llegado a 10');
        }
    }

    _decrementar() {
        this.contador--;
        if (this.contador == 0) {
            this.feedback.mostrar('El valor del contador es 0');
        }
    }
}
customElements.define('my-counter', MyCounter);