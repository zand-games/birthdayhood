export default class Store {
  constructor() {
    if (Store._instance) {
      return Store._instance;
    }
    Store._instance = this;

    this.name = "";
    this.bodyColor = "";
    this.mentalColor = "123;250;92;1";
    this.jobColor = "";
    this.socialColor = "";
    this.year = 0;
    this.month = 0;
    this.day = 0;

    this.lostColor = "255;255;255;1";
    this.lost = true;
    this.shape = "circle";
    this.emoji = "happy";

    this.age = 45;
    this.hashtag = "37_blue_diamond";
    this.wish = "let's build build build build a team together";

    this.agvcolor = "65,132,40";
    this.mentalColorResult = "33,40,92";
    this.jobColorResult = "32,17,145";
    this.socialColorResult = "92,170,220";
    this.lostColorResult = "250,100,100";
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
