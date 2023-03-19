// Say we want to change the color, border radius, and text content of the div
// when it's clicked.

// 🤔 How?

document
  .querySelector("div")
  .addEventListener("click", (event) => roundify(event.target));

// If this type of modification was something we would want to
// do with multiple things, we should make a well-named function
// and use that.

function roundify(elem) {
  if (elem.textContent.length === 0) {
    elem.textContent = "woot";
  }
  elem.style.fontSize = "4em";
  elem.style.textAlign = "center";
  elem.style.border = "15px solid blue";
  elem.style.borderRadius = "30px";
  elem.style.backgroundColor = "#bada55";
}

document
  .querySelector("p")
  .addEventListener("click", (event) => roundify(event.target));
