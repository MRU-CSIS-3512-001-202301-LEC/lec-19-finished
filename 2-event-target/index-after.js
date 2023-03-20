// Say we want to change the color, border radius, and text content of the div
// when it's clicked.

// 🤔 How?

document.querySelector("div").addEventListener("click", function (event) {
  roundify(event.target);
});

document
  .querySelector("p")
  .addEventListener("click", (event) => roundify(event.target));

// If this type of modification was something we would want to
// do with multiple things, we should make a well-named function
// and use that.

function roundify(elem) {
  if (elem.textContent.length === 0) {
    elem.textContent = "woot";
  }
  elem.classList.add("special");
}
