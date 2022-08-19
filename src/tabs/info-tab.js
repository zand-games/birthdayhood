import { LitElement, html } from "lit";
import { BaseComponent } from "../baseComponent";
import { BirthdayStore } from "../store";

export class InfoTab extends BaseComponent {
  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
    var svgs = document.querySelectorAll('svg[name="svg-emoji"]');
    svgs.forEach((item) => {
      item.className.baseVal = "emoji"; // for all svgs change the background to default
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
      var svgss = document.querySelectorAll('svg[name="svg-emoji"]');
      svgss.forEach((item) => {
        item.className.baseVal = "emoji";
      });
      document.getElementById(result).className.baseVal = "emoji-selected";
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
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
          name="svg-emoji"
        >
          <g stroke="null" id="Layer_1">
            <title stroke="null">Layer 1</title>
            <path
              id="svg_1"
              d="m33,24c-0.552,0 -1,0.448 -1,1c0,5.514 -4.486,10 -10,10s-10,-4.486 -10,-10c0,-0.552 -0.448,-1 -1,-1s-1,0.448 -1,1c0,6.617 5.383,12 12,12s12,-5.383 12,-12c0,-0.552 -0.448,-1 -1,-1z"
            />
            <path
              d="M20,16c0-3.859-3.14-7-7-7s-7,3.141-7,7s3.14,7,7,7S20,19.859,20,16z M8,16c0-2.757,2.243-5,5-5s5,2.243,5,5s-2.243,5-5,5 S8,18.757,8,16z"
            />
            <circle cx="13" cy="16" r="3" />
            <circle cx="31" cy="16" r="3" />
            <path
              d="M31,9c-3.86,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7S34.86,9,31,9z M31,21c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S33.757,21,31,21z"
            />
          </g>
        </svg>

        <svg
          version="1.1"
          id="quite"
          width="85"
          height="85"
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
          name="svg-emoji"
        >
          <g id="Layer_1" stroke="null">
            <title stroke="null">Layer 1</title>
            <path
              id="svg_2"
              d="m33,29l-22,0c-0.552,0 -1,0.448 -1,1s0.448,1 1,1l22,0c0.552,0 1,-0.448 1,-1s-0.448,-1 -1,-1z"
            />
            <path
              id="svg_3"
              d="m20,16c0,-3.86 -3.14,-7 -7,-7s-7,3.14 -7,7s3.14,7 7,7s7,-3.14 7,-7zm-11.966,0.34c0.618,0.993 1.71,1.66 2.966,1.66c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.62 -1.106,-2.97 -2.601,-3.369c0.355,-0.08 0.722,-0.131 1.101,-0.131c2.757,0 5,2.243 5,5s-2.243,5 -5,5c-2.64,0 -4.787,-2.064 -4.966,-4.66z"
            />
            <path
              id="svg_4"
              d="m31,9c-3.86,0 -7,3.14 -7,7s3.14,7 7,7s7,-3.14 7,-7s-3.14,-7 -7,-7zm0,12c-2.64,0 -4.787,-2.064 -4.966,-4.66c0.618,0.993 1.71,1.66 2.966,1.66c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.62 -1.106,-2.97 -2.601,-3.369c0.355,-0.08 0.722,-0.131 1.101,-0.131c2.757,0 5,2.243 5,5s-2.243,5 -5,5z"
            />
          </g>
        </svg>
        <svg
          version="1.1"
          id="sad"
          width="85"
          height="85"
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
          name="svg-emoji"
        >
          <g id="Layer_1" stroke="null">
            <title stroke="null">Layer 1</title>
            <path
              id="svg_1"
              d="m22,23c-6.617,0 -12,5.383 -12,12c0,0.552 0.448,1 1,1s1,-0.448 1,-1c0,-5.514 4.486,-10 10,-10s10,4.486 10,10c0,0.552 0.448,1 1,1s1,-0.448 1,-1c0,-6.617 -5.383,-12 -12,-12z"
            />
            <path
              d="M20,16c0-3.859-3.14-7-7-7s-7,3.141-7,7s3.14,7,7,7S20,19.859,20,16z M8,16c0-2.757,2.243-5,5-5s5,2.243,5,5s-2.243,5-5,5 S8,18.757,8,16z"
            />
            <circle cx="13" cy="16" r="3" />
            <circle cx="31" cy="16" r="3" />
            <path
              d="M31,9c-3.86,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7S34.86,9,31,9z M31,21c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S33.757,21,31,21z"
            />
          </g>
        </svg>
        <svg
          version="1.1"
          id="grin"
          width="85"
          height="85"
          viewBox="0 0 44 44"
          style="enable-background:new 0 0 44 44;"
          xmlns="http://www.w3.org/2000/svg"
          name="svg-emoji"
        >
          <g>
            <path
              d="M20,16c0-3.859-3.14-7-7-7s-7,3.141-7,7s3.14,7,7,7S20,19.859,20,16z M8,16c0-2.757,2.243-5,5-5s5,2.243,5,5s-2.243,5-5,5 S8,18.757,8,16z"
            />
            <circle cx="13" cy="16" r="3" />
            <circle cx="31" cy="16" r="3" />
            <path
              d="M31,9c-3.86,0-7,3.141-7,7s3.14,7,7,7s7-3.141,7-7S34.86,9,31,9z M31,21c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S33.757,21,31,21z"
            />
            <path
              d="M32.385,26.01c-0.511-0.215-1.096,0.029-1.308,0.538c-1.257,3.018-3.722,5.354-6.939,6.578 c-3.147,1.196-6.702,1.155-9.753-0.116c-0.513-0.213-1.096,0.029-1.308,0.538c-0.213,0.51,0.028,1.096,0.538,1.308 c1.819,0.758,3.791,1.138,5.771,1.138c1.853,0,3.713-0.332,5.463-0.998c3.735-1.421,6.603-4.148,8.073-7.678 C33.135,26.808,32.895,26.222,32.385,26.01z"
            />
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>

        <div class="aboutcontainer">
          <div class="title">About</div>
          <div>
            <p class="body">
              Birthdayhood is an experimental application to make a report for
              our last year with color and shape and connect with others based
              on the some hashtags.
            </p>
            <p class="body">
              We are not saving any data and when you generate your birthday
              report the data will be disposed.
            </p>
            <p>
              <span class="footer-content">
                © 2022
                <a class="footerlink" target="_blank" href="https://zand.games"
                  >Zand.Games</a
                >, All rights reserved
              </span>
            </p>
          </div>
        </div>
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
    BirthdayStore.month = e.target.value - 1;
    BirthdayStore.monthName = e.target.options[e.target.selectedIndex].text;
  }
  dayChanged(e) {
    BirthdayStore.day = e.target.value;
  }
}

customElements.define("info-tab", InfoTab);
