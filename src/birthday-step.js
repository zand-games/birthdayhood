import { LitElement, html } from "lit";
import { BaseComponent } from "./baseComponent";

export class BirthdayStep extends BaseComponent {
  static get properties() {
    return {
      icon: { type: String },
    };
  }
  constructor() {
    super();
  }

  render() {
    return html`
      <span class="step"><i class="stepicons fa ${this.icon}"></i></span>
    `;
  }
}

customElements.define("birthday-step", BirthdayStep);
