import { BirthdayStore } from "./store";
import "./birthday-step";
import ".//utils/helper";
import "./tabs/info-tab";
import "./tabs/shape-tab";
import "./tabs/job-tab";
import "./tabs/social-tab";
import "./tabs/body-tab";
import "./tabs/mental-tab";
import "./tabs/wish-tab";
import "./app-footer";
import "./birthday-result";
import { LitElement, html } from "lit";
import { BaseComponent } from "./baseComponent.js";
import Store from "./store.js";
import { calculate_result_data } from "./utils/helper";
export class BirthdayApp extends BaseComponent {
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
      <div id="container" class="container mt-5">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <form id="regForm">
              <h1 id="register">Color Mood</h1>
              <div class="all-steps" id="all-steps">
                <!-- Steps -->
                <!-- <birthday-step icon="fa-brain"></birthday-step>
                <birthday-step icon="fa-solid fa-heart"></birthday-step>
                <birthday-step icon="fa-solid fa-shapes"></birthday-step>
                <birthday-step
                  icon="fa-solid fa-child-reaching"
                ></birthday-step> -->
              </div>
              <!-- Navigation  -->
              <div style="overflow:auto;margin-bottom:20px" id="nextprevious">
                <div style="float:left;">
                  <button type="button" id="prevBtn" @click="${this.prev}">
                    <i class="fa fa-angle-double-left"></i>
                  </button>
                </div>
                <div style="float:right;">
                  <button type="button" id="nextBtn" @click="${this.next}">
                    <i class="fa fa-angle-double-right"></i>
                  </button>
                  <!-- <button type="button" id="btnlog" @click="${this.log}">
                    <i class="fa fa-info"></i>
                  </button> -->
                </div>
              </div>
              <!-- Tabs -->
              <info-tab></info-tab>
              <mental-tab></mental-tab>
              <shape-tab></shape-tab>
              <body-tab></body-tab>
              <div class="thanks-message text-center" id="text-message"></div>
            </form>
          </div>
        </div>
      </div>
      ${this.showTab(this.currentTab)}
    `;
  }

  log() {
    document.getElementById("text-message").style.display = "block";
    console.clear();
    this.show_result_component();
  }

  firstUpdated() {
    super.firstUpdated();
    debugger;
    this.currentTab = 0;

    window.addEventListener("DOMContentLoaded", (e) => {
      debugger;
    });
  }

  touch_start(event) {
    this.min_horizontal_move = 30;
    this.max_vertical_move = 30;
    this.within_ms = 1000;

    this.start_xPos = event.touches[0].pageX;
    this.start_yPos = event.touches[0].pageY;
    this.start_time = new Date();
  }

  touch_end(event) {
    var end_xPos = event.changedTouches[0].pageX;
    var end_yPos = event.changedTouches[0].pageY;
    var end_time = new Date();
    let move_x = end_xPos - this.start_xPos;
    let move_y = end_yPos - this.start_yPos;
    let elapsed_time = end_time - this.start_time;

    if (
      Math.abs(move_x) > this.min_horizontal_move &&
      Math.abs(move_y) < this.max_vertical_move &&
      elapsed_time < this.within_ms
    ) {
      if (move_x < 0) {
        //alert("left");
        // document.getElementById("nextBtn").click();
        // console.log("left");
      } else {
        //alert("right");
        // document.getElementById("prevBtn").click();
        //console.log("right");
      }
    }
  }
  next(e) {
    this.nextPrev(1);
  }
  prev() {
    this.nextPrev(-1);
  }
  showTab(n) {
    var x = document.getElementsByClassName("tab");
    if (!x[n]) {
      return;
    }
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

      //calculate_result_data();
      this.show_result_component();
      document.getElementById("text-message").style.display = "block";
    }
    this.showTab(this.currentTab);
  }

  validateForm() {
    return true;
    document.getElementsByClassName("step")[this.currentTab].className +=
      " finish";
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

  show_result_component() {
    calculate_result_data();
    var container = document.getElementById("text-message");
    var result_component = document.createElement("birthday-result");
    container.replaceChildren(result_component);
  }
}

customElements.define("birthday-app", BirthdayApp);
