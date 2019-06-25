import { LitElement, html } from 'lit-element';

export class MyOverlay extends LitElement {

    static get properties() {
        return {
            cerrado: {
                type: Boolean
            }
        };
    }

    constructor() {
        super();
        this.cerrado = true;
    }

    render() {
        return html`
            <style>
                :host {
                    position: relative;
                }

                .trigger {
                    cursor: pointer;
                }

                section {
                    border: 1px solid #ddd;
                    box-shadow: 3px 3px 8px #eee;
                    padding: 15px;
                    width: 300px;
                    position: absolute;
                    background-color: #f5f5f5;
                }

                .cerrado {
                    display: none;
                }
            </style>

            ${this.triggerTemplate}
            ${this.contentTemplate}
        `;
    }

    get triggerTemplate() {
        return html`
            <div class="trigger" @click="${this._toggle}">
                <slot name="trigger"></slot>  
            </div>
        `;
    }
    
    get contentTemplate() {
        return html`
            <section class="${this.cerrado ? 'cerrado' : ''}">
                <slot></slot>
            </section>
        `;
    }
    
    _toggle() {
        this.cerrado = ! this.cerrado;
        console.log('El valor de cerrado es', this.cerrado);
    }
}
customElements.define('my-overlay', MyOverlay);