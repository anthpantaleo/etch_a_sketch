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
      div.appendChild(rowDiv);
    }
  }
}

createGrid();

const boxes = document.querySelectorAll(".rowDiv");

boxes.forEach((item) => {
  item.addEventListener("mouseover", changeColor);
  item.addEventListener("mousedown", changeColor);
});

function changeColor(e) {
  if (isRandom === 0) {
    if (e.type === "mouseover" && mouseDown) {
      e.target.style.backgroundColor = `#${color}`;
    }
  } else {
    if (e.type === "mouseover" && mouseDown) {
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
  }, 30);
  isRandom = 1;
}

const clearAll = document.querySelector(".clearAll");

clearAll.addEventListener("click", function () {
  boxes.forEach((item) => {
    item.style.backgroundColor = `#${eraserColor}`;
  });
});
