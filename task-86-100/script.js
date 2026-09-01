// TASK 1
// 1
console.log(document.getElementById("elzero"));

// 2
console.log(document.getElementsByClassName("element")[0]);

// 3
console.log(document.getElementsByTagName("div")[0]);

// 4
console.log(document.getElementsByName("js")[0]);

// 5
console.log(document.querySelector("#elzero"));

// 6
console.log(document.querySelector(".element"));

// 7
console.log(document.querySelector("[name='js']"));

// 8
console.log(document.querySelector("div"));

// 9
console.log(document.querySelectorAll("#elzero")[0]);

// 10
console.log(document.querySelectorAll(".element")[0]);

// 11
console.log(document.querySelectorAll("[name='js']")[0]);

// 12
console.log(document.querySelectorAll("div")[0]);

// 13
console.log(document.body.firstElementChild);

// 14
console.log(document.body.children[0]);

// 15
console.log(document.all.elzero);

// task 2
document.querySelectorAll("img").forEach((img) => {
  img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  img.alt = "Elzero Logo";
});

// task 3
let dollarInputs = document.querySelector("input[name='dollar']");
let result = document.querySelector(".result");

dollarInputs.onkeyup = function () {
  let dollar = dollarInputs.value;
  let pound = dollar * 50;
  result.innerHTML =
    dollar + " USD Dollar = " + pound.toFixed(2) + " Egyptian Pound";
};
// task 4
let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");

let content = divOne.textContent;
let title = divOne.title;

divOne.textContent = divTwo.textContent;
divOne.title = divTwo.title;

divTwo.textContent = content;
divTwo.title = title;

divTwo.innerHTML += " " + document.querySelectorAll("div").length;
// task 5
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach((img) => {
    img.alt = img.hasAttribute("alt") ? "Old" : "Elzero New";
  });
});

// TASK 6

let form = document.querySelector(".create-form");

let elementsInput = document.querySelector("[name='elements']");
let textInput = document.querySelector("[name='texts']");
let typeInput = document.querySelector("[name='type']");
let results = document.querySelector(".results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  results.innerHTML = "";

  let number = elementsInput.value;
  let text = textInput.value;
  let type = typeInput.value;

  for (let i = 1; i <= number; i++) {
    let element = document.createElement(type);

    element.className = "box";
    element.title = "Element";
    element.id = `id-${i}`;
    element.textContent = text;

    results.appendChild(element);
  }
});

// TASK 7
// window.onload = () => {
//   document.querySelectorAll("a").forEach((link) => {
//     if (link.classList.contains("open") && link.textContent === "Elzero") {
//       link.click();
//     }
//   });
// };

// TASK 8
let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".current");
let classList = document.querySelector(".class-list");

function showClasses() {
  classList.innerHTML = "";

  let classes = Array.from(currentElement.classList);

  if (classes.length === 0) {
    classList.textContent = "No Classes To Show";
    return;
  }

  classes.sort();

  classes.forEach(function (className) {
    let span = document.createElement("span");

    span.textContent = className;

    classList.appendChild(span);
  });
}

addInput.addEventListener("blur", function () {
  if (addInput.value.trim() !== "") {
    let classes = addInput.value.trim().toLowerCase().split(" ");

    classes.forEach(function (className) {
      if (className !== "") {
        currentElement.classList.add(className);
      }
    });
  }

  addInput.value = "";

  showClasses();
});

removeInput.addEventListener("blur", function () {
  if (removeInput.value.trim() !== "") {
    let classes = removeInput.value.trim().toLowerCase().split(" ");

    classes.forEach(function (className) {
      if (className !== "") {
        currentElement.classList.remove(className);
      }
    });
  }

  removeInput.value = "";

  showClasses();
});

showClasses();

// TASK 9
let ourElement = document.querySelector(".our-element");
let paragraph = document.querySelector("p");

paragraph.remove();

let startElement = document.createElement("div");

startElement.className = "start";
startElement.title = "Start Element";
startElement.dataset.value = "Start";
startElement.textContent = "Start";

ourElement.before(startElement);

let endElement = document.createElement("div");

endElement.className = "end";
endElement.title = "End Element";
endElement.dataset.value = "End";
endElement.textContent = "End";

ourElement.after(endElement);

// TASK 10
let div = document.querySelector("div");

console.log(div.lastChild.textContent.trim());

// TASK 11
let elements = document.querySelectorAll("div, span, p, article, section");

elements.forEach(function (element) {
  element.addEventListener("click", function () {
    console.log(`This Is ${element.tagName}`);
  });
});

