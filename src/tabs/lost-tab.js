import { LitElement, html } from "lit";
import { BaseComponent } from "../baseComponent";
import "../utils/gray-mood";
import { BirthdayStore } from "../store";
export class lostTab extends BaseComponent {
  constructor() {
    super();
  }
  update_color(e) {
    BirthdayStore.lostColor = e.detail;
  }
  render() {
    return html`
      <div class="tab">
        <h6>Someone from your family, friends or relatives has died 1?</h6>
        <p>
          <gray-mood @color_changed="${this.update_color}"></gray-mood>
          <!-- <input
            type="checkbox"
            data-toggle="switchbutton"
            checked
            data-onlabel="Ready"
            data-offlabel="Not Ready"
            data-onstyle="success"
            data-offstyle="danger"
          /> -->
        </p>
      </div>
    `;
  }
}

customElements.define("lost-tab", lostTab);
