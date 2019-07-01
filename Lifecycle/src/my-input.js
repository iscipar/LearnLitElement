import { LitElement, html } from 'lit-element';

export class MyInput extends LitElement {

    static get properties() {
        return {
            placeholder: {
                type: String,
                attribute: 'helptext'
            },
            disabled: {
                type: Boolean
            },
            value: {
                reflect: true,
                converter: {
                    toAttribute(value) {
                        return value.toString().toLowerCase();
                    },
                    fromAttribute(value) {
                        return value.toString().toUpperCase();
                    }
                }
            },
            label: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.placeholder = '';
        this.disabled = false;
        this.value = '';
    }

    render() {
        return html`
            <style>
                :host {
                    display: block;
                    margin-bottom: 12px;
                }

                label {
                    display: block;
                    color: #888;
                    margin-bottom: 30px;
                    color: #59e;
                }

                input {
                    box-sizing: border-box;
                    border-radius: 5px;
                    border: 1px solid #888;
                    font-size: 1em;
                    padding: 5px;
                    width: 100%;
                }

                input:focus {
                    outline: none;
                    border-color: #6af;
                }

                input::placeholder {
                    color: #ccc;
                }

                input:disabled {
                    background-color: #f5f5f5;
                    border-color: #eee;
                }
            </style>

            <div>
                ${this.label
                    ? html`<label for="caja">${this.label}</label>` 
                    : ''
                }
                <input 
                    type="text" 
                    id="caja"
                    placeholder="${this.placeholder}" 
                    ?disabled="${this.disabled}"
                    @keypress="${this._comprobarEnter}"
                    .value="${this.value}"
                    @input=${this._cambiarValor}
                >
            </div>
        `;
    }

    attributeChangedCallback(nombreAtributo, valorAnterior, valorNuevo) {
        super.attributeChangedCallback(nombreAtributo, valorAnterior, valorNuevo);
        console.log('attributeChangedCallback', nombreAtributo, valorAnterior, valorNuevo);
    }

    _comprobarEnter(e) {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
            console.log('Has pulsado la tecla Enter');
        }
    }

    _cambiarValor(e) {
        this.value = e.target.value;
    }
}
customElements.define('my-input', MyInput);