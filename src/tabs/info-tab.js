import { LitElement, html } from "lit";
import { BaseComponent } from "../baseComponent";
import { BirthdayStore } from "../store";

export class InfoTab extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="tab">
        <!-- <h6>What's your name?</h6> -->
        <!-- <p>
          <input
            placeholder="Name..."
            oninput="this.className = ''"
            name="fname"
            @change="${this.nameChanged}"
          />
        </p> -->
        <h6>Your birthday</h6>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                placeholder="Year"
                type="number"
                class="form-control"
                id="year"
                @change="${this.yearChanged}"
              />
            </div>
            <div class="form-group col-md-4">
              <select
                id="inputState"
                class="form-control"
                @change="${this.monthChanged}"
              >
                <option value="0" selected>Month...</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <input
                placeholder="Day"
                type="number"
                class="form-control"
                id="day"
                @change="${this.dayChanged}"
              />
            </div>
          </div>
        </form>
      </div>
    `;
  }
  nameChanged(e) {
    BirthdayStore.name = e.target.value;
  }
  yearChanged(e) {
    BirthdayStore.year = e.target.value;
  }
  monthChanged(e) {
    BirthdayStore.month = e.target.value;
  }
  dayChanged(e) {
    BirthdayStore.day = e.target.value;
  }
}

customElements.define("info-tab", InfoTab);
