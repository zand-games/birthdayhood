import { LitElement, html } from 'lit';
import { BaseComponent } from '../baseComponent';


export class JobTab extends BaseComponent {

    constructor() {
        super();



    }


    render() {

        return html`
  
        <div class="tab">
        <h6>How was your job?</h6>
        <p>
            <!-- <input placeholder="Name..." oninput="this.className = ''" name="fname"> -->            
            
        </p>
        </div>
    `;

    }

}


customElements.define('job-tab', JobTab);
