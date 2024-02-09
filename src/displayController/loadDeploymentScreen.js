import gameController from "../gameController";
import clearContentDiv from "./clearContentDiv";
import getSquaresOccupied from "./getSquaresOccupied";
import checkSquareAvailable from "./checkSquareAvailable";
import "../style/deploy.css";
import generateGrid from "./generateGrid";

function loadDeploymentScreen() {
  clearContentDiv();

  const grid = generateGrid();
  grid.classList.add("grid-container");
  let content = document.querySelector("div.content");
  content.appendChild(grid);

  //   const buttonContainer = document.createElement("div");
  //   buttonContainer.classList.add("button-container");
  //   const orientationButton = document.createElement("button");
  //   orientationButton.classList.add("horizontal");
  //   buttonContainer.appendChild(orientationButton);
  //   content.appendChild(buttonContainer);
  //   orientationButton.addEventListener("click", () => {
  //     shipOrientation == "horizontal"
  //       ? (shipOrientation = "vertical")
  //       : (shipOrientation = "horizontal");
  //     hoverShip.classList.toggle("vertical");
  //   });

  //   const lowerGrid = document.createElement("div");
  //   lowerGrid.classList.add("lower");
  //   lowerGrid.classList.add("grid");

  //   gridContainer.appendChild(lowerGrid);
  //   gridContainer.appendChild(deploymentGrid);
  //   gridContainer.appendChild(topGrid);

  //   //generate grid

  //   let squares = document.querySelectorAll(".top .square");
  //   let hoverShip = document.querySelector(".ship:not(.deployed)");
  //   hoverShip.classList.add("active");
  //   let shipOrientation = "horizontal";

  //   squares.forEach((square) =>
  //     square.addEventListener("click", () => {
  //       if (
  //         hoverShip == null ||
  //         hoverShip.classList.contains("invalid") ||
  //         !hoverShip.classList.contains("active")
  //       )
  //         return;
  //       let result = getSquaresOccupied(
  //         shipOrientation,
  //         square.getAttribute("data-col"),
  //         square.getAttribute("data-row"),
  //         hoverShip.getAttribute("data-size")
  //       );
  //       gameController.placeShip(result);
  //       hoverShip.classList.add("deployed");
  //       hoverShip = document.querySelector(".ship:not(.deployed)");
  //       if (shipOrientation == "vertical") hoverShip.classList.add("vertical");
  //     })
  //   );

  //   squares.forEach((square) =>
  //     square.addEventListener("mouseover", () => {
  //       if (hoverShip == null) return;
  //       hoverShip.classList.add("active");
  //       let column = square.getAttribute("data-col");
  //       let row = square.getAttribute("data-row");
  //       let shipSize = hoverShip.getAttribute("data-size");
  //       let limit = 10 - hoverShip.getAttribute("data-size") + 1;

  //       if (shipOrientation == "horizontal" && column > limit) {
  //         hoverShip.classList.add("invalid");
  //       } else if (shipOrientation == "vertical" && row > limit) {
  //         hoverShip.classList.add("invalid");
  //       } else {
  //         hoverShip.classList.remove("invalid");
  //       }

  //       if (!hoverShip.classList.contains("invalid")) {
  //         let result = getSquaresOccupied(
  //           shipOrientation,
  //           square.getAttribute("data-col"),
  //           square.getAttribute("data-row"),
  //           hoverShip.getAttribute("data-size")
  //         );

  //         if (!checkSquareAvailable(result)) {
  //           hoverShip.classList.add("invalid");
  //         }
  //       }

  //       if (shipOrientation == "horizontal") {
  //         hoverShip.style.gridColumn = `${column} / span ${shipSize}`;
  //         hoverShip.style.gridRow = `${row}`;
  //       }

  //       if (shipOrientation == "vertical") {
  //         hoverShip.style.gridColumn = `${column}`;
  //         hoverShip.style.gridRow = `${row} / span ${shipSize}`;
  //       }
  //     })
  //   );
}

export default loadDeploymentScreen;
