import { LitElement, html } from 'lit-element';

export class MyTaskList extends LitElement {

    static get properties() {
        return {
            tareas: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.tareas = [
            {
                nombre: 'Primera tarea',
                completada: false
            },
            {
                nombre: 'Segunda tarea',
                completada: false
            },
            {
                nombre: 'Tercera tarea',
                completada: true
            }
        ]
    }

    render() {
        return html`
            ${this.tareas.map(item => html`<my-task-item @my-checkbox-clicked="${this._checkboxClicked}" .tarea=${item}></my-task-item>`)}
        `;
    }

    _checkboxClicked() {
        console.log('my-task-list _checkboxClicked')
    }
}
customElements.define('my-task-list', MyTaskList);