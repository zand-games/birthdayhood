import { LitElement, html } from "lit";

export class ExportData extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <button
        class="btn btn-outline-secondary btn-sm"
        id="exportHistory"
        @click="${this.exportHistory}"
      >
        Export History
      </button>

      <a id="exportHistoryLink" style="display: none;">Export</a>
    `;
  }
  todayDate() {
    return new Date().toLocaleString();
  }
  exportHistory() {
    console.log("started");
    var _myArray = JSON.stringify(localStorage, null, 4); //indentation in json format, human readable

    //Note: We use the anchor tag here instead button.
    var vLink = this.shadowRoot.getElementById("exportHistoryLink");

    var vBlob = new Blob([_myArray], { type: "octet/stream" });
    var vName = "working_history_" + this.todayDate() + ".json";
    var vUrl = window.URL.createObjectURL(vBlob);
    console.log(vLink);

    vLink.setAttribute("href", vUrl);
    vLink.setAttribute("download", vName);

    //Note: Programmatically click the link to download the file
    vLink.click();

    console.log("finished");
  }
}

customElements.define("export-data", ExportData);
