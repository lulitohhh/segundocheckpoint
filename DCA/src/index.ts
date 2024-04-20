import './components/export';
import { datafacts } from './services/datafacts';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const facts = await datafacts();
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;
			const css = this.ownerDocument.createElement('style');
			css.textContent = `
        card {
            background-color: #FDD9D1;
            padding: 2px;
        `;

			this.shadowRoot?.appendChild(css);
		}
	}
}

customElements.define('app-container', AppContainer);
