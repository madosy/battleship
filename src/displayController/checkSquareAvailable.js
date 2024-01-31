import gameController from "../gameController";

function checkSquareAvailable(coordinates) {
  for (let index = 0; index < coordinates.length; index++) {
    let currentCoordinate = coordinates[index];
    if (!gameController.isShipPlacementValid(currentCoordinate)) {
      return false;
    }
  }
  return true;
}

export default checkSquareAvailable;
