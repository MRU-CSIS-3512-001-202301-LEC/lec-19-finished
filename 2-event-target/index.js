// Say we want to change the color, border radius, and text content of the div
// when it's clicked. And to add the text "woot" if no text exists in the div.

// 🤔 How?

document.querySelector("div").addEventListener("click", () => {
  const theDiv = document.querySelector("div");
  if (theDiv.textContent.length === 0) {
    theDiv.textContent = "woot";
  }
  theDiv.classList.add("special");
});

// If this type of modification was something we would want to
// do with multiple things, we should make a well-named function
// and use that.
