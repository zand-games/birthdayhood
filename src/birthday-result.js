import { html, css, LitElement } from "lit";
import { BaseComponent } from "./baseComponent";
import { BirthdayStore } from "./store";
import { Canvg } from "https://cdn.skypack.dev/canvg";
export class BirthdayResult extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <svg
        class="svg_result"
        viewBox="0 0 675 1200"
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

        <g id="header" transform="translate(15,20),scale(2.3)">
          <image
            x="0"
            y="5"
            height="56"
            width="200"
            href="./assets/birthdayhood.png"
          />
        </g>
        <g id="age_candle" transform="translate(0,30),scale(2.3)">
          <image
            x="220"
            y="14"
            width="42"
            height="42"
            href="./assets/${String(BirthdayStore.age)[0]}.png"
          />
          <image
            x="248"
            y="14"
            width="42"
            height="42"
            visibility="${BirthdayStore.age > 10 ? "visible" : "hidden"}"
            href="./assets/${String(BirthdayStore.age)[1]}.png"
          />
        </g>

        <g id="body" transform="translate(0,100),scale(2.3)">
          <clipPath id="d">
            <path transform="scale(.24)" d="M0 0h754.167v1636.105H0z" />
          </clipPath>
          <g
            clip-path="url(#d)"
            transform="matrix(2.287356, 0, 0, 1.955869, 196.42923, -15.233648)"
            style=""
          >
            <clipPath id="e">
              <path transform="scale(.24)" d="M0 0h754.167v1636.105H0z" />
            </clipPath>
            <g clip-path="url(#e)">
              <clipPath id="f">
                <path
                  transform="scale(.24)"
                  d="M60.998 49.893h92.01v82.612h-92.01z"
                />
              </clipPath>
              <g clip-path="url(#f)">
                <clipPath id="g">
                  <path
                    transform="scale(.24)"
                    d="m90.204 58.909.566.205.322-.544c2.89-4.892 7.876-7.848 13.228-7.844 5.857 0 11.143 3.51 13.862 9.015l.37.749.68-.416a12.537 12.537 0 0 1 6.556-1.854c7.411 0 13.419 6.524 13.419 14.572 0 .628-.037 1.25-.11 1.866l-.084.713.638.194c7.388 2.246 12.59 9.589 12.59 18.044 0 7.8-4.431 14.701-11.018 17.475l-.504.212.015.587c.004.153.006.307.006.46 0 8.738-6.523 15.821-14.568 15.821-2.805.006-5.55-.873-7.905-2.528l-.607-.428-.428.635c-2.74 4.08-7.112 6.49-11.762 6.485-5.03.004-9.704-2.812-12.363-7.447l-.374-.65-.626.35a15.01 15.01 0 0 1-7.34 1.918c-8.892 0-16.101-7.829-16.101-17.486 0-2.158.36-4.262 1.053-6.234l.25-.714-.632-.333c-4.632-2.434-7.573-7.531-7.572-13.12 0-7.354 5.045-13.53 11.701-14.453l.76-.106-.096-.824a14.605 14.605 0 0 1-.097-1.686c0-7.358 5.492-13.323 12.268-13.323 1.343 0 2.657.234 3.903.689z"
                  />
                </clipPath>
              </g>
            </g>
          </g>
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
            <g clip-path="url(#clip-2)">
              <path
                transform="matrix(.48267 0 0 .48358 129.543 67.086)"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill=""
                stroke="rgb(${BirthdayStore.socialColor})"
                d="M11.52 0H5.71s-.67 0-1.39.22c0 0-.72.21-1.44 1.44 0 0-.72 1.22-1.38 2.55 0 0-.67 1.33-1.03 2.16 0 0-.36.83-.41 1.5 0 0-.06.66-.06 1.19 0 0 0 .52.11 1.71 0 0 .11 1.18.83 3.22 0 0 .72 2.03 1.94 3.13 0 0 1.22 1.1 2 2.27 0 0 .77 1.17 1.19 1.75 0 0 .41.57.93 1.13 0 0 .52.56 1.86.67 0 0 1.33.1 3.02-.17 0 0 1.69-.27 3.19-1.8 0 0 1.49-1.53 2.72-3.27 0 0 1.22-1.75 1.44-3.13 0 0 .21-1.39.27-2.16 0 0 .05-.78.3-1.19 0 0 .25-.42.25-.72 0 0 0-.31-.57-.36 0 0-.58-.06-2.42-.06h-3.57s-1.75 0-2.88.11c0 0-1.14.11-1.97 1.37 0 0-.83 1.26-1.85 5.49 0 0-1.03 4.23-1.95 8.3 0 0-.92 4.06-1.08 7.39 0 0-.16 3.33-.05 4.88 0 0 .11 1.55.99 1.71 0 0 .88.16 3.13-.3 0 0 2.25-.47 4.56-1.58 0 0 2.3-1.12 3.44-1.7 0 0 1.13-.58 1.46-1.3 0 0 .32-.72 1.29-1.8 0 0 .97-1.08 2.25-2.41 0 0 1.28-1.33 2.05-2.52 0 0 .77-1.19 1.13-2.57 0 0 .36-1.39.42-2.66 0 0 .05-1.28.11-1.75 0 0 .05-.47.2-.52 0 0 .14-.06-.36-.06h-1.34"
              />
            </g>
          </g>
          <g opacity="1" transform="matrix(1, 0, 0, 1, -10.594479, 199.195526)">
            <clipPath id="m">
              <path d="M0 0h199v173H0z" fill-rule="evenodd" />
            </clipPath>
            <g
              clip-path="url(#m)"
              visibility="${BirthdayStore.lost == true ? "visible" : "hidden"}"
            >
              <path
                opacity="0.5"
                transform="matrix(.86188 0 0 .86083 143.957 54.726),translate(10,5)"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                stroke="rgb(${BirthdayStore.lostColor})"
                d="M18 1.44H1.24s-.52 0-.82.06c0 0-.31.05-.36.47 0 0-.06.41-.06 1.44 0 0 0 1.02.06 2.41 0 0 .05 1.38.47 2.71 0 0 .41 1.33 1.54 2.22 0 0 1.13.88 2.97 1.85 0 0 1.84.97 3.08 1.69 0 0 1.24.72 2.27 1.14 0 0 1.02.41 1.8.72 0 0 .77.3 1.6.36 0 0 .83.05 2.06.05h1.99s.77 0 1.18-.05c0 0 .42-.06.78-.31 0 0 .36-.25.67-.41 0 0 .3-.16.25-.66 0 0-.05-.51-.82-.62 0 0-.78-.11-2.31 0 0 0-1.53.11-2.66.67 0 0-1.14.55-1.8.97 0 0-.67.41-.83.72 0 0-.17.3-.42.41 0 0-.25.11-.46.42 0 0-.22.3-.98.77 0 0-.76.47-.92 1.44 0 0-.16.97-.16 2 0 0 0 1.02.16 1.91 0 0 .16.88 1.08 2 0 0 .92 1.11 2 1.33 0 0 1.08.21 2.11.21H27.31s.66 0 1.18-.05c0 0 .53-.06 1.34-.47 0 0 .81-.41.97-1.49 0 0 .16-1.08.16-2.77 0 0 0-1.7.06-3.28 0 0 .05-1.59.3-2.22 0 0 .25-.63.36-1.45 0 0 .11-.83.42-2.31 0 0 .3-1.48.66-2.3 0 0 .36-.83.66-1.25 0 0 .31-.41.36-.77 0 0 .06-.36.12-.66 0 0 .05-.31.3-.47 0 0 .25-.17.31-.72 0 0 .05-.56.05-1.08 0 0 0-.53-.05-1.34 0 0-.06-.81-.31-1.02 0 0-.25-.22-.36-.47 0 0-.11-.25-.42-.41 0 0-.3-.17-.76-.67 0 0-.47-.5-1.33-.61 0 0-.87-.11-1.34-.11 0 0-.47 0-.77-.05 0 0-.31-.06-.42-.31 0 0-.11-.25-.41-.36 0 0-.31-.11-.67-.36 0 0-.36-.25-.88-.3 0 0-.52-.06-1.8-.06h-4.41s-.58 0-1.13.06c0 0-.56.05-.67.36l-.11.3"
                transform="translate(10,10)"
              />
            </g>
          </g>

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

          <path
            opacity="1"
            stroke-width="30"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            stroke="rgb(${BirthdayStore.jobColor})"
            d="M 253.832 208.873 L 249.587 208.873 C 249.587 208.873 249.027 208.873 248.455 208.896 C 248.455 208.896 247.879 208.916 247.732 209.098 C 247.732 209.098 247.584 209.277 247.37 209.712 C 247.37 209.712 247.152 210.147 247.012 210.373 C 247.012 210.373 246.872 210.594 246.852 210.874 C 246.852 210.874 246.829 211.154 246.829 211.53 L 246.829 216.287 C 246.829 216.287 246.829 216.426 246.852 216.59 C 246.852 216.59 246.872 216.749 247.055 217.009 C 247.055 217.009 247.233 217.266 247.712 217.526 C 247.712 217.526 248.187 217.783 248.673 217.923 C 248.673 217.923 249.155 218.062 249.813 218.086 C 249.813 218.086 250.47 218.105 251.128 218.105 L 257.636 218.105 C 257.636 218.105 257.796 218.105 258.014 218.066 C 258.014 218.066 258.232 218.023 258.294 217.829 C 258.294 217.829 258.356 217.631 258.454 217.507 C 258.454 217.507 258.551 217.378 258.574 216.947 C 258.574 216.947 258.593 216.512 258.593 216.17 L 258.593 214.911 C 258.593 214.911 258.593 214.705 258.555 214.468 C 258.555 214.468 258.512 214.231 258.294 214.048 C 258.294 214.048 258.076 213.866 257.913 213.652 C 257.913 213.652 257.753 213.434 257.636 213.349 C 257.636 213.349 257.516 213.263 257.497 213.05 C 257.497 213.05 257.473 212.832 257.473 212.669 L 257.473 212.35 C 257.473 212.35 257.473 212.187 257.454 211.95 C 257.454 211.95 257.43 211.713 257.333 211.53 C 257.333 211.53 257.236 211.348 257.193 211.091 C 257.193 211.091 257.15 210.831 257.053 210.574 C 257.053 210.574 256.956 210.314 256.936 210.155 C 256.936 210.155 256.913 209.992 256.913 209.809 L 256.913 208.033"
            style=""
            transform="matrix(0.999992, 0.003922, -0.003922, 0.999992, 0.8376, -0.989494)"
          />
          <g
            clip-path="url(#clip-1)"
            transform="matrix(1, 0, 0, 1, -44.854973, -49.247211)"
          >
            <clipPath id="clip-3">
              <path
                transform="matrix(.06823 0 0 .06815 70.907 219.141)"
                d="M196.052 125.659V154.2s-31.64.93-40.291 31.235a138.955 138.955 0 0 1-4.484 13.529c-2.891 7.22-5.781 20.216 2.89 33.212l-29.23 38.624a47.505 47.505 0 0 0-9.395 14.1c-10.289 23.1 6.8 49.124 32.087 49.124h138.4c3.416 0 6.787-.386 10.114-1.16a44.49 44.49 0 0 0 9.59-3.42 44.492 44.492 0 0 0 8.563-5.505 44.494 44.494 0 0 0 7.095-7.302 44.493 44.493 0 0 0 5.255-8.72 44.492 44.492 0 0 0 3.143-9.683c.677-3.348.966-6.73.867-10.144a44.493 44.493 0 0 0-1.454-10.076c-4.767-18.084-11.893-38.435-22.513-57.671-3.13-5.63-4.818-11.664-5.068-18.1-.507-14.277-7.613-42.131-53.6-51.117l1.734-47-53.703 21.533z"
              />
            </clipPath>
            <clipPath id="v">
              <path
                transform="matrix(.06823 0 0 .06815 70.907 219.141)"
                d="M160.937 7.1s17.186 17.716 68.247 18.8c4.283.107 8.047 1.559 11.291 4.357 3.245 2.797 5.235 6.306 5.971 10.527a250.552 250.552 0 0 1 3 67.907c-.45 4.642-2.343 8.593-5.679 11.852-3.336 3.26-7.329 5.06-11.98 5.404l-46.01 3.453a28.901 28.901 0 0 1-6.768-.282 28.9 28.9 0 0 1-6.518-1.844 28.901 28.901 0 0 1-5.913-3.306 28.901 28.901 0 0 1-4.984-4.587 28.9 28.9 0 0 1-3.784-5.619 28.901 28.901 0 0 1-2.377-6.343 28.9 28.9 0 0 1-.841-6.722c-.017-2.273.23-4.518.741-6.733 2.225-9.482 6.198-18.165 11.918-26.049l-1.891-18.54s-11.532-3.317-12.585-15.849l12.585.737S152.091 24.9 160.937 7.1z"
              />
            </clipPath>
          </g>
          <clipPath id="s">
            <path
              transform="scale(.24)"
              d="M789.134 965.44H885.8v96.548h-96.665z"
              fill-rule="evenodd"
            />
          </clipPath>
          <g
            clip-path="url(#s)"
            transform="matrix(1, 0, 0, 1, 51.91489, -30.500818)"
          ></g>
          <clipPath id="clip-4">
            <path
              transform="scale(.24)"
              d="M89.643 1258.88h205.786v205.537H89.643z"
              fill-rule="evenodd"
            />
          </clipPath>
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
              x="5"
              y="183"
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
            <image
              x="225"
              y="195"
              width="68"
              height="38"
              href="./assets/titles/work.png"
            />
            <image
              x="206"
              y="85"
              width="62"
              height="32"
              href="./assets/titles/social.png"
            />
            <image
              visibility="${BirthdayStore.lost == true ? "visible" : "hidden"}"
              x="130"
              y="250"
              width="62"
              height="32"
              href="./assets/titles/lost.png"
            />
            <image
              visibility="${BirthdayStore.lost == false ? "visible" : "hidden"}"
              x="130"
              y="255"
              width="72"
              height="51"
              href="./assets/titles/nolost.png"
            />
          </g>
        </g>

        <g id="wish_group" transform="translate(10,180),scale(2.3)">
          <text
            style="fill: #656563; font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 13px;background:red"
            text-anchor="start"
            y="310"
            x="76"
          >
            ${BirthdayStore.wish}
          </text>
          <image
            x="3"
            y="295"
            height="19"
            width="70"
            href="./assets/titles/iwish.png"
          />
        </g>
        <g id="footer" transform="scale(2.4)">
          <g id="footer_zand" transform="translate(-20,95)">
            <text
              style="fill: #656563; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 9.3px;"
              x="215.371"
              y="394.767"
            >
              http://zand.games
            </text>
          </g>
          <g id="footer_hashtag" transform="translate(10,80)">
            <text
              style="fill: #656563; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 10px"
              x="7"
              y="366"
            >
              ${this.get_hash_birthday()}
            </text>
            <text
              style="fill: #656563; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 10px"
              x="7"
              y="381"
            >
              ${this.get_color_hashtag()}
            </text>
            <text
              style="fill: #656563; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: 10px;"
              x="7"
              y="396"
            >
              ${this.get_feeling_hashtag()}
            </text>
          </g>
        </g>

        <!-- </g> -->
      </svg>
    `;
  }
  async export_svg_to_img(e) {
    let btn_size = e.target.id;
    const canvas = this.shadowRoot.querySelector("canvas");
    const svg = this.shadowRoot.querySelector("svg");
    let svg_content = "";
    switch (btn_size) {
      case "insta_story":
        svg_content = this.resize_svg("1080", "1920");
        break;

      case "insta_post":
        svg_content = this.resize_svg("1080", "1080");
        break;

      case "twitter":
        svg_content = this.resize_svg("450", "900");
        break;
    }
    const ctx = canvas.getContext("2d");

    let v = Canvg.fromString(ctx, svg_content);

    v.start();
    await new Promise((r) => setTimeout(r, 2000));

    var link = this.shadowRoot.getElementById("link");
    link.style.display = "none";
    link.setAttribute("download", "birdayhood.png");
    link.setAttribute(
      "href",
      canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
    );
    link.click();
    v.stop();
  }
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
