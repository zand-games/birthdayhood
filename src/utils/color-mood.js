import { LitElement, html, css } from "lit";
export class ColorMood extends LitElement {
  dispatchInput(rgba_Value) {
    this.dispatchEvent(
      new CustomEvent("color_changed", {
        bubbles: true,
        detail: rgba_Value,
      })
    );
  }

  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
    let slider = this.shadowRoot.getElementById("colorslider");
    slider.addEventListener("change", (ev) => {
      let res = this.get_rgba(ev.target.value);
    });
  }

  render() {
    return html`
      <input id="colorslider" min="0" max="100" type="range" value="50" />
    `;
  }

  get_rgba(value) {
    let colorPicked = this.pickRgbRange(
      value,
      { color: [255, 0, 228, 1], position: 0 },
      { color: [0, 194, 255, 1, 1], position: 15 },
      { color: [35, 200, 0, 1], position: 35 },
      { color: [255, 250, 164], position: 50 },
      { color: [255, 0, 0, 1], position: 75 },
      { color: [0, 0, 0, 1], position: 100 }
    );

    this.dispatchInput(
      colorPicked[0] +
        ";" +
        colorPicked[1] +
        ";" +
        colorPicked[2] +
        ";" +
        colorPicked[3]
    );
    let resultRgba = `rgba(${colorPicked[0]},${colorPicked[1]},${colorPicked[2]},${colorPicked[3]})`;
    return resultRgba;
  }
  pickRgbRange(position, ...elements) {
    var [left, right, weight] = this.pickClosest(position, ...elements);
    return this.pickRgba(left.color, right.color, weight);
  }
  pickRgba(color1, color2, weight) {
    var w1 = weight;
    var w2 = 1 - w1;
    var rgba = [
      Math.round(color1[0] * w2 + color2[0] * w1),
      Math.round(color1[1] * w2 + color2[1] * w1),
      Math.round(color1[2] * w2 + color2[2] * w1),
      1,
    ];
    return rgba;
  }
  pickClosest(position, ...elements) {
    var left = elements[0],
      right = { color: [0, 0, 0], position: Number.MAX_VALUE };
    var leftIndex = 0;
    for (var i = 0; i < elements.length; i++) {
      if (position >= elements[i].position && position > left.position) {
        left = elements[i];
        leftIndex = i;
      }
    }
    if (elements.length - 1 === leftIndex) {
      right = elements[leftIndex];
    } else {
      right = elements[leftIndex + 1];
    }
    if (left == right) {
      return [right, right, 0];
    }
    var dleft = position - left.position;
    var sum = dleft + right.position - position;
    var weight = dleft / sum;
    return [left, right, weight];
  }
  static get styles() {
    return css`
      #colorslider {
        background: linear-gradient(
          90deg,
          rgb(255, 0, 228) 0%,
          rgb(0, 194, 255) 15%,
          rgb(35, 200, 0) 35%,
          rgb(255, 250, 164) 50%,
          rgb(255, 0, 0) 75%,
          rgb(0, 0, 0) 100%
        );
        border: solid 1px #000000;
        border-radius: 8px;
        height: 20px;
        width: 100%;
        outline: none;
        transition: background 450ms ease-in;
        -webkit-appearance: none;
      }
    `;
  }
}

customElements.define("color-mood", ColorMood);
