import { LitElement, html } from 'lit-element';

export class MyFeedback extends LitElement {

    static get properties() {
        return {
            mensaje: {
                type: String
            },
            abierto: {
                type: Boolean
            }
        };
    }

    render() {
        return html`
            <style>
                div {
                    position: fixed;
                    bottom: 0px;
                    left: 0px;
                    overflow: hidden;
                    height: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #e74c3c;
                    color: white;
                    width: 100%;
                    transition: all 0.7s ease-in;
                    font-family: 'Trebuchet MS', sans-serif;
                    font-size: 1px;
                }

                .abierto {
                    height: 100px;
                    font-size: 2em;
                }
            </style>

            <div class="${this.abierto ? 'abierto' : ''}">
                ${this.mensaje}
            </div>
        `;
    }

    mostrar(mensaje) {
        this.mensaje = mensaje;
        this.abierto = true;
        setTimeout(() => this.abierto = false, 3000);
    }
}
customElements.define('my-feedback', MyFeedback);