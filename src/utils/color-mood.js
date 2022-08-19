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

  constructor() {
    super();
  }
  firstUpdated() {
    super.firstUpdated();
    var colorWheel = new iro.ColorPicker(
      this.shadowRoot.getElementById("colorWheel"),
      {
        // options here
      }
    );
    // add color:change listener
    colorWheel.on("color:change", (color) => {
      this.dispatchInput(
        color.rgb.r + ";" + color.rgb.g + ";" + color.rgb.b + ";" + "non-sense"
      );
    });
    colorWheel.color.hsl = { h: 100, s: 100, l: 100 };
  }

  render() {
    return html` <div id="colorWheel"></div> `;
  }
}

customElements.define("color-mood", ColorMood);
