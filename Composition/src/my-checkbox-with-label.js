import { LitElement, html, css } from 'lit-element';
import './my-checkbox';

export class MyCheckboxWithLabel extends LitElement {

    static get properties() {
        return {
            checked: {
                type: Boolean
            },
            label: {
                type: String
            }
        };
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
            }

            div {
                display: flex;
                align-items: center;
            }

            my-checkbox {
                margin-right: 6px;
            }
        `; 
    }

    render() {
        return html`
            <div>
                <my-checkbox ?checked="${this.checked}" @click="${this._clickCheckbox}"></my-checkbox> 
                <span @click="${this._clickLabel}">${this.label}</span>
            </div>
        `;
    }

    _clickCheckbox() {
        this.checked = ! this.checked;
        console.log('Se ha pulsado el cuadrado');
    }

    _clickLabel() {
        this.checked = ! this.checked;
        console.log('Se ha pulsado la etiqueta');
    }
}
customElements.define('my-checkbox-with-label', MyCheckboxWithLabel);