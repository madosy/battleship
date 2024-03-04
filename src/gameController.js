import { playerFactory } from "./playerFactory";
import { shipFactory } from "./shipFactory";
import { gameBoardFactory } from "./gameBoard";

const gameController = (() => {
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";
  let currentTurn = 1;

  const playerBoard = gameBoardFactory();
  const computerBoard = gameBoardFactory();
  computerBoard.placeShip(["a1", "a2", "a3", "a4", "a5"], "carrier");
  computerBoard.placeShip(["d3", "e3", "f3", "g3"], "battleship");
  computerBoard.placeShip(["e6", "e7", "e8"], "submarine");
  computerBoard.placeShip(["j5", "j6", "j7"], "destroyer");
  computerBoard.placeShip(["j8", "j9"], "patrol");

  const switchTurn = () =>
    currentTurn == 1 ? (currentTurn = 2) : (currentTurn = 1);
  const getPlayerBoard = () => (currentTurn == 1 ? playerBoard : computerBoard);
  const getEnemyBoard = () => (currentTurn == 1 ? computerBoard : playerBoard);
  const getCurrentPlayer = () =>
    currentTurn == 1 ? `${playerOne}` : `${playerTwo}`;

  function isSquareEmpty(coordinate) {
    return playerBoard.isSquareEmpty(coordinate);
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
    getPlayerBoard,
    getEnemyBoard,
    placeShip,
  };
})();

export default gameController;
