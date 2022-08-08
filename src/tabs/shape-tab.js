import { LitElement, html, css } from "lit";
import { BaseComponent } from "../baseComponent";

export class ShapeTab extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="tab">
        <h6>Select a shape for your last year</h6>
        <div class="shapescontainer">
          <img
            width="82"
            shape="circle"
            height="82"
            src="../assets/circle.png"
            @onclick="${this.onchange}"
          />
        </div>

        <div class="shapescontainer">
          <img
            width="82"
            shape="triangle"
            height="82"
            src="../assets/tri.png"
          />
        </div>
        <div class="shapescontainer">
          <img width="82" height="82" src="../assets/sq.png" />
        </div>
        <div class="shapescontainer">
          <img width="82" height="82" src="../assets/pent.png" />
        </div>
        <div class="shapescontainer">
          <img width="82" height="82" src="../assets/hex.png" />
        </div>
        <div class="shapescontainer">
          <img width="82" height="82" src="../assets/sq2.png" />
        </div>
        <div class="shapescontainer">
          <img width="82" height="82" src="../assets/star.png" />
        </div>
        <!-- <span class="dot"></span>
        <span class="triangle"></span>
        <span class="square"></span>
        <span class="pentagon"></span> -->
        <!-- <div class="cards">
          <div class="card"></div>
          <div class="card">TWO</div>
          <div class="card">THREE</div>
          <div class="card">FOUR</div>
          <div class="card">FIVE</div>
          <div class="card">SIX</div>
          <div class="card">SEVEN</div>
        </div>
      </div> -->
      </div>
    `;
  }
  onchanged(e) {
    console.log(e.target);
  }
  static get styles() {
    return css``;
  }
}

customElements.define("shape-tab", ShapeTab);
