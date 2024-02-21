import displayController from "..";
import getSquaresOccupied from "./getSquaresOccupied";

function checkSquareAvailableToDeploy(board, ship, { row, col }) {
  const shipSize = ship.getAttribute("data-size");
  const shipOrientation = displayController.getShipOrientation();
  let isShipFitsGrid = checkShipFitsGridPosition(shipSize, row, col);
  if (!isShipFitsGrid) return false;

  let squaresOccupied = getSquaresOccupied(shipOrientation, col, row, shipSize);
  for (let index = 0; index < squaresOccupied.length; index++) {
    let isFreeSpace = isThereAShipThere(board, squaresOccupied[index]);
    if (!isFreeSpace) return false;
  }

  return true;
}

function isThereAShipThere(board, coordinate) {
  return board.isSquareEmpty(coordinate);
}

function checkShipFitsGridPosition(shipSize, row, col) {
  const limit = 10 - shipSize + 1;
  const shipOrientation = displayController.getShipOrientation();

  if (shipOrientation == "horizontal" && col > limit) {
    return false;
  } else if (shipOrientation == "vertical" && row > limit) {
    return false;
  }

  return true;
}

export default checkSquareAvailableToDeploy;
