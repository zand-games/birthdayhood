import { BirthdayStore } from "./store";
import { LitElement, html, css } from "lit";
import { BaseComponent } from "./baseComponent.js";

export class PersonFull extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    return html` <div>This is single person checkin</div> `;
  }

  static get styles() {
    return css``;
  }
}

customElements.define("person-full", PersonFull);
