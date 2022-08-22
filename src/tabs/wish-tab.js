import { LitElement, html } from "lit";
import { BaseComponent } from "../baseComponent";
import { BirthdayStore } from "../store";

export class WishTab extends BaseComponent {
  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
  }

  render() {
    return html`
      <div class="tab">
        <h5>Your wish for new age!</h5>
        <form>
          <div class="form-row">
            <div class="form-group col-md-12">
              <div class="input-box">
                <input
                  value=""
                  autofocus="autofocus"
                  id="txtwish"
                  maxlength="34"
                  @change="${this.wishChanged}"
                />
                <span class="unit">I wish, </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    `;
  }
  wishChanged(e) {
    BirthdayStore.wish = e.target.value;
  }
}

customElements.define("wish-tab", WishTab);
