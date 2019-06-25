import { LitElement, html } from 'lit-element';

export class MyDate extends LitElement {

    static get properties() {
        return {
            timestamp: {
                type: String
            }
        };
    }

    render() {
        return html`
            <div>${this.timestamp}</div>
            <div>${this._convert(this.timestamp)}</div>
        `;
    }

    _convert(timestamp) {
        let date = new Date(parseInt(timestamp));
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }
}
customElements.define('my-date', MyDate);