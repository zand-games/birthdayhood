import { BirthdayStore } from "../store";
export function calculate_average_Color() {
  var allRGB = [
    parseInt(
      (Number(BirthdayStore.mentalColor.split(";")[0]) +
        Number(BirthdayStore.bodyColor.split(";")[0]) +
        Number(BirthdayStore.lostColor.split(";")[0]) +
        Number(BirthdayStore.socialColor.split(";")[0])) /
        4
    ),
    parseInt(
      (Number(BirthdayStore.mentalColor.split(";")[1]) +
        Number(BirthdayStore.bodyColor.split(";")[1]) +
        Number(BirthdayStore.lostColor.split(";")[1]) +
        Number(BirthdayStore.socialColor.split(";")[1])) /
        4
    ),
    parseInt(
      (Number(BirthdayStore.mentalColor.split(";")[2]) +
        Number(BirthdayStore.bodyColor.split(";")[2]) +
        Number(BirthdayStore.lostColor.split(";")[2]) +
        Number(BirthdayStore.socialColor.split(";")[2])) /
        4
    ),
  ];
  return allRGB;
}

export function calculate_current_age() {
  var today = new Date();
  var birthDate = new Date(
    BirthdayStore.year,
    BirthdayStore.month,
    BirthdayStore.day
  ); //Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
