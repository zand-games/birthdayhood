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
          viewBox="0 0 375.12 392.88"
          id="cicle"
        >
          <clipPath id="a">
            <path
              transform="scale(.24)"
              d="M0 0h1562.5v1637.5H0z"
              fill-rule="evenodd"
            />
          </clipPath>
          <g clip-path="url(#a)"><path d="M0 0h375v393.75H0z" fill="none" /></g>
          <clipPath id="b">
            <path transform="scale(.24)" d="M0 0h1562.5v1637.5H0z" />
          </clipPath>
          <g clip-path="url(#b)">
            <clipPath id="c">
              <path transform="scale(.24)" d="M0 0h1562.5v1640.625H0z" />
            </clipPath>
            <g clip-path="url(#c)">
              <clipPath id="d">
                <path
                  transform="scale(.24)"
                  d="M101.563 125h1453.124v1421.875H101.563z"
                />
              </clipPath>
              <g clip-path="url(#d)">
                <clipPath id="e">
                  <path
                    transform="scale(.24)"
                    d="M101.563 835.938a696.244 696.244 0 0 1 13.96-138.697 697.98 697.98 0 0 1 17.325-67.678 700.504 700.504 0 0 1 24.02-65.69 703.73 703.73 0 0 1 30.486-63.07 707.531 707.531 0 0 1 36.656-59.841 711.752 711.752 0 0 1 42.475-56.038 716.238 716.238 0 0 1 47.883-51.695 720.82 720.82 0 0 1 52.83-46.854 725.341 725.341 0 0 1 57.27-41.56 729.587 729.587 0 0 1 61.158-35.868 733.43 733.43 0 0 1 64.456-29.83 736.706 736.706 0 0 1 67.133-23.504 739.28 739.28 0 0 1 69.165-16.953A741.959 741.959 0 0 1 828.125 125a741.958 741.958 0 0 1 141.745 13.66 739.277 739.277 0 0 1 69.165 16.953 736.674 736.674 0 0 1 67.133 23.504 733.41 733.41 0 0 1 64.456 29.83 729.593 729.593 0 0 1 61.157 35.868 725.332 725.332 0 0 1 57.27 41.56 720.829 720.829 0 0 1 52.831 46.854 716.258 716.258 0 0 1 47.883 51.695 711.737 711.737 0 0 1 42.474 56.038 707.472 707.472 0 0 1 36.657 59.842 703.677 703.677 0 0 1 30.485 63.07 700.478 700.478 0 0 1 24.02 65.69 697.933 697.933 0 0 1 17.326 67.676 696.232 696.232 0 0 1 13.96 138.697 696.222 696.222 0 0 1-13.96 138.697 697.934 697.934 0 0 1-17.325 67.678 700.471 700.471 0 0 1-24.021 65.69 703.725 703.725 0 0 1-30.485 63.069 707.545 707.545 0 0 1-36.657 59.842 711.771 711.771 0 0 1-42.474 56.038 716.237 716.237 0 0 1-47.883 51.695 720.8 720.8 0 0 1-52.83 46.853 725.311 725.311 0 0 1-57.27 41.561 729.616 729.616 0 0 1-61.158 35.868 733.467 733.467 0 0 1-64.456 29.83 736.614 736.614 0 0 1-67.133 23.504 739.207 739.207 0 0 1-69.165 16.952 741.9 741.9 0 0 1-141.745 13.66 741.965 741.965 0 0 1-141.745-13.66 739.215 739.215 0 0 1-69.165-16.952 736.656 736.656 0 0 1-67.134-23.504 733.431 733.431 0 0 1-64.455-29.83 729.536 729.536 0 0 1-61.158-35.868 725.316 725.316 0 0 1-57.27-41.56 720.79 720.79 0 0 1-52.83-46.854 716.187 716.187 0 0 1-47.883-51.695 711.755 711.755 0 0 1-42.475-56.038 707.512 707.512 0 0 1-36.656-59.842 703.73 703.73 0 0 1-30.485-63.07 700.496 700.496 0 0 1-24.021-65.69 697.986 697.986 0 0 1-17.325-67.677 696.237 696.237 0 0 1-13.96-138.697z"
                  />
                </clipPath>
                <g clip-path="url(#e)">
                  <path
                    stroke-width="15"
                    fill="none"
                    stroke="#1a1a1a"
                    d="M373.125 200.625a166.942 166.942 0 0 1-3.35 33.287 167.444 167.444 0 0 1-6.843 24.195 168.42 168.42 0 0 1-10.397 22.95 169.693 169.693 0 0 1-8.798 14.362 170.668 170.668 0 0 1-10.193 13.45 171.717 171.717 0 0 1-11.492 12.406 172.843 172.843 0 0 1-12.68 11.245 173.908 173.908 0 0 1-13.744 9.974 174.938 174.938 0 0 1-14.678 8.609 175.794 175.794 0 0 1-15.47 7.159 176.716 176.716 0 0 1-24.36 7.875 177.61 177.61 0 0 1-25.278 4.291 178.118 178.118 0 0 1-67.71-6.525 177.034 177.034 0 0 1-23.937-9.035 175.86 175.86 0 0 1-22.323-12.374 174.435 174.435 0 0 1-13.744-9.974 173.396 173.396 0 0 1-12.68-11.245 172.262 172.262 0 0 1-11.492-12.407 171.128 171.128 0 0 1-10.194-13.449 170.111 170.111 0 0 1-8.797-14.362 169.193 169.193 0 0 1-10.397-22.95 168.04 168.04 0 0 1-6.842-24.195 167.258 167.258 0 0 1-3.351-33.287 166.939 166.939 0 0 1 3.35-33.287 167.468 167.468 0 0 1 6.843-24.195 168.378 168.378 0 0 1 6.549-15.47 169.182 169.182 0 0 1 8.067-14.767 170.125 170.125 0 0 1 9.507-13.922A171.156 171.156 0 0 1 69.547 86.04a172.242 172.242 0 0 1 12.1-11.84 173.353 173.353 0 0 1 13.228-10.622 174.428 174.428 0 0 1 14.228-9.303 175.416 175.416 0 0 1 15.092-7.893 176.316 176.316 0 0 1 23.937-9.035 177.371 177.371 0 0 1 25.032-5.5 178.01 178.01 0 0 1 34.142-1.641 178.118 178.118 0 0 1 33.814 4.907 177.37 177.37 0 0 1 24.36 7.875 176.346 176.346 0 0 1 15.47 7.16 175.426 175.426 0 0 1 14.678 8.607 174.414 174.414 0 0 1 13.744 9.975 173.375 173.375 0 0 1 12.68 11.245 172.289 172.289 0 0 1 11.492 12.407 171.17 171.17 0 0 1 10.193 13.449 170.075 170.075 0 0 1 12.646 21.842 168.792 168.792 0 0 1 9.233 23.422 167.76 167.76 0 0 1 5.622 24.494 167.051 167.051 0 0 1 1.887 25.036z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 375.12 392.88"
          id="triangle"
        >
          <clipPath id="a">
            <path
              transform="scale(.24)"
              d="M0 0h1562.5v1637.5H0z"
              fill-rule="evenodd"
            />
          </clipPath>
          <g clip-path="url(#a)"><path d="M0 0h375v393.75H0z" fill="none" /></g>
          <clipPath id="b">
            <path transform="scale(.24)" d="M0 0h1562.5v1637.5H0z" />
          </clipPath>
          <g clip-path="url(#b)">
            <clipPath id="c">
              <path transform="scale(.24)" d="M0 0h1562.5v1640.625H0z" />
            </clipPath>
            <g clip-path="url(#c)">
              <clipPath id="d">
                <path
                  transform="scale(.24)"
                  d="M101.563 125h1453.124v1421.875H101.563z"
                />
              </clipPath>
              <g clip-path="url(#d)">
                <clipPath id="e">
                  <path
                    transform="scale(.24)"
                    d="m828.125 125 726.563 1421.875H101.562L828.125 125z"
                  />
                </clipPath>
                <g clip-path="url(#e)">
                  <path
                    stroke-width="15"
                    fill="none"
                    stroke="#1a1a1a"
                    d="m198.75 30 174.375 341.25H24.375L198.75 30z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 375.12 392.88"
          id="diamond"
        >
          <clipPath id="a">
            <path
              transform="scale(.24)"
              d="M0 0h1562.5v1637.5H0z"
              fill-rule="evenodd"
            />
          </clipPath>
          <g clip-path="url(#a)"><path d="M0 0h375v393.75H0z" fill="#fff" /></g>
          <clipPath id="b">
            <path transform="scale(.24)" d="M0 0h1562.5v1637.5H0z" />
          </clipPath>
          <g clip-path="url(#b)">
            <clipPath id="c">
              <path transform="scale(.24)" d="M0 0h1562.5v1640.625H0z" />
            </clipPath>
            <g clip-path="url(#c)">
              <clipPath id="d">
                <path
                  transform="scale(.24)"
                  d="M101.563 125h1453.124v1421.875H101.563z"
                />
              </clipPath>
              <g clip-path="url(#d)">
                <clipPath id="e">
                  <path
                    transform="scale(.24)"
                    d="m828.125 125 726.563 710.938-726.563 710.937-726.563-710.938L828.125 125z"
                  />
                </clipPath>
                <g clip-path="url(#e)">
                  <path
                    stroke-width="15"
                    fill="none"
                    stroke="#1a1a1a"
                    d="m198.75 30 174.375 170.625L198.75 371.25 24.375 200.625 198.75 30z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 375.12 392.88"
          id="penta"
        >
          <clipPath id="a">
            <path
              transform="scale(.24)"
              d="M0 0h1562.5v1637.5H0z"
              fill-rule="evenodd"
            />
          </clipPath>
          <g clip-path="url(#a)"><path d="M0 0h375v393.75H0z" fill="#fff" /></g>
          <clipPath id="b">
            <path transform="scale(.24)" d="M0 0h1562.5v1637.5H0z" />
          </clipPath>
          <g clip-path="url(#b)">
            <clipPath id="c">
              <path transform="scale(.24)" d="M0 0h1562.5v1640.625H0z" />
            </clipPath>
            <g clip-path="url(#c)">
              <clipPath id="d">
                <path
                  transform="scale(.24)"
                  d="M101.563 125h1453.124v1421.875H101.563z"
                />
              </clipPath>
              <g clip-path="url(#d)">
                <clipPath id="e">
                  <path
                    transform="scale(.24)"
                    d="m828.125 125 726.563 568.75-290.626 853.125H392.188L101.563 693.75 828.125 125z"
                  />
                </clipPath>
                <g clip-path="url(#e)">
                  <path
                    stroke-width="15"
                    fill="none"
                    stroke="#1a1a1a"
                    d="m198.75 30 174.375 136.5-69.75 204.75H94.125L24.375 166.5 198.75 30z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 375.12 392.88"
          id="trapez"
        >
          <clipPath id="a">
            <path
              transform="scale(.24)"
              d="M0 0h1562.5v1637.5H0z"
              fill-rule="evenodd"
            />
          </clipPath>
          <g clip-path="url(#a)"><path d="M0 0h375v393.75H0z" fill="#fff" /></g>
          <clipPath id="b">
            <path transform="scale(.24)" d="M0 0h1562.5v1637.5H0z" />
          </clipPath>
          <g clip-path="url(#b)">
            <clipPath id="c">
              <path transform="scale(.24)" d="M0 0h1562.5v1640.625H0z" />
            </clipPath>
            <g clip-path="url(#c)">
              <clipPath id="d">
                <path
                  transform="scale(.24)"
                  d="M101.563 125h1453.124v1421.875H101.563z"
                />
              </clipPath>
              <g clip-path="url(#d)">
                <clipPath id="e">
                  <path
                    transform="scale(.24)"
                    d="M450.313 125h1104.374l-348.75 1421.875H101.563L450.313 125z"
                  />
                </clipPath>
                <g clip-path="url(#e)">
                  <path
                    stroke-width="15"
                    fill="none"
                    stroke="#1a1a1a"
                    d="M108.075 30h265.05l-83.7 341.25H24.375L108.075 30z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 375.12 392.88"
          id="hegxa"
        >
          <clipPath id="a">
            <path
              transform="scale(.24)"
              d="M0 0h1562.5v1637.5H0z"
              fill-rule="evenodd"
            />
          </clipPath>
          <g clip-path="url(#a)"><path d="M0 0h375v393.75H0z" fill="#fff" /></g>
          <clipPath id="b">
            <path transform="scale(.24)" d="M0 0h1562.5v1637.5H0z" />
          </clipPath>
          <g clip-path="url(#b)">
            <clipPath id="c">
              <path transform="scale(.24)" d="M0 0h1562.5v1640.625H0z" />
            </clipPath>
            <g clip-path="url(#c)">
              <clipPath id="d">
                <path
                  transform="scale(.24)"
                  d="M101.563 125h1453.124v1421.875H101.563z"
                />
              </clipPath>
              <g clip-path="url(#d)">
                <clipPath id="e">
                  <path
                    transform="scale(.24)"
                    d="M464.844 125h726.562l363.282 710.938-363.282 710.937H464.844L101.563 835.937 464.842 125z"
                  />
                </clipPath>
                <g clip-path="url(#e)">
                  <path
                    stroke-width="15"
                    fill="none"
                    stroke="#1a1a1a"
                    d="M111.563 30h174.375l87.187 170.625-87.188 170.625H111.563L24.376 200.625 111.563 30z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 375.12 392.88"
          id="star"
        >
          <clipPath id="a">
            <path
              transform="scale(.24)"
              d="M0 0h1562.5v1637.5H0z"
              fill-rule="evenodd"
            />
          </clipPath>
          <g clip-path="url(#a)"><path d="M0 0h375v393.75H0z" fill="#fff" /></g>
          <clipPath id="b">
            <path transform="scale(.24)" d="M0 0h1562.5v1637.5H0z" />
          </clipPath>
          <g clip-path="url(#b)">
            <clipPath id="c">
              <path transform="scale(.24)" d="M0 0h1562.5v1640.625H0z" />
            </clipPath>
            <g clip-path="url(#c)">
              <clipPath id="d">
                <path
                  transform="scale(.24)"
                  d="M101.563 125h1453.124v1421.875H101.563z"
                />
              </clipPath>
              <g clip-path="url(#d)">
                <clipPath id="e">
                  <path
                    transform="scale(.24)"
                    d="m828.125 1262.5-435.938 284.375 72.657-526.094-363.281-355.468 508.593-71.094L828.125 125l217.969 469.219 508.593 71.093-363.28 355.47 72.656 526.093L828.125 1262.5z"
                  />
                </clipPath>
                <g clip-path="url(#e)">
                  <path
                    stroke-width="15"
                    fill="none"
                    stroke="#1a1a1a"
                    d="M198.75 303 94.125 371.25l17.438-126.263-87.188-85.312 122.063-17.063L198.75 30l52.313 112.613 122.062 17.062-87.188 85.312 17.438 126.263L198.75 303z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    `;
  }
}

customElements.define("shape-tab", ShapeTab);
