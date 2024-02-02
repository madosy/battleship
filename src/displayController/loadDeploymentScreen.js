import gameController from "../gameController";
import clearContentDiv from "./clearContentDiv";
import getSquaresOccupied from "./getSquaresOccupied";
import checkSquareAvailable from "./checkSquareAvailable";
import "../style/deploy.css";

function loadDeploymentScreen() {
  clearContentDiv();

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  const content = document.querySelector("div.content");
  content.innerHTML = `<div class="top label">
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
  content.appendChild(gridContainer);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  const orientationButton = document.createElement("button");
  orientationButton.classList.add("horizontal");
  buttonContainer.appendChild(orientationButton);
  content.appendChild(buttonContainer);
  orientationButton.addEventListener("click", () => {
    shipOrientation == "horizontal"
      ? (shipOrientation = "vertical")
      : (shipOrientation = "horizontal");
    hoverShip.classList.toggle("vertical");
  });

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
  gridContainer.appendChild(topGrid);

  //generate grid
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

  let squares = document.querySelectorAll(".top .square");
  let hoverShip = document.querySelector(".ship:not(.deployed)");
  hoverShip.classList.add("active");
  let shipOrientation = "horizontal";

  squares.forEach((square) =>
    square.addEventListener("click", () => {
      if (
        hoverShip == null ||
        hoverShip.classList.contains("invalid") ||
        !hoverShip.classList.contains("active")
      )
        return;
      let result = getSquaresOccupied(
        shipOrientation,
        square.getAttribute("data-col"),
        square.getAttribute("data-row"),
        hoverShip.getAttribute("data-size")
      );
      gameController.placeShip(result);
      hoverShip.classList.add("deployed");
      hoverShip = document.querySelector(".ship:not(.deployed)");
      if (shipOrientation == "vertical") hoverShip.classList.add("vertical");
    })
  );

  squares.forEach((square) =>
    square.addEventListener("mouseover", () => {
      if (hoverShip == null) return;
      hoverShip.classList.add("active");
      let column = square.getAttribute("data-col");
      let row = square.getAttribute("data-row");
      let shipSize = hoverShip.getAttribute("data-size");
      let limit = 10 - hoverShip.getAttribute("data-size") + 1;

      if (shipOrientation == "horizontal" && column > limit) {
        hoverShip.classList.add("invalid");
      } else if (shipOrientation == "vertical" && row > limit) {
        hoverShip.classList.add("invalid");
      } else {
        hoverShip.classList.remove("invalid");
      }

      if (!hoverShip.classList.contains("invalid")) {
        let result = getSquaresOccupied(
          shipOrientation,
          square.getAttribute("data-col"),
          square.getAttribute("data-row"),
          hoverShip.getAttribute("data-size")
        );

        if (!checkSquareAvailable(result)) {
          hoverShip.classList.add("invalid");
        }
      }

      if (shipOrientation == "horizontal") {
        hoverShip.style.gridColumn = `${column} / span ${shipSize}`;
        hoverShip.style.gridRow = `${row}`;
      }

      if (shipOrientation == "vertical") {
        hoverShip.style.gridColumn = `${column}`;
        hoverShip.style.gridRow = `${row} / span ${shipSize}`;
      }
    })
  );
}

export default loadDeploymentScreen;
