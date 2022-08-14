import { BirthdayStore } from "../store";

function get_average(items) {
  let r = 0,
    g = 0,
    b = 0;
  items.forEach((element) => {
    r += Number(element.split(";")[0]);
    g += Number(element.split(";")[1]);
    b += Number(element.split(";")[2]);
  });
  return `${Math.round(r / items.length)}, ${Math.round(
    g / items.length
  )}, ${Math.round(b / items.length)}`;
}

function calculate_current_age() {
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

function get_comma_format_color(element) {
  return `${element.split(";")[0]} , ${element.split(";")[1]}, ${
    element.split(";")[2]
  }`;
}

export function calculate_result_data() {
  const list_of_colors = [
    BirthdayStore.mentalColor,
    BirthdayStore.bodyColor,
    BirthdayStore.socialColor,
    BirthdayStore.jobColor,
  ];
  const _avg_color =
    BirthdayStore.lost == false
      ? get_average(list_of_colors)
      : get_average([...list_of_colors, BirthdayStore.lostColor]);

  BirthdayStore.avgcolor = _avg_color;

  BirthdayStore.bodyColorResult = get_comma_format_color(
    BirthdayStore.bodyColor
  );
  BirthdayStore.socialColorResult = get_comma_format_color(
    BirthdayStore.socialColor
  );
  BirthdayStore.lostColorResult = get_comma_format_color(
    BirthdayStore.lostColor
  );
  BirthdayStore.jobColorResult = get_comma_format_color(BirthdayStore.jobColor);
  BirthdayStore.mentalColorResult = get_comma_format_color(
    BirthdayStore.mentalColor
  );

  BirthdayStore.age = calculate_current_age();
}
