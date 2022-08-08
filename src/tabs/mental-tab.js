import { LitElement, html } from 'lit';
import { BaseComponent } from '../baseComponent';


export class MentalTab extends BaseComponent {

    constructor() {
        super();



    }


    render() {

        return html`
  
        <div class="tab">
        <h6>How was your mental and emotional state last year?</h6>
        <p>
            <!-- <input placeholder="Name..." oninput="this.className = ''" name="fname"> -->            
            
        </p>
        </div>
    `;

    }

}


customElements.define('mental-tab', MentalTab);
