const board = document.querySelector(".board");

let gridSize = 16;

function createGrid(gridAmount) {
  gridAmount = gridSize;
  let divHeight = board.clientHeight / gridAmount;
  let divWidth = board.clientWidth / gridAmount;
  addElement(gridAmount, divHeight, divWidth);
  console.log(divHeight, divWidth);
}

function addElement(num, divHeight, divWidth) {
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.style.height = `${divHeight}px`;
    div.style.width = `${divWidth}px`;
    board.appendChild(div);
  }
}

createGrid();
