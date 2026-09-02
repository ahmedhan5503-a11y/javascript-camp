// Challenge: Local Storage & Task Management

let taskInput = document.getElementById("taskInput");

let addTask = document.getElementById("addTask");

let tasks = document.getElementById("tasks");

let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
  tasks.innerHTML = "";

  taskArray.forEach(function (task) {
    let div = document.createElement("div");

    div.className = "task";

    div.setAttribute("data-id", task.id);

    div.innerHTML = `
      <span>${task.title}</span>
      <button class="delete">Delete</button>
    `;

    tasks.appendChild(div);
  });
}

addTask.onclick = function () {
  if (taskInput.value.trim() === "") {
    return;
  }

  let newTask = {
    id: Date.now(),
    title: taskInput.value,
  };

  taskArray.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(taskArray));

  taskInput.value = "";

  showTasks();
};

tasks.onclick = function (khedr) {
  if (khedr.target.classList.contains("delete")) {
    let taskElement = khedr.target.parentElement;

    let taskId = Number(taskElement.dataset.id);

    taskArray = taskArray.filter(function (task) {
      return task.id !== taskId;
    });

    localStorage.setItem("tasks", JSON.stringify(taskArray));

    showTasks();
  }
};

showTasks();

// Task 1

function task1() {
  let numbers = prompt("Print Number From – To", "Example: 5-20");

  if (numbers === null || numbers.trim() === "") {
    return;
  }

  let parts = numbers.split("-");

  let num1 = Number(parts[0]);

  let num2 = Number(parts[1]);

  let start = Math.min(num1, num2);

  let end = Math.max(num1, num2);

  let result = document.createElement("div");

  for (let i = start; i <= end; i++) {
    let number = document.createElement("div");

    number.textContent = i;

    result.appendChild(number);
  }

  document.body.appendChild(result);
}

task1();

// Task 2

function task2() {
  let popup = document.createElement("div");

  popup.className = "popup";

  popup.innerHTML = `
    <h2>Welcome</h2>
    <p>Welcome To Elzero Web School</p>
    <button id="close">Close</button>
  `;

  document.body.appendChild(popup);

  popup.querySelector("#close").onclick = function () {
    popup.remove();
  };
}

setTimeout(task2, 5000);

// Task 3

function task3() {
  let counter = document.getElementById("counter");

  let number = Number(counter.textContent);

  let interval = setInterval(function () {
    counter.textContent = number;

    if (number === 0) {
      clearInterval(interval);
    }

    number--;
  }, 1000);
}

// Task 4

function task4() {
  let counter = document.getElementById("counter");

  let number = Number(counter.textContent);

  let interval = setInterval(function () {
    counter.textContent = number;

    if (number === 0) {
      clearInterval(interval);

      location.href = "https://elzero.org";
    }

    number--;
  }, 1000);
}

// Task 5

let counter = document.getElementById("counter");

let number = Number(counter.textContent);

let count = setInterval(function () {
  counter.textContent = number;

  if (number === 5) {
    window.open("https://elzero.org", "_blank", "width=800,height=600");
  }

  if (number === 0) {
    clearInterval(count);
  }

  number--;
}, 1000);

// Task 6
let font = document.getElementById("font");
let color = document.getElementById("color");
let size = document.getElementById("size");

document.body.style.fontFamily = font.value;
document.body.style.color = color.value;
document.body.style.fontSize = size.value;

font.addEventListener("change", function () {
  document.body.style.fontFamily = this.value;

  localStorage.setItem("font", this.value);
});

color.addEventListener("change", function () {
  document.body.style.color = this.value;

  localStorage.setItem("color", this.value);
});

size.addEventListener("change", function () {
  document.body.style.fontSize = this.value;

  localStorage.setItem("size", this.value);
});

if (localStorage.getItem("font")) {
  font.value = localStorage.getItem("font");
  document.body.style.fontFamily = localStorage.getItem("font");
}

if (localStorage.getItem("color")) {
  color.value = localStorage.getItem("color");
  document.body.style.color = localStorage.getItem("color");
}

if (localStorage.getItem("size")) {
  size.value = localStorage.getItem("size");
  document.body.style.fontSize = localStorage.getItem("size");
}

// Task 7

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let ageInput = document.getElementById("age");
let country = document.getElementById("country");

nameInput.addEventListener("input", function () {
  localStorage.setItem("name", this.value);
});

emailInput.addEventListener("input", function () {
  localStorage.setItem("email", this.value);
});

ageInput.addEventListener("input", function () {
  localStorage.setItem("age", this.value);
});

country.addEventListener("change", function () {
  localStorage.setItem("country", this.value);
});

nameInput.value = localStorage.getItem("name") || "";

emailInput.value = localStorage.getItem("email") || "";

ageInput.value = localStorage.getItem("age") || "";

country.value = localStorage.getItem("country") || "Egypt";

let isReload = sessionStorage.getItem("isReload");

window.addEventListener("beforeunload", function () {
  sessionStorage.setItem("isReload", "true");
});

window.addEventListener("load", function () {
  if (isReload === "true") {
    sessionStorage.removeItem("isReload");
  }
});
