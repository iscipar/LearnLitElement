import { LitElement, html } from 'lit-element';

export class MyInput extends LitElement {

    static get properties() {
        return {
            placeholder: {
                type: String
            },
            disabled: {
                type: Boolean
            },
            value: {
                type: String
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
                >
            </div>
        `;
    }

    _comprobarEnter(e) {
        let keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
            console.log('Has pulsado la tecla Enter');
        }
    }
}
customElements.define('my-input', MyInput);