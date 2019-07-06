import { html } from 'lit-element';

export const MyFooterTemplateMixin = (Superclass) => {
    return class extends Superclass {
        get footerTemplate() {
            return html`
                <section class="${this.cerrado ? 'cerrado' : ''}" style="top: ${this.top * 4}px">
                    <p>Contenido adicional</p>
                </section>
            `;
        }
    }
}