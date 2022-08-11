import { LitElement, html } from "lit";
import { BaseComponent } from "../baseComponent";
import { BirthdayStore } from "../store";

export class InfoTab extends BaseComponent {
  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
    var svgs = document.querySelectorAll(".svg-emoji");
    svgs.forEach((item) => {
      item.className.baseVal = "head"; // for all svgs change the background to default
      item.addEventListener("mousedown", (e) => this.svgClicked(e));
    });
  }

  svgClicked(e) {
    var getSvgFunc = function (item) {
      if (item.tagName == "svg") {
        return item.id;
      } else {
        return getSvgFunc(item.parentElement);
      }
    };
    var result = getSvgFunc(e.target);

    // for selected svg change the backgroud
    if (result) {
      var svgss = document.querySelectorAll("svg");
      svgss.forEach((item) => {
        item.className.baseVal = "head";
      });
      document.getElementById(result).className.baseVal = "headactive";
    }

    BirthdayStore.emoji = result;
  }

  render() {
    return html`
      <div class="tab">
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
        <svg
          version="1.1"
          id="happy"
          width="85"
          height="85"
          viewBox="0 0 485 485"
          style="enable-background:new 0 0 485 485;"
          xmlns="http://www.w3.org/2000/svg"
          class="svg-emoji"
        >
          <g>
            <path
              d="M318.514,231.486c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S299.215,231.486,318.514,231.486z"
            />
            <path
              d="M166.486,231.486c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S147.188,231.486,166.486,231.486z"
            />
            <path
              d="M242.5,355c-46.911,0-89.35-29.619-105.604-73.703l-28.148,10.378C129.329,347.496,183.08,385,242.5,385 s113.171-37.504,133.752-93.325l-28.148-10.378C331.85,325.381,289.411,355,242.5,355z"
            />
          </g>
        </svg>
        <svg
          version="1.1"
          id="sad"
          width="85"
          height="85"
          viewBox="0 0 485 485"
          style="enable-background:new 0 0 485 485;"
          xmlns="http://www.w3.org/2000/svg"
          class="svg-emoji"
        >
          <g>
            <path
              d="M318.514,231.486c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S299.215,231.486,318.514,231.486z"
            />
            <path
              d="M166.486,231.486c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S147.188,231.486,166.486,231.486z"
            />
            <path
              d="M 245.884 302.293 C 198.973 302.293 156.534 329.211 140.28 369.274 L 112.132 359.843 C 132.713 309.112 186.464 275.029 245.884 275.029 C 305.304 275.029 359.055 309.112 379.636 359.843 L 351.488 369.274 C 335.234 329.211 292.795 302.293 245.884 302.293 Z"
              style=""
            />
            <ellipse
              style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);"
              cx="318.351"
              cy="196.568"
              rx="17.765"
              ry="18.923"
            />
            <ellipse
              style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);"
              cx="165.779"
              cy="197.102"
              rx="16.942"
              ry="18.047"
            />
          </g>
        </svg>

        <svg
          version="1.1"
          id="quite"
          width="85"
          height="85"
          viewBox="0 0 485 485"
          style="enable-background:new 0 0 485 485;"
          xmlns="http://www.w3.org/2000/svg"
          class="svg-emoji"
        >
          <g>
            <path
              d="M318.514,231.486c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S299.215,231.486,318.514,231.486z"
            />
            <path
              d="M166.486,231.486c19.299,0,35-15.701,35-35s-15.701-35-35-35s-35,15.701-35,35S147.188,231.486,166.486,231.486z"
            />
            <path
              d="M 245.884 302.293 C 198.973 302.293 156.534 329.211 140.28 369.274 L 112.132 359.843 C 132.713 309.112 186.464 275.029 245.884 275.029 C 305.304 275.029 359.055 309.112 379.636 359.843 L 351.488 369.274 C 335.234 329.211 292.795 302.293 245.884 302.293 Z"
              style=""
            />
            <ellipse
              style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);"
              cx="318.351"
              cy="196.568"
              rx="17.765"
              ry="18.923"
            />
            <ellipse
              style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);"
              cx="165.779"
              cy="197.102"
              rx="16.942"
              ry="18.047"
            />
          </g>
        </svg>
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
