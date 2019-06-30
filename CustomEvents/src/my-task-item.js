import { LitElement, html, css } from 'lit-element';

export class MyTaskItem extends LitElement {

    static get properties() {
        return {
            tarea: {
                type: Object
            }
        };
    }

    static get styles() {
        return css`
            p {
                display: flex;
                align-items: center;
            }

            my-checkbox {
                margin-right: 10px;
            }

            .completed {
                text-decoration: line-through;
                color: #888;
            }
        `;
    }

    render() {
        return html`
            <p class="${this.tarea.completada ? 'completed' : ''}">
                <my-checkbox ?checked="${this.tarea.completada}" @my-checkbox-clicked="${this._checkboxClicked}"></my-checkbox> ${this.tarea.nombre}
            </p>
        `;
    }

    _checkboxClicked(e) {
        console.log('my-task-item _checkboxClicked', e)
        this.tarea = {
           ...this.tarea,
            completada: e.detail
        };
        // this.tarea.completada = e.detail;
        // this.requestUpdate();
    }
}
customElements.define('my-task-item', MyTaskItem);