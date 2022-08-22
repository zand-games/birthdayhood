import { BirthdayStore } from "./store";
import "./utils/color-mood";

import { LitElement, html } from "lit";
import { BaseComponent } from "./baseComponent.js";
import Store from "./store.js";
import { calculate_result_data } from "./utils/helper";
export class PersonSimple extends BaseComponent {
  constructor() {
    super();
    this.store = new Store();
  }
  static get properties() {
    return {
      currentTab: { type: Number },
      min_horizontal_move: { type: Number },
      max_vertical_move: { type: Number },
      within_ms: { type: Number },
      start_xPos: { type: Number },
      start_yPos: { type: Number },
      start_time: { type: Number },
    };
  }
  render() {
    return html`
      <div id="" class="container mt-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <form id="">
              <h1 id="" style="color:#504a54;border-radius: 15px;padding:10px">
                How are you feeling
              </h1>
              <div class="item-center"></div>
              <color-mood
                class="ColorPicker"
                @color_changed="${this.update_color}"
              ></color-mood>
              <br />
              <input
                id="simple_person_container"
                @change="${this.update_contact}"
              />
              <label id="lblcolor"></label>
              <br />
              <button @click="${this.save_color}">Find match</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
  update_contact(e) {
    this.contact = e.target.value;
  }
  save_color(e) {
    if (!this.contact) {
      alert("Please enter your contact!");
      return false;
    }
    if (!this.color) {
      alert("Please select your color!");
      return false;
    }

    for (var i = 0; i < localStorage.length; i++) {
      console.log(
        localStorage.key(i),
        localStorage.getItem(localStorage.key(i))
      );
    }

    var item = {
      contact: this.contact,
      color: this.color,
      time: new Date().toLocaleString(),
    };

    // Put the object into storage
    localStorage.setItem(this.uuidv4(), JSON.stringify(item));

    alert("Data Stored! Thank you");
    var item = document.getElementById("simple_person_container");
    item.style.background = "white";
    item.value = "";

    this.contact = "";
    this.color = "";
    return false;
  }

  uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  contact = "";
  color = "";
  firstUpdated() {
    super.firstUpdated();
  }
  update_color(e) {
    console.log(e.detail);
    var item = document.getElementById("simple_person_container");
    item.style.background = "rgb(" + e.detail + ")";
    this.color = e.detail;
    document.getElementById("lblcolor").innerHTML = e.detail;
  }
}

customElements.define("person-simple", PersonSimple);
