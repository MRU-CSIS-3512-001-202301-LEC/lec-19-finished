// Say we want to grab the <h1> for manipulation later on.

const H1 = document.querySelector("h1");

console.log(H1); // 🤔 What shows in the console? Why?

// 🤔 How do we fix this, traditionally? (2 common ways)
// 🤔 Why don't we need to do this when using type="module"?

// Say we had a number of DOM elements that get used a lot.
// 🤔 What could we do to make them available to every file that needed them?
