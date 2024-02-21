import displayController from "..";
import gameController from "../../gameController";
import pubsubTopics from "../../pubsubTopics";
import checkSquareAvailableToDeploy from "./checkSquareAvailableToDeploy";
import getSquaresOccupied from "./getSquaresOccupied";
import updateShipPosition from "./updateShipPosition";
import shipList from "./shipList";

function startShipDeployment() {
  const shipLayer = document.querySelector(".deployment.grid");
  let playerBoard = gameController.getPlayerBoard();
  let currentShip = shipList.getNextShip();
  shipLayer.appendChild(currentShip);

  PubSub.subscribe(pubsubTopics.SQUARE_MOUSEOVER, updateShipOrientationDisplay);

  function updateShipOrientationDisplay() {
    const shipOrientation = displayController.getShipOrientation();
    if (shipOrientation == "vertical") {
      currentShip.classList.add("vertical");
    } else currentShip.classList.remove("vertical");
  }

  PubSub.subscribe(pubsubTopics.SQUARE_MOUSEOVER, (msg, data) => {
    if (currentShip == undefined) return;
    currentShip.classList.add("active");
    const row = data.row;
    const column = data.col;
    const shipOrientation = displayController.getShipOrientation();
    const shipSize = currentShip.getAttribute("data-size");
    updateShipPosition(currentShip, shipOrientation, data.row, data.col);

    let isSquareAvailable = checkSquareAvailableToDeploy(
      playerBoard,
      currentShip,
      data
    );

    if (!isSquareAvailable) {
      currentShip.classList.add("invalid");
    } else currentShip.classList.remove("invalid");
  });

  PubSub.subscribe(pubsubTopics.SQUARE_CLICKED, (msg, data) => {
    if (currentShip == undefined) return;
    if (currentShip.classList.contains("invalid")) return;

    deployCurrentShip(data);
    currentShip = shipList.getNextShip();

    if (currentShip == undefined) {
      PubSub.clearAllSubscriptions();
      return;
    }

    shipLayer.appendChild(currentShip);
  });

  function deployCurrentShip(data) {
    currentShip.classList.remove("active");
    currentShip.classList.add("deployed");
    let coordinates = getSquaresOccupied(
      displayController.getShipOrientation(),
      data.col,
      data.row,
      currentShip.getAttribute("data-size")
    );
    playerBoard.placeShip(coordinates);
  }
}

export default startShipDeployment;
