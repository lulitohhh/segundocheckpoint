import { datafacts } from '../../services/datafacts';
import { dataimage } from '../../services/dataimage';
import styles from './card.css';
export enum attribute {
	'image' = 'image',
	'text' = 'text',
}

class gatocard extends HTMLElement {
	image?: string;
	text?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<attribute, null> = {
			image: null,
			text: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const gatocard = this.ownerDocument.createElement('div');
			this.shadowRoot?.appendChild(gatocard);
		}

		const css = this.ownerDocument.createElement('style');
		css.textContent = `
    card {
      background-color: #FDD9D1;
      padding: 2px;
    }`;

		this.shadowRoot?.appendChild(css);

		const cardimage = this.ownerDocument.createElement(this.image);
		cardimage.className = 'image';
	}
}

export default gatocard;
customElements.define('gato-card', gatocard);
