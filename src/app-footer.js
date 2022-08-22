import { LitElement, html } from "lit";
import { BaseComponent } from "./baseComponent";

export class BirthdayFooter extends BaseComponent {
  constructor() {
    super();
  }

  render() {
    return html`
      <!-- <footer class="footer">
        <div class="containerfooter">
          <span class="text-light">
            © 2022
            <a class="footerlink" target="_blank" href="https://zand.games"
              >Zand.Games</a
            >, All rights reserved
          </span>
        </div>
      </footer> -->
      <footer class="footer">
        <span class="text-light">
          © 2022
          <a class="footerlink" target="_blank" href="https://zand.games"
            >Zand.Games</a
          >, All rights reserved
        </span>
      </footer>
    `;
  }
}

customElements.define("app-footer", BirthdayFooter);
