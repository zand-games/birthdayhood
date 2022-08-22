import { writable } from "svelte/store";

export class Person_Full_Checkin {
  bodyColor = "255,0,0";
  mentalColor = "0,191,255";
  jobColor = "238,0,255";
  socialColor = "163,255,33";
  lostColor = "150,150,150";
  name = "";
  id = "";
}

export class Person_Color_Checkin {
  color = "255,0,0";
  name = "";
  id = "";
}

export class AppStore {
  constructor() {
    this.Person_Full_Checkin = new Person_Full_Checkin();
    this.PeopleFullCheckin = [];
    this.Person_Color_Checkin = new Person_Color_Checkin();
    this.People_Color_Checkin = [];
    this.menu = "complete";
  }
}

export let appStore = writable(new AppStore());
