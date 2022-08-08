import { LitElement, html } from "lit";
import { BaseComponent } from "../baseComponent";
import { BirthdayStore } from "../store";

export class SocialTab extends BaseComponent {
  constructor() {
    super();
  }
  update_color(e) {
    BirthdayStore.socialColor = e.detail;
  }

  render() {
    return html`
      <div class="tab">
        <h6>
          How were your social relationships in general? (family, friends,
          community, colleagues)
        </h6>
        <p>
          <color-mood @color_changed="${this.update_color}"></color-mood>
        </p>
      </div>
    `;
  }
}

customElements.define("social-tab", SocialTab);
