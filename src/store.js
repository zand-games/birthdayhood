export default class Store {
  constructor() {
    if (Store._instance) {
      return Store._instance;
    }
    Store._instance = this;

    this.name = "";

    this.bodyColor = "255,0,0";
    this.mentalColor = "0,191,255";
    this.jobColor = "238,0,255";
    this.socialColor = "163,255,33";
    this.lostColor = "150,150,150";

    this.year = 1980;
    this.month = 8;
    this.monthName = "Aug";
    this.day = 24;

    this.lost = false;

    this.shape = "triangle";
    this.emoji = "happy";

    this.age = 0;
    this.hashtag = "";
    this.wish = "a year full of health, love and fun";

    this.avgcolor = "255,255,255";
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
