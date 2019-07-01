import { LitElement, html } from 'lit-element';

export class MyUpdate extends LitElement {

    static get properties() {
        return {
            valor: {
                type: Number,
                hasChanged(valorNuevo, valorAnterior) {
                    console.log('hasChanged', valorNuevo, valorAnterior);
                    if (valorNuevo > valorAnterior) {
                        return true;
                    }
                    return false;
                }
            }
        };
    }

    render() {
        return html`
            <my-input id="myinput" helptext="Escribe un valor" .value="${this.valor}" label="Valor"></my-input>
            <p>
                <button @click="${this._cambiarValor}">Cambiar</button>
            </p>
        `;
    }

    firstUpdated() {
        this.myinput = this.shadowRoot.getElementById('myinput');
    }

    _cambiarValor() {
        this.valor = Math.random();
        this.updateComplete.then(() => {
          console.log('El nuevo valor es', this.myinput.value);
        });
    }
}
customElements.define('my-update', MyUpdate);