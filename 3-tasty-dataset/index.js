import { foodJSON } from "./data.js";

const foods = JSON.parse(foodJSON);
// console.log(foods);

document.querySelector("ul").addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.nodeName === "LI") {
    // let code = e.target.dataset.code;
    // let taste = e.target.dataset.taste;
    // document.querySelector("#code-display").textContent = code;
    // document.querySelector("#taste").textContent = taste;
    // let foodImgs = imagesMatching(code);
    // document.querySelector("#images").replaceChildren();
    // document.querySelector("#images").append(...foodImgs);
  }
});

function imagesMatching(code) {
  let matchingFoods = foods.filter((food) => food.tasteCode === code);

  return matchingFoods.map((food) => {
    let img = document.createElement("img");
    img.src = `https://placehold.co/100x100?text=${food.name}`;
    img.dataset.code = food.tasteCode;
    return img;
  });
}
