import { LitElement, html } from 'lit';
import { BaseComponent } from '../baseComponent';


export class lostTab extends BaseComponent {

    constructor() {
        super();



    }


    render() {

        return html`
  
        <div class="tab">
        <h6>Someone from your family, friends or relatives has died 1?</h6>
        <p>                  
        <input type="checkbox" data-toggle="switchbutton" checked data-onlabel="Ready" data-offlabel="Not Ready" data-onstyle="success" data-offstyle="danger">
        </p>
        </div>
    `;

    }

}


customElements.define('lost-tab', lostTab);
