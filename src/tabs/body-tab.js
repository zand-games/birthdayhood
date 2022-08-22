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
      <div class="tab item-center">
        <h5>How was your body last year?</h5>
        <p>
          <color-mood
            class="ColorPicker"
            @color_changed="${this.update_color}"
          ></color-mood>
        </p>
      </div>
    `;
  }
}

customElements.define("body-tab", BodyTab);
