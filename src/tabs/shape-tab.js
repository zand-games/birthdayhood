import { LitElement, html, css, svg } from "lit";
import { BaseComponent } from "../baseComponent";
import { BirthdayStore } from "../store";
export class ShapeTab extends BaseComponent {
  constructor() {
    super();
  }

  firstUpdated() {
    super.firstUpdated();
    var svgs = document.querySelectorAll("svg");
    svgs.forEach((item) => {
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

    // for all svgs change the background to default
    // for selected svg change the backgroud
    BirthdayStore.shape = result;
  }

  render() {
    return html`
      <div class="tab">
        <h6>Select a shape for your last year</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 250 250"
          id="circle"
        >
          <circle class="head" r="120" cx="125" cy="125" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 250 250"
          id="triangle"
        >
          <path
            class="head"
            d="M 125.333 9.131 L 241.502 241.469 L 9.164 241.469 L 125.333 9.131 Z"
            bx:shape="triangle 9.164 9.131 232.338 232.338 0.5 0 1@6e8e17eb"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 250 250"
          id="diamond"
        >
          <rect
            class="head"
            x="52"
            y="42"
            width="165"
            height="165"
            transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 120.899485, -58.757852)"
          ></rect>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 250 250"
          id="penta"
        >
          <path
            class="head"
            d="m9.87002,97.1347l116.49985,-88.99785l116.50013,88.99785l-44.49889,144.00216l-144.00207,0l-44.49902,-144.00216z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 250 250"
          id="trapez"
        >
          <path
            class="head"
            d="m11.37499,234.30733l46.00001,-217.99998l184.00001,0l-46.00001,217.99998l-184.00001,0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 250 250"
          id="hegxa"
        >
          <path
            class="head"
            d="M 125.037 11.495 L 227.711 69.727 L 227.711 186.192 L 125.037 244.425 L 22.363 186.193 L 22.363 69.727 Z"
            transform="matrix(0, -1, 1, 0, -2.923007, 252.996998)"
            bx:shape="n-gon 125.037 127.96 118.558 116.465 6 0 1@2d9c1985"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 250 250"
          id="star"
        >
          <path
            class="head"
            d="M 124.855 11.495 L 165.54 80.08 L 242.409 98.141 L 190.685 158.59 L 197.508 238.337 L 124.855 207.111 L 52.202 238.337 L 59.025 158.59 L 7.301 98.141 L 84.17 80.08 Z"
            bx:shape="star 124.855 136.89 123.604 125.395 0.56 5 1@8a77835f"
          />
        </svg>
      </div>
    `;
  }
}

customElements.define("shape-tab", ShapeTab);
