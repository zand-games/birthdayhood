import { LitElement, html } from 'lit';
import { BaseComponent } from '../baseComponent';


export class SocialTab extends BaseComponent {

    constructor() {
        super();
    }


    render() {

        return html`
  
        <div class="tab">
        <h6>How were your social relationships in general? (family, friends, community, colleagues)</h6>
        <p>
            <!-- <input placeholder="Name..." oninput="this.className = ''" name="fname"> -->            
            
        </p>
        </div>
    `;

    }

}


customElements.define('social-tab', SocialTab);
