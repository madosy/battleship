import clearContentDiv from "./clearContentDiv";
import gameController from "../gameController";
import "../style/attack.css";
import convertToCoordinate from "../helper/convertToCoordinate";

function loadPlayerScreen() {
  clearContentDiv();

  const enemyBoard = gameController.getEnemyBoard();

  const content = document.querySelector("div.content");
  content.innerHTML = `
  <div class="top label">
  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span
  ><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
  </div>
  <div class="left label">
  <span>A</span>
  <span>B</span>
  <span>C</span>
  <span>D</span>
  <span>E</span>
  <span>F</span>
  <span>G</span>
  <span>H</span>
  <span>I</span>
  <span>J</span>
  </div>`;

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  content.appendChild(gridContainer);

  const topGrid = document.createElement("div");
  topGrid.classList.add("top");
  topGrid.classList.add("grid");

  const deploymentGrid = document.createElement("div");
  deploymentGrid.classList.add("deployment");
  deploymentGrid.classList.add("grid");
  deploymentGrid.innerHTML = `
  <div class="carrier ship" data-size="5"></div>
  <div class="battle ship" data-size="4"></div>
  <div class="submarine ship" data-size="3"></div>
  <div class="destroyer ship" data-size="3"></div>
  <div class="patrol ship" data-size="2"></div>
  `;

  const lowerGrid = document.createElement("div");
  lowerGrid.classList.add("lower");
  lowerGrid.classList.add("grid");

  gridContainer.appendChild(lowerGrid);
  gridContainer.appendChild(deploymentGrid);
  let attackMarkerGrid = document.createElement("div");
  attackMarkerGrid.classList.add("attack");
  attackMarkerGrid.classList.add("grid");
  gridContainer.appendChild(attackMarkerGrid);
  gridContainer.appendChild(topGrid);

  for (let row = 1; row < 11; row++) {
    for (let col = 1; col < 11; col++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("data-col", col);
      square.setAttribute("data-row", row);
      topGrid.appendChild(square);
      lowerGrid.appendChild(square.cloneNode());
    }
  }

  let attackMarker = document.createElement("div");
  attackMarker.classList.add("marker");
  attackMarkerGrid.appendChild(attackMarker);

  let squares = document.querySelectorAll(".top .square");

  squares.forEach((square) =>
    square.addEventListener("mouseover", () => {
      if (attackMarker == null) return;
      attackMarker.classList.remove("invalid");
      gridContainer.style.removeProperty("cursor");
      attackMarker.classList.add("active");
      let column = square.getAttribute("data-col");
      let row = square.getAttribute("data-row");

      //this needs to check if squares have already been attacked

      let squareToEval = convertToCoordinate(
        square.getAttribute("data-row"),
        square.getAttribute("data-col")
      );

      if (enemyBoard.isAttacked(squareToEval)) {
        attackMarker.classList.add("invalid");
        gridContainer.style.cursor = "not-allowed";
      }

      attackMarker.style.gridColumn = `${column}`;
      attackMarker.style.gridRow = `${row}`;
    })
  );

  squares.forEach((square) =>
    square.addEventListener("click", () => {
      if (
        attackMarker == null ||
        attackMarker.classList.contains("invalid") ||
        !attackMarker.classList.contains("active")
      )
        return;
      attackMarker.classList.remove("active");
      let newMarker = attackMarker.cloneNode(false);

      let squareToEval = convertToCoordinate(
        square.getAttribute("data-row"),
        square.getAttribute("data-col")
      );

      enemyBoard.receiveAttack(squareToEval);
      let isHit = !enemyBoard.isSquareEmpty(squareToEval);

      if (isHit) {
        attackMarker.classList.add("hit");
      } else attackMarker.classList.add("nohit");

      attackMarkerGrid.appendChild(newMarker);
      attackMarker = newMarker;
    })
  );
}

export default loadPlayerScreen;
