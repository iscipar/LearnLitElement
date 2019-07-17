import { LitElement, html } from 'lit-element';
import 'polypar-flag-icon/polypar-flag-icon';

class WebpackApp extends LitElement {
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

customElements.define('webpack-app', WebpackApp);
