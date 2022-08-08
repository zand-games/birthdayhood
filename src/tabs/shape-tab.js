import { LitElement, html,css } from 'lit';
import { BaseComponent } from '../baseComponent';


export class ShapeTab extends BaseComponent {
    constructor() {
        super();
    }

    render() {

        return html`
        <div class="tab">
        <h6>Select a shape for your last year</h6>
      
        <div class="wrapper">
            <div class="square"></div>
            <div class="triangle-up"></div>
            <div class="parallelogram"></div>
            <div class="circle"></div>
        </div>
        </div>
    `;

    }


    static get styles() {
        return css`
     
        `;
      }
}


customElements.define('shape-tab', ShapeTab);
