export default class Store {
  constructor() {
    if (Store._instance) {
      return Store._instance;
    }
    Store._instance = this;

    this.name = "";
    this.bodyColor = "255;250;164;1";
    this.mentalColor = "255;250;164;1";
    this.jobColor = "255;250;164;1";
    this.socialColor = "255;250;164;1";
    this.year = 1980;
    this.month = 8;
    this.monthName = "Aug";
    this.day = 24;

    this.lostColor = "150;150;150;1";
    this.lost = false;
    this.shape = "triangle";
    this.emoji = "happy";

    this.age = 0;
    this.hashtag = "37_blue_diamond";
    this.wish = "a year full of health, love and fun";

    this.avgcolor = "255,255,255";
    this.mentalColorResult = "33,40,92";
    this.jobColorResult = "32,17,145";
    this.socialColorResult = "192,170,220";
    this.lostColorResult = "100,100,100";
    this.bodyColorResult = "185,270,10";
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
