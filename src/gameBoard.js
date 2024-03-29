import { shipFactory } from "./shipFactory.js";

const gameBoardFactory = () => {
  const allShips = new Map();
  const shipPlacement = new Map();
  const attackHistory = new Map();

  function placeShip(coordinates, name) {
    const length = coordinates.length;
    const newShip = shipFactory(length, name);
    allShips.set(newShip, coordinates);
    coordinates.forEach((coord) => {
      shipPlacement.set(coord, newShip);
    });
  }

  function isSquareEmpty(coordinate) {
    return shipPlacement.has(coordinate) ? false : true;
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

  function isAttacked(coordinate) {
    return attackHistory.has(coordinate);
  }

  return {
    attackHistory,
    shipPlacement,
    allShips,
    placeShip,
    receiveAttack,
    isEnemyWinner,
    isAttacked,
    isSquareEmpty,
  };
};

export { gameBoardFactory };
