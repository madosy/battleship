import gameController from "../gameController";

function checkSquareAvailable(coordinates) {
  for (let index = 0; index < coordinates.length; index++) {
    let currentCoordinate = coordinates[index];
    let playerBoard = gameController.getPlayerBoard();
    if (!playerBoard.isSquareEmpty(currentCoordinate)) {
      return false;
    }
  }
  return true;
}

export default checkSquareAvailable;
