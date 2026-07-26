console.log("hi");

// document.querySelector();
// document.querySelectorAll();
// emmet
//////////////////////////////////////

// UI Elements

const titleElement = document.querySelector("#main-title");
const paragraphElement = document.querySelector(".cool");
const bodyElement = document.querySelector("body");
const h2Element = document.createElement("h2");
const commentElements = document.querySelectorAll("li");
const btnEle = document.querySelector("button");

// Modify

paragraphElement.textContent = "woohooooooo!";
titleElement.style.textAlign = "center";
paragraphElement.style.border = "1px solid black";
h2Element.textContent = "comments section";
bodyElement.appendChild(h2Element);
commentElements.forEach((commentElements) => {
  console.log(commentElements.textContent);
});
commentElements.forEach((list, idx) => {
  list.style.fontSize = "30px";
  list.style.textAlign = "center";
  if ((idx + 1) % 2) {
    list.style.color = "yellow";
    list.style.backgroundColor = "red";
  } else {
    list.style.color = "red";
    list.style.backgroundColor = "yellow";
  }
});

if (btnEle.hasAttribute("disabled") === true) {
  btnEle.removeAttribute("disabled");
}

// LOGS
console.dir(titleElement);
console.dir(paragraphElement);
console.dir(bodyElement);
console.log(commentElements);
