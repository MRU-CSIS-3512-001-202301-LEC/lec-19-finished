import { picData } from "../data/pic-data.js";
import { picsumImg } from "./helpers/picsum-helpers.js";

const picImgs = picData.map((pic) => picsumImg(pic));
document.querySelector("div").append(...picImgs);

function round(event) {
  event.target.classList.toggle("rounded");
}

document
  .querySelector(".photo-container")
  .addEventListener("click", function (event) {
    if (event.target.nodeName === "IMG") {
      event.target.classList.add("rounded");
    }
  });
