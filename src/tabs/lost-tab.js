import { LitElement, html } from "lit";
import { BaseComponent } from "../baseComponent";
import "../utils/gray-mood";
import { BirthdayStore } from "../store";
export class lostTab extends BaseComponent {
  constructor() {
    super();
    this.visiblity = false;
  }
  update_color(e) {
    BirthdayStore.lostColor = e.detail;
  }
  static get properties() {
    return {
      visiblity: { type: Boolean },
    };
  }

  render() {
    return html`
      <div class="tab">
        <h6>Someone from connections has died?</h6>

        <input
          id="lost_status"
          type="checkbox"
          data-toggle="switchbutton"
          checked
          data-onlabel="No"
          data-offlabel="Yes"
          data-onstyle="success"
          data-offstyle="danger"
          @change=${this.changed}
        />
        <div ?hidden="${!this.visiblity}">
          <h6>How much was it painful?</h6>
          <p>
            <gray-mood @color_changed="${this.update_color}"></gray-mood>
          </p>
        </div>
      </div>
    `;
  }
  changed(e) {
    BirthdayStore.lost = !document.getElementById("lost_status").checked;
    this.visiblity = BirthdayStore.lost;
  }
}

customElements.define("lost-tab", lostTab);
