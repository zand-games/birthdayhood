import { html, css, LitElement } from "lit";
import { BaseComponent } from "./baseComponent";
import { BirthdayStore } from "./store";
import { Canvg } from "https://cdn.skypack.dev/canvg";
export class BirthdayResult extends LitElement {
  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
    this.start_canvas_result();
  }

  render() {
    return html`
      <svg
        class="svg_result"
        viewBox="0 0 400 300"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect
          rx="15"
          width="100%"
          height="100%"
          fill="white"
          style="stroke-width: 1px;stroke:##656563;"
        />

        <rect
          rx="15"
          width="100%"
          height="100%"
          fill="rgb(${BirthdayStore.avgcolor})"
          opacity="0.2"
          style="stroke-width: 1px;stroke:#656563;"
        />
        <image
          x="90"
          y="-15"
          width="200px"
          height="138px"
          href="./assets/gamescom-logo.png"
        />
        <g id="body" transform="translate(50,30)">
          <g
            opacity="1"
            transform="matrix(1.875744, 0, 0, 1.473143, -18.150595, -9.20886)"
            style=""
          >
            <clipPath id="clip-2">
              <path
                transform="matrix(.24 0 0 .24 124.56 62.16)"
                d="M0 0h92v122H0z"
                fill-rule="evenodd"
              />
            </clipPath>
          </g>
          <g id="physical" transform="translate(210,-90)">
            <g
              opacity="1"
              clip-path="url(#t)"
              transform="matrix(2.090916, 0, 0, 2.164994, -10.459481, 10.58442)"
              style=""
            >
              <g clip-path="url(#u)">
                <path
                  stroke-width="20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  stroke="rgb(${BirthdayStore.bodyColor})"
                  d="m8.64 0-.21.61s-.22.61-1.28.83c0 0-1.07.22-1.64.78 0 0-.58.55-1.19 1.08 0 0-.61.52-1.08 1.38 0 0-.47.86-1.08 1.39 0 0-.61.52-.97 1.13 0 0-.36.61-.42 1.19 0 0-.05.57-.1 1.8 0 0-.06 1.22-.31 2.47 0 0-.25 1.24-.3 2.88 0 0-.06 1.63.05 3.07 0 0 .11 1.44.88 2.47 0 0 .77 1.03 2.52 1.61 0 0 1.75.57 4.05 1.49 0 0 2.3.91 4.16 1.74 0 0 1.85.83 3.24 1.7 0 0 1.39.86 2.22 1.08 0 0 .82.21 1.44.52 0 0 .61.3.83.61 0 0 .21.3.77.41 0 0 .55.11 1.18.36 0 0 .63.25 2.06.31 0 0 1.42.05 2.3.05h1.55s.66 0 1.13-.05c0 0 .47-.06 1.08-.52 0 0 .61-.47.97-1.58 0 0 .36-1.12.42-1.75 0 0 .05-.63.05-1.55v-2.99s0-.63-.16-2.16c0 0-.16-1.53-1.4-3.02 0 0-1.25-1.5-3.73-2.78 0 0-2.48-1.28-3.27-1.85 0 0-.8-.58-1.16-1.19 0 0-.36-.61-.66-1.02 0 0-.31-.42-.36-.84 0 0-.06-.41-.16-.96 0 0-.11-.56-.61-.72 0 0-.51-.17-.72-.53 0 0-.22-.36-.72-1.08 0 0-.51-.72-.62-1.63 0 0-.11-.92-.16-1.39 0 0-.06-.47-.31-.83 0 0-.25-.36-.3-.72 0 0-.06-.36-.06-.72V.72"
                  transform="matrix(.48267 0 0 .48358 16.428 71.948),translate(0,20)"
                />
              </g>
            </g>
          </g>
          <g id="mental">
            <clipPath id="l">
              <path d="M0 0h104v103H0z" fill-rule="evenodd" />
            </clipPath>
            <g
              clip-path="url(#l)"
              transform="matrix(1.779226, 0, 0, 1.776662, -43.652012, 9.47801)"
              style=""
            >
              <path
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                stroke="rgb(${BirthdayStore.mentalColor})"
                d="m8.64 0-.21.61s-.22.61-1.28.83c0 0-1.07.22-1.64.78 0 0-.58.55-1.19 1.08 0 0-.61.52-1.08 1.38 0 0-.47.86-1.08 1.39 0 0-.61.52-.97 1.13 0 0-.36.61-.42 1.19 0 0-.05.57-.1 1.8 0 0-.06 1.22-.31 2.47 0 0-.25 1.24-.3 2.88 0 0-.06 1.63.05 3.07 0 0 .11 1.44.88 2.47 0 0 .77 1.03 2.52 1.61 0 0 1.75.57 4.05 1.49 0 0 2.3.91 4.16 1.74 0 0 1.85.83 3.24 1.7 0 0 1.39.86 2.22 1.08 0 0 .82.21 1.44.52 0 0 .61.3.83.61 0 0 .21.3.77.41 0 0 .55.11 1.18.36 0 0 .63.25 2.06.31 0 0 1.42.05 2.3.05h1.55s.66 0 1.13-.05c0 0 .47-.06 1.08-.52 0 0 .61-.47.97-1.58 0 0 .36-1.12.42-1.75 0 0 .05-.63.05-1.55v-2.99s0-.63-.16-2.16c0 0-.16-1.53-1.4-3.02 0 0-1.25-1.5-3.73-2.78 0 0-2.48-1.28-3.27-1.85 0 0-.8-.58-1.16-1.19 0 0-.36-.61-.66-1.02 0 0-.31-.42-.36-.84 0 0-.06-.41-.16-.96 0 0-.11-.56-.61-.72 0 0-.51-.17-.72-.53 0 0-.22-.36-.72-1.08 0 0-.51-.72-.62-1.63 0 0-.11-.92-.16-1.39 0 0-.06-.47-.31-.83 0 0-.25-.36-.3-.72 0 0-.06-.36-.06-.72V.72"
                transform="matrix(.48267 0 0 .48358 73.583 27.43),translate(-50,50)"
              />
            </g>
          </g>
          <circle
            r="65"
            cx="148.546"
            cy="169.445"
            rx="54.36"
            ry="50.841"
            visibility="${BirthdayStore.shape == "circle"
              ? "visible"
              : "hidden"}"
            style="fill: rgb(${BirthdayStore.avgcolor}); stroke: rgb(0, 0, 0); stroke-opacity: 0.5;"
          />
          <path
            visibility="${BirthdayStore.shape == "triangle"
              ? "visible"
              : "hidden"}"
            d="m54.725,191.58533l71.49999,-153.97521l71.49999,153.97521l-142.99998,0l0.00001,0z"
            style="fill: rgb(${BirthdayStore.avgcolor}); stroke: rgb(0, 0, 0); stroke-opacity: 0.5;"
            transform="translate(23,30)"
          />

          <rect
            visibility="${BirthdayStore.shape == "diamond"
              ? "visible"
              : "hidden"}"
            x="122"
            y="83"
            width="115"
            height="115"
            style="fill: rgb(${BirthdayStore.avgcolor}); stroke: rgb(0, 0, 0); stroke-opacity: 0.5;"
            transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 120.899485, -58.757852)"
          ></rect>

          <path
            visibility="${BirthdayStore.shape == "pentagon"
              ? "visible"
              : "hidden"}"
            style="fill: rgb(${BirthdayStore.avgcolor}); stroke: rgb(0, 0, 0); stroke-opacity: 0.5;"
            d="m57.23623,107.52932l65.96469,-50.39247l65.96485,50.39247l-25.19622,81.53708l-81.53703,0l-25.19629,-81.53708z"
            transform="translate(25,37)"
          />

          <path
            visibility="${BirthdayStore.shape == "trapez"
              ? "visible"
              : "hidden"}"
            style="fill: rgb(${BirthdayStore.avgcolor}); stroke: rgb(0, 0, 0); stroke-opacity: 0.5;"
            d="m3.37499,116.99431l24.20001,-114.68696l96.80001,0l-24.20001,114.68696l-96.80001,0z"
            transform="translate(82,110)"
          />

          <path
            visibility="${BirthdayStore.shape == "hexagon"
              ? "visible"
              : "hidden"}"
            style="fill: rgb(${BirthdayStore.avgcolor}); stroke: rgb(0, 0, 0); stroke-opacity: 0.5;"
            d="m52.65999,125.1127l30.85714,-61.71428l82.28571,0l30.85713,61.71428l-30.85713,61.71428l-82.28571,0l-30.85714,-61.71428z"
            transform="translate(24,45)"
          />
          <path
            visibility="${BirthdayStore.shape == "star" ? "visible" : "hidden"}"
            style="fill: rgb(${BirthdayStore.avgcolor}); stroke: rgb(0, 0, 0); stroke-opacity: 0.5;"
            d="M 87.3 11.495 L 114.988 59.871 L 167.299 72.61 L 132.099 115.247 L 136.742 171.495 L 87.3 149.471 L 37.858 171.495 L 42.501 115.247 L 7.301 72.61 L 59.612 59.871 Z"
            transform="translate(62,70)"
          />
          <g
            visibility="${BirthdayStore.emoji == "happy"
              ? "visible"
              : "hidden"}"
            stroke="null"
            id="Layer_1"
            transform="matrix(1, 0, 0, 1, 127.418594, 147.348846)"
          >
            <title stroke="null">Layer 1</title>
            <g transform="translate(-27,-18)">
              <path
                stroke="null"
                d="m80.46875,48.59375c-1.60425,0 -2.90625,1.302 -2.90625,2.90625c0,16.02506 -13.03744,29.0625 -29.0625,29.0625s-29.0625,-13.03744 -29.0625,-29.0625c0,-1.60425 -1.302,-2.90625 -2.90625,-2.90625s-2.90625,1.302 -2.90625,2.90625c0,19.23066 15.64434,34.875 34.875,34.875s34.875,-15.64434 34.875,-34.875c0,-1.60425 -1.302,-2.90625 -2.90625,-2.90625z"
                id="svg_1"
              />
              <path
                stroke="null"
                id="svg_2"
                d="m42.6875,25.34375c0,-11.21522 -9.12562,-20.34375 -20.34375,-20.34375s-20.34375,9.12853 -20.34375,20.34375s9.12562,20.34375 20.34375,20.34375s20.34375,-9.12853 20.34375,-20.34375zm-34.875,0c0,-8.01253 6.51872,-14.53125 14.53125,-14.53125s14.53125,6.51872 14.53125,14.53125s-6.51872,14.53125 -14.53125,14.53125s-14.53125,-6.51872 -14.53125,-14.53125z"
              />
              <circle
                stroke="null"
                id="svg_3"
                r="8.71875"
                cy="25.34375"
                cx="22.34375"
              />
              <circle
                stroke="null"
                id="svg_4"
                r="8.71875"
                cy="25.34375"
                cx="74.65625"
              />
              <path
                stroke="null"
                id="svg_5"
                d="m74.65625,5c-11.21813,0 -20.34375,9.12853 -20.34375,20.34375s9.12562,20.34375 20.34375,20.34375s20.34375,-9.12853 20.34375,-20.34375s-9.12562,-20.34375 -20.34375,-20.34375zm0,34.875c-8.01253,0 -14.53125,-6.51872 -14.53125,-14.53125s6.51872,-14.53125 14.53125,-14.53125s14.53125,6.51872 14.53125,14.53125s-6.51872,14.53125 -14.53125,14.53125z"
              />
            </g>
          </g>
          <g
            visibility="${BirthdayStore.emoji == "sad" ? "visible" : "hidden"}"
            stroke="null"
            id="Layer_1"
            transform="matrix(1, 0, 0, 1, 127.418594, 147.348846)"
          >
            <title stroke="null">Layer 1</title>

            <g transform="translate(-27,-18)">
              <path
                stroke="null"
                d="m48.5,46.1875c-17.57641,0 -31.875,14.29859 -31.875,31.875c0,1.46625 1.19,2.65625 2.65625,2.65625s2.65625,-1.19 2.65625,-2.65625c0,-14.64656 11.91594,-26.5625 26.5625,-26.5625s26.5625,11.91594 26.5625,26.5625c0,1.46625 1.19,2.65625 2.65625,2.65625s2.65625,-1.19 2.65625,-2.65625c0,-17.57641 -14.29859,-31.875 -31.875,-31.875z"
                id="svg_1"
              />
              <path
                stroke="null"
                id="svg_2"
                d="m43.1875,27.59375c0,-10.25047 -8.34062,-18.59375 -18.59375,-18.59375s-18.59375,8.34328 -18.59375,18.59375s8.34062,18.59375 18.59375,18.59375s18.59375,-8.34328 18.59375,-18.59375zm-31.875,0c0,-7.32328 5.95797,-13.28125 13.28125,-13.28125s13.28125,5.95797 13.28125,13.28125s-5.95797,13.28125 -13.28125,13.28125s-13.28125,-5.95797 -13.28125,-13.28125z"
              />
              <circle
                stroke="null"
                id="svg_3"
                r="7.96875"
                cy="27.59375"
                cx="24.59375"
              />
              <circle
                stroke="null"
                id="svg_4"
                r="7.96875"
                cy="27.59375"
                cx="72.40625"
              />
              <path
                stroke="null"
                id="svg_5"
                d="m72.40625,9c-10.25312,0 -18.59375,8.34328 -18.59375,18.59375s8.34062,18.59375 18.59375,18.59375s18.59375,-8.34328 18.59375,-18.59375s-8.34062,-18.59375 -18.59375,-18.59375zm0,31.875c-7.32328,0 -13.28125,-5.95797 -13.28125,-13.28125s5.95797,-13.28125 13.28125,-13.28125s13.28125,5.95797 13.28125,13.28125s-5.95797,13.28125 -13.28125,13.28125z"
              />
            </g>
          </g>
          <g
            visibility="${BirthdayStore.emoji == "grin" ? "visible" : "hidden"}"
            stroke="null"
            id="Layer_1"
            transform="matrix(1, 0, 0, 1, 127.418594, 147.348846)"
          >
            <title stroke="null">Layer 1</title>

            <g transform="translate(-25,-18)">
              <path
                stroke="null"
                id="svg_1"
                d="m41.05762,26.91342c0,-10.72354 -8.72556,-19.45188 -19.45188,-19.45188s-19.45188,8.72834 -19.45188,19.45188s8.72556,19.45188 19.45188,19.45188s19.45188,-8.72834 19.45188,-19.45188zm-33.34608,0c0,-7.66126 6.23294,-13.8942 13.8942,-13.8942s13.8942,6.23294 13.8942,13.8942s-6.23294,13.8942 -13.8942,13.8942s-13.8942,-6.23294 -13.8942,-13.8942z"
              />
              <circle
                stroke="null"
                id="svg_2"
                r="8.33652"
                cy="26.91342"
                cx="21.60574"
              />
              <circle
                stroke="null"
                id="svg_3"
                r="8.33652"
                cy="26.91342"
                cx="71.62485"
              />
              <path
                stroke="null"
                id="svg_4"
                d="m71.62485,7.46154c-10.72632,0 -19.45188,8.72834 -19.45188,19.45188s8.72556,19.45188 19.45188,19.45188s19.45188,-8.72834 19.45188,-19.45188s-8.72556,-19.45188 -19.45188,-19.45188zm0,33.34608c-7.66126,0 -13.8942,-6.23294 -13.8942,-13.8942s6.23294,-13.8942 13.8942,-13.8942s13.8942,6.23294 13.8942,13.8942s-6.23294,13.8942 -13.8942,13.8942z"
              />
              <path
                stroke="null"
                id="svg_5"
                d="m75.47354,54.72961c-1.41999,-0.59745 -3.04561,0.08059 -3.63472,1.49502c-3.493,8.38654 -10.34284,14.87791 -19.28237,18.27921c-8.74501,3.32349 -18.62378,3.20956 -27.10202,-0.32235c-1.42554,-0.59189 -3.04561,0.08059 -3.63472,1.49502c-0.59189,1.41721 0.07781,3.04561 1.49502,3.63472c5.05471,2.10636 10.53458,3.16232 16.03668,3.16232c5.14919,0 10.31783,-0.92257 15.1808,-2.77328c10.37897,-3.94873 18.34868,-11.52663 22.43357,-21.33593c0.59189,-1.41721 -0.07503,-3.04561 -1.49224,-3.63472z"
              />
            </g>
          </g>
          <g
            visibility="${BirthdayStore.emoji == "quite"
              ? "visible"
              : "hidden"}"
            stroke="null"
            id="Layer_1"
            transform="matrix(1, 0, 0, 1, 127.418594, 147.348846)"
          >
            <title stroke="null">Layer 1</title>
            <g transform="translate(-25,-18)">
              <path
                stroke="null"
                d="m76.9375,65.25l-61.875,0c-1.5525,0 -2.8125,1.26 -2.8125,2.8125s1.26,2.8125 2.8125,2.8125l61.875,0c1.5525,0 2.8125,-1.26 2.8125,-2.8125s-1.26,-2.8125 -2.8125,-2.8125z"
                id="svg_2"
              />
              <path
                stroke="null"
                d="m40.375,28.6875c0,-10.85625 -8.83125,-19.6875 -19.6875,-19.6875s-19.6875,8.83125 -19.6875,19.6875s8.83125,19.6875 19.6875,19.6875s19.6875,-8.83125 19.6875,-19.6875zm-33.65438,0.95625c1.73813,2.79281 4.80938,4.66875 8.34188,4.66875c5.43656,0 9.84375,-4.40719 9.84375,-9.84375c0,-4.55625 -3.11062,-8.35312 -7.31531,-9.47531c0.99844,-0.225 2.03063,-0.36844 3.09656,-0.36844c7.75406,0 14.0625,6.30844 14.0625,14.0625s-6.30844,14.0625 -14.0625,14.0625c-7.425,0 -13.46344,-5.805 -13.96687,-13.10625z"
                id="svg_3"
              />
              <path
                stroke="null"
                d="m71.3125,9c-10.85625,0 -19.6875,8.83125 -19.6875,19.6875s8.83125,19.6875 19.6875,19.6875s19.6875,-8.83125 19.6875,-19.6875s-8.83125,-19.6875 -19.6875,-19.6875zm0,33.75c-7.425,0 -13.46344,-5.805 -13.96688,-13.10625c1.73813,2.79281 4.80938,4.66875 8.34188,4.66875c5.43656,0 9.84375,-4.40719 9.84375,-9.84375c0,-4.55625 -3.11062,-8.35312 -7.31531,-9.47531c0.99844,-0.225 2.03063,-0.36844 3.09656,-0.36844c7.75406,0 14.0625,6.30844 14.0625,14.0625s-6.30844,14.0625 -14.0625,14.0625z"
                id="svg_4"
              />
            </g>
          </g>
          <g id="body_png_group">
            <image
              x="215"
              y="95"
              width="68"
              height="35"
              href="./assets/titles/physical.png"
            />

            <image
              x="35"
              y="95"
              width="58"
              height="35"
              href="./assets/titles/mental.png"
            />
          </g>
        </g>

        <g id="footer">
          <g id="footer_zand" transform="translate(95,-100)">
            <text
              style="fill: #656563; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 9.3px;"
              x="215.371"
              y="394.767"
            >
              http://zand.games
            </text>
          </g>
          <g id="footer_hashtag" transform="translate(10,-90)">
            <text
              style="fill: #656563; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 10px"
              x="7"
              y="381"
            >
              ${this.get_color_hashtag()}
            </text>
          </g>
        </g>

        <!-- </g> -->
      </svg>
      <br />
      <br />
      <input
        class="contact"
        @change="${this.contact_changed}"
        type="text"
        id="contact"
        placeholder="Contact"
      />
      <br />
      <br />
      <button id="download" @click="${this.export_svg_to_img}" value="Download">
        Download
      </button>
      <br />
      <br />
      <canvas style="display:inline;" id="myCanvas"></canvas>
      <br />
      <br />

      <a id="link"></a>
    `;
  }
  reloadpage() {
    window.location.reload();
  }

  async start_canvas_result() {
    const canvas = this.shadowRoot.querySelector("canvas");
    const svgc = this.shadowRoot.querySelector("svg");
    const ctx = canvas.getContext("2d");
    let svg_content = this.resize_svg("400", "300");

    let v = Canvg.fromString(ctx, svg_content);

    v.start();
    // await new Promise((r) => setTimeout(r, 300));
    //  svgc.style.display = "none";
  }
  async export_svg_to_img(e) {
    let btn_size = e.target.id;
    const canvas = this.shadowRoot.querySelector("canvas");
    const svg = this.shadowRoot.querySelector("svg");
    let svg_content = this.resize_svg("400", "300");
    const ctx = canvas.getContext("2d");

    let v = Canvg.fromString(ctx, svg_content);

    v.start();
    await new Promise((r) => setTimeout(r, 2000));

    var link = this.shadowRoot.getElementById("link");
    link.style.display = "none";
    var filename = this.contact ? this.contact : this.get_color_hashtag();
    link.setAttribute("download", filename + ".png");
    link.setAttribute(
      "href",
      canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
    );
    link.click();

    var item = {
      contact: this.contact,
      color: this.get_color_hashtag(),
      time: new Date().toLocaleString(),
    };
    localStorage.setItem(
      "complete_checkin_" + this.uuidv4(),
      JSON.stringify(item)
    );
  }
  contact_changed(e) {
    this.contact = e.target.value;
  }
  contact = "";
  resize_svg(width, height) {
    const svg = this.shadowRoot.querySelector("svg");
    var cloned_svg = svg.cloneNode(true);
    cloned_svg.setAttribute("width", width);
    cloned_svg.setAttribute("height", height);
    var s = new XMLSerializer();
    var str = s.serializeToString(cloned_svg);

    return str;
  }
  get_hash_tags() {
    const h1 = "#birthday";
    const h5 = "#birthdayhood #zand_games";
    const h2 = `#${new Date().getFullYear()}_${BirthdayStore.monthName.toLowerCase()}_${
      BirthdayStore.day
    }`;

    const h3 = `#${BirthdayStore.day}_${BirthdayStore.monthName.toLowerCase()}`;

    return `${h1} ${this.get_hash_birthday()} ${this.get_feeling_hashtag()} ${this.get_color_hashtag()}  ${h3} ${h2} ${h5}`;
  }
  uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  get_hash_birthday() {
    return `#${BirthdayStore.year}_${BirthdayStore.monthName.toLowerCase()}_${
      BirthdayStore.day
    }`;
  }
  get_color_hashtag() {
    return `#${BirthdayStore.avgcolor
      .split(" ")
      .join("")
      .split(",")
      .join("_")}`;
  }
  get_feeling_hashtag() {
    return `#${BirthdayStore.age}_${BirthdayStore.emoji}_${BirthdayStore.shape}`;
  }

  static get styles() {
    return css`
      .contact {
        background-color: #e7edeb;
        border: none;
        color: black;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }
      .wrapper {
        color: white;
        padding-right: 3%;
        padding-left: 3%;
        margin: 0;
        width: 94%;
        background-color: rgb(91 93 96);
        border-radius: 30px;
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        border: solid 2px white;
        font-family: "Work Sans", sans-serif;
      }

      h3 {
        margin: 10px 14px 10px 0;
        font-weight: 300;
        font-size: 1.2em;
      }

      p {
        margin: 10px 10px;
        font-weight: 300;
        font-size: 14px;
        opacity: 0.8;
        letter-spacing: 1px;
      }

      input {
        border: none;
        border-radius: 12px;
        padding: 16px 20px;
        margin: 8px;
        width: 100%;
        color: #363232;
        font-family: "Work Sans", sans-serif;
        font-size: 16px;
        outline: none;
      }
      @media only screen and (min-width: 600px) and (orientation: landscape) {
        svg {
          width: 55%;
        }
      }
      .button {
        margin: 5px;
        border: none;
        color: white;
        padding: 10px 25px;
        text-align: center;
        text-decoration: none;
        border-radius: 15px;
        font-size: 16px;
      }
      .btncontainer {
        margin-left: 20px;
      }
      .twitter {
        background-color: rgb(92 102 108);
      }
      .instagram {
        background-color: rgb(131 124 129);
      }
      button:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    `;
  }
}
customElements.define("birthday-result", BirthdayResult);
