import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from './redux/store';
import './my-buttons';
import './my-input';

class ReduxApp extends connect(store)(LitElement) {
	static get properties() {
		return {
			nombre: { type: String },
			contador: { type: Number }
		};
	}

	stateChanged(state) {
		console.log('stateChanged redux-app', state);
		this.nombre = state.nombre;
		this.contador = state.contador;
	}

	render() {
		return html`
			<h1>${this.nombre}</h1>
			<p>Contador: ${this.contador}</p>
			<my-buttons></my-buttons>
			<my-input></my-input>
		`;
	}
}

customElements.define('redux-app', ReduxApp);
