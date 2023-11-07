import { gameBoardFactory } from "./gameBoard";

const playerFactory = () => {
  const gameBoard = gameBoardFactory();

  const possibleMoves = possibleMovesGenerator();

  function randomAttack() {
    const randomIndex = getRandomInt(possibleMoves.length);
    return possibleMoves.splice(randomIndex, 1).toString();
  }

  return { randomAttack };
};

export { playerFactory };

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function possibleMovesGenerator() {
  const columns = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const possibleMovesArray = [];

  columns.forEach((col) => {
    for (let index = 0; index < 10; index++) {
      possibleMovesArray.push(`${col}${index}`);
    }
  });
  return possibleMovesArray;
}
