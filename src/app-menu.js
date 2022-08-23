import "./app-store";
import { appStore } from "./app-store";
import { LitElement, html, css } from "lit";
import { BaseComponent } from "./baseComponent.js";
import { StoreSubscriber } from "lit-svelte-stores";
import "./birthday-app";
import "./person-simple";
import "./export-data";
export class AppMenu extends BaseComponent {
  _store = new StoreSubscriber(this, () => appStore);
  store2 = new StoreSubscriber(this, () => {
    this.update_shoede();
  });

  update_shoede() {
    return;
    var container = document.getElementById("container_app");
    // alert(123);
    if (this._store.value.menu == "complete") {
      var birthday_app = document.createElement("birthday-app");
      if (container) container.replaceChildren(birthday_app);
    } else {
      var simple = document.createElement("person-simple");
      if (container) container.replaceChildren(simple);
    }
  }
  constructor() {
    super();
  }

  static get template() {
    return alert(this._store.val.menu);
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
              <a
                class="nav-link"
                id="simple"
                href="#"
                data-abc="true"
                @click="${this.menuClicked}"
                >Feeling</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="complete"
                @click="${this.menuClicked}"
                href="#"
                data-abc="true"
                >Color-Mood</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="${this.menuClicked}"
                id="export"
                class="nav-link"
                href="#"
                data-abc="true"
                >Export</a
              >
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div id="${this._store.value.menu}"></div>
        <div id="container_app"></div>
        <birthday-app
          style="display:${this._store.value.menu == "complete"
            ? "inline"
            : "none"}"
        ></birthday-app>

        <person-simple
          style="display:${this._store.value.menu == "simple"
            ? "inline"
            : "none"}"
        ></person-simple>

        <export-data
          style="display:${this._store.value.menu == "export"
            ? "inline"
            : "none"}"
        ></export-data>
      </div>
    `;
  }

  static get styles() {
    return css``;
  }
  firstUpdated() {
    super.firstUpdated();
  }
}

customElements.define("app-menu", AppMenu);
