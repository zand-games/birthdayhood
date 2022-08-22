import { LitElement, html, css } from "lit";
import { BaseComponent } from "../baseComponent";
export class ColorMood extends LitElement {
  dispatchInput(rgba_Value) {
    this.dispatchEvent(
      new CustomEvent("color_changed", {
        bubbles: true,
        detail: rgba_Value,
      })
    );
  }
  static get properties() {
    return {
      default: { type: String },
    };
  }

  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();

    var colorWheel = new iro.ColorPicker(
      this.shadowRoot.getElementById("colorWheel"),
      {
        // color: "#f00",
        width: 250,
        color: this.default ? "rgb(" + this.default + ")" : "rgb(255,255,255)",
        borderWidth: 1,
        borderColor: "#fff",
      }
    );
    // add color:change listener
    colorWheel.on("color:change", (color) => {
      this.dispatchInput(color.rgb.r + "," + color.rgb.g + "," + color.rgb.b);
    });
  }

  render() {
    return html` <div id="colorWheel"></div> `;
  }
}

customElements.define("color-mood", ColorMood);
