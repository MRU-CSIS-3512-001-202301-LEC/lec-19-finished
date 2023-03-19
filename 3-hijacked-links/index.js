document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.nodeName === "A") {
    let code = e.target.dataset.code;
    let taste = e.target.dataset.taste;

    document.querySelector("#code-display").textContent = code;
    document.querySelector("#taste").textContent = taste;
  }
});
