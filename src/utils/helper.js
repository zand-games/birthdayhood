import { BirthdayStore } from "../store";
export function calculate_average_Color() {
  var avgcolor = [
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
  var rgb = String(
    "rgb(" + avgcolor[0] + "," + avgcolor[1] + "," + avgcolor[2] + ")"
  );
  return rgb;
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

export function create_result_svg() {
  // create the svg element
  const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // set width and height
  svg1.setAttribute("width", "480");
  svg1.setAttribute("height", "600");
  svg1.setAttribute("viewBox", "0 0 600 480");

  // get Calculated Data
  let shape = BirthdayStore.shape;
  let age = calculate_current_age();
  let color = calculate_average_Color();

  // Create Svg Shape
  const backg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  const tri = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const diamond = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  const penta = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const trapez = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const hegxa = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const star = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const shapeloc = "translate(160,250)";

  // add age to svg
  var newText = document.createElementNS("http://www.w3.org/2000/svg", "text");
  newText.setAttributeNS(null, "x", 350);
  newText.setAttributeNS(null, "y", 70);
  newText.setAttributeNS(null, "font-size", "80");

  var textNode = document.createTextNode(age);
  newText.appendChild(textNode);
  svg1.appendChild(newText);

  //create a shape
  switch (shape) {
    case "circle":
      circle.setAttribute("r", "120");
      circle.setAttribute("fill", color);
      circle.setAttribute("cx", "120");
      circle.setAttribute("cy", "120");
      circle.setAttribute("transform", "translate(160,250)");
      // attach it to the container
      svg1.appendChild(circle);

      break;
    case "triangle":
      tri.setAttribute(
        "d",
        "M 125.333 9.131 L 241.502 241.469 L 9.164 241.469 L 125.333 9.131 Z"
      );

      tri.setAttribute(
        "bx:shape",
        "triangle 9.164 9.131 232.338 232.338 0.5 0 1@6e8e17eb"
      );
      tri.setAttribute("fill", color);
      tri.setAttribute("cx", "120");
      tri.setAttribute("cy", "120");
      tri.setAttribute("transform", "translate(160,250)");
      svg1.appendChild(tri);

      break;
    case "diamond":
      diamond.setAttribute("x", 350);
      diamond.setAttribute("y", 100);
      diamond.setAttribute("width", 165);
      diamond.setAttribute("height", 165);
      diamond.setAttribute(
        "transform",
        "matrix(0.707107, 0.707107, -0.707107, 0.707107, 120.899485, -58.757852)"
      );
      diamond.setAttribute("fill", color);
      diamond.setAttribute("cx", "120");
      diamond.setAttribute("cy", "120");
      svg1.appendChild(diamond);
      break;
    case "penta":
      penta.setAttribute(
        "d",
        "m9.87002,97.1347l116.49985,-88.99785l116.50013,88.99785l-44.49889,144.00216l-144.00207,0l-44.49902,-144.00216z"
      );
      penta.setAttribute("fill", color);
      penta.setAttribute("transform", "translate(160,250)");
      svg1.appendChild(penta);
      break;
    case "trapez":
      trapez.setAttribute(
        "d",
        "m11.37499,234.30733l46.00001,-217.99998l184.00001,0l-46.00001,217.99998l-184.00001,0z"
      );
      trapez.setAttribute("fill", color);
      trapez.setAttribute("transform", "translate(160,250)");
      svg1.appendChild(trapez);
      break;
    case "hegxa":
      hegxa.setAttribute(
        "d",
        "M 125.037 11.495 L 227.711 69.727 L 227.711 186.192 L 125.037 244.425 L 22.363 186.193 L 22.363 69.727 Z"
      );

      hegxa.setAttribute(
        "transform",
        "matrix(0, -1, 1, 0, -2.923007, 252.996998)"
      );
      hegxa.setAttribute(
        "bx:shape",
        "n-gon 125.037 127.96 118.558 116.465 6 0 1@2d9c1985"
      );
      hegxa.setAttribute("fill", color);
      hegxa.setAttribute("transform", "translate(160,250)");
      svg1.appendChild(hegxa);
      break;
    case "star":
      star.setAttribute(
        "d",
        "M 124.855 11.495 L 165.54 80.08 L 242.409 98.141 L 190.685 158.59 L 197.508 238.337 L 124.855 207.111 L 52.202 238.337 L 59.025 158.59 L 7.301 98.141 L 84.17 80.08 Z"
      );

      star.setAttribute(
        "bx:shape",
        "star 124.855 136.89 123.604 125.395 0.56 5 1@8a77835f"
      );
      star.setAttribute("fill", color);
      star.setAttribute("transform", "translate(160,250)");
      svg1.appendChild(star);

      break;
  }

  // attach container to document
  document.getElementById("result").appendChild(svg1);
}
