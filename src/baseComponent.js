import { LitElement } from "lit";

export class BaseComponent extends LitElement {
  createRenderRoot() {
    return this;
  }
  constructor() {
    super();
  }
}
