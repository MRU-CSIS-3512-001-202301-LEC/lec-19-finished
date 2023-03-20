document
  .querySelector("form")
  .addEventListener("submit", (event) => event.preventDefault());

document
  .querySelector("input#name")
  .addEventListener("keypress", (event) => event.preventDefault());
