export default class Store {
  constructor() {
    if (Store._instance) {
      return Store._instance;
    }
    Store._instance = this;

    this.name = "";
    this.bodyColor = "";
    this.mentalColor = "";
    this.jobColor = "";
    this.socialColor = "";
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.lostColor = "255;255;255;1";
    this.shape = "";
  }
}

export let BirthdayStore = new Store();

export function validate(tab) {
  switch (tab) {
    case 0:
      //if(BirthdayStore.name=="" || BirthdayStore.)
      break;

    default:
      break;
  }
}
