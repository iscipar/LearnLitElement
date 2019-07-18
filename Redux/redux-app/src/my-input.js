import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from './redux/store';
import { cambiarNombre } from './redux/actions/actions';

export class MyInput extends connect(store)(LitElement) {

    static get properties() {
        return {
            nombre: {
                type: String
            }
        };
    }

    stateChanged(state) {
		console.log('stateChanged my-input', state);
		this.nombre = state.nombre;
	}

    render() {
        return html`
            <div>
                <br>
                <input .value="${this.nombre}" @input="${this._cambiarNombre}">
                <button @click="${this._guardar}">Guardar</button>
            </div>
        `;
    }

    _cambiarNombre(e) {
        this.nombre = e.target.value;
    }
    
    _guardar() {
        store.dispatch(cambiarNombre(this.nombre));
    }
}
customElements.define('my-input', MyInput);