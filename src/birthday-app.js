import { BirthdayStore } from "./store";
import "./birthday-step";

import "./tabs/info-tab";
import "./tabs/shape-tab";
import "./tabs/job-tab";
import "./tabs/lost-tab";
import "./tabs/social-tab";
import "./tabs/body-tab";
import "./tabs/mental-tab";
import "./tabs/finance-tab";

import { LitElement, html } from "lit";
import { BaseComponent } from "./baseComponent.js";
import Store from "./store.js";

export class BirthdayApp extends BaseComponent {
  constructor() {
    super();
    this.store = new Store();
  }
  static get properties() {
    return {
      currentTab: { type: Number },
    };
  }
  render() {
    return html`
      <div class="container mt-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <form id="regForm">
              <h1 id="register">Birthdayhood</h1>
              <div class="all-steps" id="all-steps">
                <birthday-step icon="fa-user"></birthday-step>
                <birthday-step icon="fa-solid fa-shapes"></birthday-step>
                <birthday-step
                  icon="fa-solid fa-child-reaching"
                ></birthday-step>
                <birthday-step icon="fa-solid fa-brain"></birthday-step>
                <birthday-step icon="fa-regular fa-face-meh"></birthday-step>
                <birthday-step icon="fa-solid fa-people-group"></birthday-step>
                <birthday-step
                  icon="fa-solid fa-person-digging"
                ></birthday-step>
              </div>
              <info-tab></info-tab>
              <body-tab></body-tab>
              <shape-tab></shape-tab>
              <mental-tab></mental-tab>
              <lost-tab></lost-tab>
              <social-tab></social-tab>
              <job-tab></job-tab>
              <div class="thanks-message text-center" id="text-message">
                <img
                  src="https://i.imgur.com/O18mJ1K.png"
                  width="100"
                  class="mb-4"
                />
                <h3>Thankyou for your feedback!</h3>
                <span
                  >Thanks for your valuable information. It helps us to improve
                  our services!</span
                >
              </div>
              <div style="overflow:auto;" id="nextprevious">
                <div style="float:right;">
                  <button type="button" id="prevBtn" @click="${this.prev}">
                    <i class="fa fa-angle-double-left"></i>
                  </button>
                  <button type="button" id="nextBtn" @click="${this.next}">
                    <i class="fa fa-angle-double-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.currentTab = 0;
    window.addEventListener("DOMContentLoaded", (e) =>
      this.showTab(this.currentTab)
    );
  }
  next(e) {
    console.log("next");
    this.nextPrev(1);
  }
  prev() {
    console.log("prev");
    this.nextPrev(-1);
  }
  showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == x.length - 1) {
      document.getElementById("nextBtn").innerHTML =
        '<i class="fa fa-angle-double-right"></i>';
    } else {
      document.getElementById("nextBtn").innerHTML =
        '<i class="fa fa-angle-double-right"></i>';
    }
    this.fixStepIndicator(n);
  }
  nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !this.validateForm()) return false;
    x[this.currentTab].style.display = "none";
    this.currentTab = this.currentTab + n;
    if (this.currentTab >= x.length) {
      document.getElementById("nextprevious").style.display = "none";
      document.getElementById("all-steps").style.display = "none";
      document.getElementById("register").style.display = "none";
      document.getElementById("text-message").style.display = "block";

      console.log(BirthdayStore.name);
      console.log(BirthdayStore.year);
      console.log(BirthdayStore.month);
      console.log(BirthdayStore.day);
      console.log(BirthdayStore.mentalColor);
      console.log(BirthdayStore.bodyColor);
      console.log(BirthdayStore.lost);
      console.log(BirthdayStore.socialColor);
    }
    this.showTab(this.currentTab);
  }

  validateForm() {
    document.getElementsByClassName("step")[this.currentTab].className +=
      " finish";
    return true;

    var x,
      y,
      i,
      valid = true;
    x = document.getElementsByClassName("tab");
    y = x[this.currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "") {
        y[i].className += " invalid";
        valid = false;
      }
    }
    if (valid) {
      document.getElementsByClassName("step")[this.currentTab].className +=
        " finish";
    }
    return valid;
  }

  fixStepIndicator(n) {
    var i,
      x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
      x[i].className = x[i].className.replace(" finish", "");
    }
    for (var j = 0; j < n; j++) {
      x[j].className += " finish";
    }

    x[n].className += " active";
  }
}

customElements.define("birthday-app", BirthdayApp);