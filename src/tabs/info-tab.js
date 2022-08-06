import { LitElement, html } from 'lit';
import { BaseComponent } from '../baseComponent';


export class InfoTab extends BaseComponent {

    constructor() {
        super();



    }


    render() {

        return html`
  
        <div class="tab">
        <h6>What's your name?</h6>
        <p>
            <input placeholder="Name..." oninput="this.className = ''" name="fname">
        </p>

        </div>
    `;

    }

}


customElements.define('info-tab', InfoTab);
