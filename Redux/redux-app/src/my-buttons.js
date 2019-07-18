import { LitElement, html } from 'lit-element';
import { store } from './redux/store';
import { incrementar, decrementar } from './redux/actions/actions';

export class MyButtons extends LitElement {

    render() {
        return html`
            <button @click="${this._incrementar}">Incrementar</button>
            <button @click="${this._decrementar}">Decrementar</button>
        `;
    }

    _incrementar() {
        store.dispatch(incrementar());
    }

    _decrementar() {
        store.dispatch(decrementar());
    }
}
customElements.define('my-buttons', MyButtons);