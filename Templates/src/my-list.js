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

            ${this.etiquetas.map(item => html`<p>${item}</p>`)}
        `;
    }
}
customElements.define('my-list', MyList);