let colourIndex = 1;
const COLOURS = ["yellow", "blue", "green", "pink", "#bada55"];

const DIV = document.querySelector("div");
const INPUT = document.querySelector("input");

// An event handler.
function log(event) {
  console.log("target", event.target);
}

const makeBlue = function (event) {
  let color = COLOURS[colourIndex];
  colourIndex = (colourIndex + 1) % COLOURS.length;
  event.target.style.backgroundColor = color;
};

function capitalize(event) {
  console.log(event);
  let text = event.data.toUpperCase();
  event.target.value = text;
}

// 🤔 How do we make our DIV and INPUT elements
//    listen for clicks and log the resulting event?

DIV.addEventListener("click", (event) => {
  let color = COLOURS[colourIndex];
  colourIndex = (colourIndex + 1) % COLOURS.length;
  event.target.style.backgroundColor = color;
});

INPUT.addEventListener("input", capitalize);
