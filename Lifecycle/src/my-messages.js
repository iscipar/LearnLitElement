import { LitElement, html } from 'lit-element';

export class MyMessages extends LitElement {

    static get properties() {
        return {
            mensajeActual: {
                type: String
            },
            mensajes: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.mensajeActual = '';
        this.mensajes = [];
        this.indiceActual = 0;
    }

    render() {
        return html`
            <style>
                div {
                    padding: 15px 30px;
                    background-color: #ccc;
                    text-align: center;
                    font-size: 0.8em;
                }
            </style>

            <div>
                ${this.mensajeActual}
            </div>
        `;
    }

    _cambiarMensajes() {
        console.log('_cambiarMensajes', this.mensajes[this.indiceActual]);
        this.mensajeActual = this.mensajes[this.indiceActual];
        this.indiceActual = (this.indiceActual + 1) % this.mensajes.length;
        this.timer = setTimeout(() => this._cambiarMensajes(), 5000);
    }

    firstUpdated() {
        this._cambiarMensajes();
    }
    
    updated(changedProperties) {
        changedProperties.forEach((valorAnterior, nombrePropiedad) => {
            console.log('Propiedad:', nombrePropiedad, '| Valor actual:', this[nombrePropiedad], '| Valor anterior:', valorAnterior);
        }); 
        if (changedProperties.has('mensajes')) {
            console.log('Ha cambiado el array de mensajes:', this.mensajes);
        }
    }
}
customElements.define('my-messages', MyMessages);