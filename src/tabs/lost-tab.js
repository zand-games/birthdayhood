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
      <div>
        <h5 style="text-align: left">
          Someone from your connections has died?
          <input
            id="lost_status"
            type="checkbox"
            data-toggle="switchbutton"
            checked
            data-onlabel="No"
            data-offlabel="Yes"
            @change=${this.changed}
          />
        </h5>

        <div ?hidden="${!this.visiblity}">
          <br />

          <h5>How much was it painful?</h5>
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
