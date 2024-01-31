import { playerFactory } from "./playerFactory";
import { shipFactory } from "./shipFactory";
import { gameBoardFactory } from "./gameBoard";

const gameController = (() => {
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";
  let currentTurn = 1;

  const playerBoard = gameBoardFactory();
  const computerBoard = gameBoardFactory();

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
