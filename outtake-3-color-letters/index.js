import { DISPLAY, INPUT, RED, GREEN, BLUE } from "./elements.js";

INPUT.addEventListener("input", (event) => {
  let letter = event.data;
  let div = document.createElement("div");
  div.classList.add("display-text");
  div.textContent = letter;
  DISPLAY.append(div);
  console.log(letter);
});

RED.addEventListener("click", () => {
  document.querySelectorAll(".display-text").forEach((text) => {
    text.style.backgroundColor = "red";
  });
});

GREEN.addEventListener("click", () => {
  document.querySelectorAll(".display-text").forEach((text) => {
    text.style.backgroundColor = "green";
  });
});

BLUE.addEventListener("click", () => {
  document.querySelectorAll(".display-text").forEach((text) => {
    text.style.backgroundColor = "blue";
    text.style.color = "white";
  });
});
