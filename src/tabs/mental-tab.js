import { LitElement, html } from "lit";
import { BaseComponent } from "../baseComponent";
import { BirthdayStore } from "../store";

export class MentalTab extends BaseComponent {
  constructor() {
    super();
  }
  update_color(e) {
    BirthdayStore.mentalColor = e.detail;
  }

  render() {
    return html`
      <div class="tab">
        <h6>How was your mental and emotional state last year?</h6>
        <p>
          <color-mood @color_changed="${this.update_color}"></color-mood>
        </p>
      </div>
    `;
  }
}

customElements.define("mental-tab", MentalTab);
