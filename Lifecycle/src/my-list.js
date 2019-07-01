import { LitElement, html } from 'lit-element';

export class MyList extends LitElement {

    static get properties() {
        return {
            etiquetas: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.etiquetas = [];
        this.addEventListener('click', (e) => this._crearEtiquetaAleatoria())
    }

    render() {
        return html`
            <style>
                p {
                    display: inline-block;
                    margin-right: 12px;
                    padding: 4px;
                    font-size: 0.7em;
                    font-weight: bold;
                    color: #fff;
                    background-color: #c66;
                    border-radius: 3px;
                }
            </style>

            <div>
                ${this.etiquetas.map(item => html`<p>${item}</p>`)}
            </div>
        `;
    }

    _crearEtiquetaAleatoria() {
        console.log('_crearEtiquetaAleatoria')
        let valor = Math.floor(Math.random() * 1000);
        this.etiquetas.push(valor);
        this.requestUpdate();
    }
}
customElements.define('my-list', MyList);