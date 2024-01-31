import { gameBoardFactory } from "./gameBoard.js";

// playerBoard.placeShip(["a1", "a2", "a3", "a4", "a5"]);
// computerBoard.placeShip(["d3", "e3", "f3", "g3"]);
// computerBoard.placeShip(["e6", "e7", "e8"]);
// computerBoard.placeShip(["j5", "j6", "j7"]);
// computerBoard.placeShip(["j8", "j9"]);

let newBoard = gameBoardFactory();
// Coordinate system
// a0 b0 c0 ... j0
// a1 b1 c1 ... j1
// ...
// a9 b9 c9 ... j9
let coordinates = ["a0", "b0"];
newBoard.placeShip(coordinates);
let coordinates2 = ["c1"];
newBoard.placeShip(coordinates2);

test("simulate placing ship with 2 length", () => {
  expect(newBoard.receiveAttack("a0")).toBe(true);
  expect(newBoard.receiveAttack("c0")).toBe(false);
  expect(newBoard.isEnemyWinner()).toBe(false);

  expect(newBoard.receiveAttack("b0")).toBe(true);
  expect(newBoard.isEnemyWinner()).toBe(false);
  expect(newBoard.receiveAttack("c1")).toBe(true);
  expect(newBoard.isEnemyWinner()).toBe(true);
});

test("missed attack tracker", () => {
  expect(newBoard.receiveAttack("d5")).toBe(false);
  expect(newBoard.isHit("d5")).toBe(false);
  expect(newBoard.isHit("c1")).toBe(true);
  expect(newBoard.isHit("d6")).toBe(null);
});
