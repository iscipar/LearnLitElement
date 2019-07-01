import { LitElement, html } from 'lit-element';

export class MyAccessors extends LitElement {

    static get properties() {
        return {
            importe: {
                type: Number
            }
        };
    }

    get importe() {
        return this._importe + " euros";
    }

    set importe(valor) {
        const valorAnterior = this._importe;
        this._importe = Math.floor(valor);
        this.requestUpdate('importe', valorAnterior);
    }

    render() {
        return html`
            <div>
                <p>Importe: ${this.importe}</p>
                <button @click="${() => {this.importe = Math.random() * 10;}}">
                    Calcular
                </button>
            </div>
        `;
    }
}
customElements.define('my-accessors', MyAccessors);