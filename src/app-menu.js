import "./app-store";
import { appStore } from "./app-store";
import { LitElement, html, css } from "lit";
import { BaseComponent } from "./baseComponent.js";
import { StoreSubscriber } from "lit-svelte-stores";
import "./birthday-app";
export class AppMenu extends BaseComponent {
  _store = new StoreSubscriber(this, () => appStore);
  constructor() {
    super();
  }
  menuClicked(e) {
    appStore.update((val) => {
      val.menu = e.target.id;
      console.log(val.menu);
      return val;
    });
  }
  render() {
    return html`
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#" data-abc="true">Zand.Games</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" data-abc="true"
                >Simple <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="complete"
                @click="${this.menuClicked}"
                href="#"
                data-abc="true"
                >Complete</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-abc="true">Koln</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-abc="true">Report</a>
            </li>
          </ul>
          <form
            onsubmit="event.preventDefault()"
            class="form-inline my-2 my-lg-0"
          >
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div>
        <birthday-app
          style="display:${this._store.value.menu == "complete"
            ? "inline"
            : "none"}"
        ></birthday-app>
      </div>
    `;
  }

  static get styles() {
    return css``;
  }
}

customElements.define("app-menu", AppMenu);
