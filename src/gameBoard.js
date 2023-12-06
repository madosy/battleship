import { shipFactory } from "./shipFactory.js";

const gameBoardFactory = () => {
  const allShips = [];
  const shipPlacement = new Map();
  const attackHistory = new Map();

  function placeShip(coordinates) {
    const length = coordinates.length;
    const newShip = shipFactory(length);
    allShips.push(newShip);
    coordinates.forEach((coord) => {
      shipPlacement.set(coord, newShip);
    });
  }

  function receiveAttack(coordinate) {
    attackHistory.set(coordinate, true);
    if (shipPlacement.has(coordinate)) {
      const attackedShip = shipPlacement.get(coordinate);
      attackedShip.hit();
      return true;
    }
    return false;
  }

  function isEnemyWinner() {
    return allShips.reduce((prev, cur) => prev && cur.isSunk(), true);
  }

  function draw(coordinate) {
    if (attackHistory.has(coordinate)) {
      return shipPlacement.has(coordinate) ? "hit" : "miss";
    } else return null;
  }

  return { placeShip, receiveAttack, isEnemyWinner, draw };
};

export { gameBoardFactory };
