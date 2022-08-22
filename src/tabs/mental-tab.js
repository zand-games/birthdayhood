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
      <div class="tab item-center">
        <h5>How was your mental situation last year?</h5>
        <p>
          <color-mood
            default="rgb(${BirthdayStore.mentalColor})"
            class="ColorPicker"
            @color_changed="${this.update_color}"
          ></color-mood>
        </p>
      </div>
    `;
  }
}

customElements.define("mental-tab", MentalTab);
