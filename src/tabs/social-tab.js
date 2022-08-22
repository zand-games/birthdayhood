import { html } from "lit";
import { BaseComponent } from "../baseComponent";
import { BirthdayStore } from "../store";
import "./lost-tab";

export class SocialTab extends BaseComponent {
  constructor() {
    super();
  }
  update_color(e) {
    BirthdayStore.socialColor = e.detail;
  }

  render() {
    return html`
      <div class="tab item-center">
        <lost-tab></lost-tab>
        <br />
        <h5>How was your social relations last year?</h5>
        <h6>(family, friends, community, colleagues)</h6>
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

customElements.define("social-tab", SocialTab);
