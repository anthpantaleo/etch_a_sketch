const defaultColor = "000000";
const eraserColor = "FFFFFF";

const board = document.querySelector(".board");
let color = "000000";
let isRandom = 0;
let random = "000000";

let gridSize = 16;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid(gridAmount) {
  gridAmount = gridSize;
  let divHeight = board.clientHeight / gridAmount;
  let divWidth = board.clientWidth / gridAmount;
  addElement(gridAmount, divHeight, divWidth);
  console.log(divHeight, divWidth);
  console.log(board.clientWidth);
}

function addElement(num, divHeight, divWidth) {
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.style.height = `${divHeight}px`;
    div.style.width = `${board.clientWidth}px`;
    div.classList.add("boardRow");
    board.appendChild(div);
    for (let i = 0; i < num; i++) {
      let rowDiv = document.createElement("div");
      rowDiv.style.height = `${divHeight}px`;
      rowDiv.style.width = `${divWidth}px`;
      rowDiv.classList.add("rowDiv");
      rowDiv.setAttribute("draggable", false);
      div.appendChild(rowDiv);
    }
  }
}

createGrid();

let boxes = document.querySelectorAll(".rowDiv");
let rows = document.querySelectorAll(".boardRow");

boxes.forEach((item) => {
  item.addEventListener("mouseover", changeColor);
  item.addEventListener("mouseenter", changeColor);
});

function changeColor(e) {
  if (isRandom === 0) {
    if (e.type === "mouseenter" && mouseDown) {
      e.target.style.backgroundColor = `#${color}`;
    }
  } else {
    if (e.type === "mouseenter" && mouseDown) {
      e.target.style.backgroundColor = `#${random}`;
    }
  }
}
const standardColor = document.querySelector(".standardColor");

standardColor.addEventListener("click", function () {
  color = "000000";
  isRandom = 0;
});

const eraser = document.querySelector(".eraser");

eraser.addEventListener("click", function () {
  color = "FFFFFF";
  isRandom = 0;
});

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", randomColor);

function randomColor() {
  let interval = setInterval(() => {
    let getRandomColor = Math.floor(Math.random() * 16777215).toString(16);

    random = getRandomColor;
  }, 20);
  isRandom = 1;
}

const colorPicker = document.querySelector(".colorPicker");

colorPicker.addEventListener("change", function (e) {
  preslice = e.target.value;
  color = preslice.slice(1);
  isRandom = 0;
});

const clearAll = document.querySelector(".clearAll");

let clearBoard = clearAll.addEventListener("click", function () {
  boxes.forEach((item) => {
    item.style.backgroundColor = `#${eraserColor}`;
  });
});

const gridChanger = document.querySelector(".gridSize");

gridChanger.addEventListener("change", function (e) {
  gridSize = parseInt(e.target.value);
  deleteGrid();
  createGrid();
  addListeners();
});

function deleteGrid() {
  let oldboxes = document.querySelectorAll(".rowDiv");
  let oldrows = document.querySelectorAll(".boardRow");
  oldrows.forEach((item) => {
    item.remove();
  });
  oldboxes.forEach((item) => {
    item.remove();
  });
}

function addListeners() {
  let newBoxes = document.querySelectorAll(".rowDiv");
  newBoxes.forEach((item) => {
    item.addEventListener("mouseover", changeColor);
    item.addEventListener("mouseenter", changeColor);
  });
  let newClearAll = document.querySelector(".clearAll");
  newClearAll.addEventListener("click", function () {
    newBoxes.forEach((elemt) => {
      elemt.style.backgroundColor = `#${eraserColor}`;
    });
  });
  return newBoxes;
}
