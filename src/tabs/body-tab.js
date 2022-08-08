import { LitElement, html } from "lit";
import { BaseComponent } from "../baseComponent";
import "../utils/color-mood";
import { BirthdayStore } from "../store";
export class BodyTab extends BaseComponent {
  constructor() {
    super();
  }
  update_color(e) {
    BirthdayStore.bodyColor = e.detail;
  }

  render() {
    return html`
      <div class="tab">
        <h6>
          How was last year in terms of you body? (Exercise, Nutrition, etc.)
        </h6>
        <p>
          <!-- <input placeholder="Name..." oninput="this.className = ''" name="fname"> -->
        </p>
        <color-mood @color_changed="${this.update_color}"></color-mood>
      </div>
    `;
  }
}

customElements.define("body-tab", BodyTab);
