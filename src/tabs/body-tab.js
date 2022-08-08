import { LitElement, html } from 'lit';
import { BaseComponent } from '../baseComponent';


export class BodyTab extends BaseComponent {

    constructor() {
        super();



    }


    render() {

        return html`
  
        <div class="tab">
        <h6>How was last year in terms of you body? (Exercise, Nutrition, etc.)</h6>
        <p>
            <!-- <input placeholder="Name..." oninput="this.className = ''" name="fname"> -->            
            
        </p>
        </div>
    `;

    }

}


customElements.define('body-tab', BodyTab);
