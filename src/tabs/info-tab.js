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
        <h6>Your birthday</h6>
               <form>
        <div class="form-row">
    <div class="form-group col-md-6">      
      <input placeholder="Year" type="number" class="form-control" id="year">
    </div>
    <div class="form-group col-md-4">      
      <select id="inputState" class="form-control">
        <option  selected>Month...</option>
        <option>Jan</option>
        <option>Feb</option>
        <option>March</option>
        <option>Apr</option>
        <option>May</option>
      </select>
    </div>
    <div class="form-group col-md-2">      
      <input  placeholder="Day" type="number" class="form-control" id="day">
    </div>
  </div>
            </form>
        </div>
    `;

    }

}


customElements.define('info-tab', InfoTab);
