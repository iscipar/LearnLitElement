import { LitElement, html } from 'lit-element';
import { MyFeedbackMixin } from './my-feedback-mixin';
import { MyFooterTemplateMixin } from './my-footer-template-mixin';

export class MyOverlay extends MyFooterTemplateMixin(MyFeedbackMixin(LitElement)) {

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
        this.cerrarBind = this._cerrar.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('click', this.cerrarBind);
    }
    
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this.cerrarBind);
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
            ${this.footerTemplate}
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
    
    _toggle(e) {
        e.stopPropagation();
        this.cerrado = ! this.cerrado;
        this.enviarMensaje('_toggle');
        console.log('El valor de cerrado es', this.cerrado);
    }

    _cerrar() {
        this.cerrado = true;
    }
}
customElements.define('my-overlay', MyOverlay);