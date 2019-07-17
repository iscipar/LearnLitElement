import { LitElement, html } from 'lit-element';
import 'polypar-flag-icon/polypar-flag-icon';

class RollupApp extends LitElement {
	static get properties() {
		return {
			heading: { type: String },
		};
	}

	render() {
		return html`
			<h1>${this.heading}</h1>
			<polypar-flag-icon></polypar-flag-icon>
		`;
	}
}

customElements.define('rollup-app', RollupApp);
