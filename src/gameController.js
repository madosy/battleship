import { playerFactory } from "./playerFactory";
import { shipFactory } from "./shipFactory";
import { gameBoardFactory } from "./gameBoard";

const gameController = (() => {
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";
  let currentTurn = 1;

  const playerBoard = gameBoardFactory();
  const computerBoard = gameBoardFactory();
  playerBoard.placeShip(["a1", "a2", "a3", "a4", "a5"]);
  computerBoard.placeShip(["d3", "e3", "f3", "g3"]);
  computerBoard.placeShip(["e6", "e7", "e8"]);
  computerBoard.placeShip(["j5", "j6", "j7"]);
  computerBoard.placeShip(["j8", "j9"]);

  const switchTurn = () =>
    currentTurn == 1 ? (currentTurn = 2) : (currentTurn = 1);
  const getEnemyBoard = () => (currentTurn == 1 ? computerBoard : playerBoard);
  const getCurrentPlayer = () =>
    currentTurn == 1 ? `${playerOne}` : `${playerTwo}`;

  function isShipPlacementValid(coordinate) {
    return playerBoard.isShipPlacementValid(coordinate);
  }

  function placeShip(coordinates) {
    playerBoard.placeShip(coordinates);
  }

  function playRound(square) {
    const enemyBoard = getEnemyBoard();
    enemyBoard.receiveAttack(square);

    enemyBoard.isEnemyWinner()
      ? console.log(`${getCurrentPlayer()} wins!`) //send event that declare winner later
      : switchTurn();
  }

  return {
    playRound,
    getCurrentPlayer,
    isShipPlacementValid,
    placeShip,
  };
})();

export default gameController;
