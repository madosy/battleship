import { playerFactory } from "./playerFactory";
import { shipFactory } from "./shipFactory";
import { gameBoardFactory } from "./gameBoard";

const gameController = (() => {
  const playerOne = "playerOne";
  const playerTwo = "playerTwo";
  let currentTurn = 1;

  const switchTurn = () =>
    currentTurn == 1 ? (currentTurn = 2) : (currentTurn = 1);
  const getEnemyBoard = () =>
    currentTurn == 1 ? playerTwoBoard : playerOneBoard;
  const getCurrentPlayer = () =>
    currentTurn == 1 ? `${playerOne}` : `${playerTwo}`;

  const playerOneBoard = gameBoardFactory();
  playerOneBoard.placeShip(["a2", "b2"]);
  playerOneBoard.placeShip(["c5", "d5", "e5"]);

  const playerTwoBoard = gameBoardFactory();
  playerTwoBoard.placeShip(["b3", "c3"]);
  playerTwoBoard.placeShip(["b6", "b7", "b8"]);

  function playRound(square) {
    const enemyBoard = getEnemyBoard();
    enemyBoard.receiveAttack(square);

    enemyBoard.isEnemyWinner()
      ? console.log(`${getCurrentPlayer()} wins!`) //send event that declare winner later
      : switchTurn();
  }

  return { playRound, getCurrentPlayer };
})();

export default gameController;
