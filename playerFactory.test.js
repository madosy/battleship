import { playerFactory } from "./playerFactory";
import { gameBoardFactory } from "./gameBoard";

const player = playerFactory();
const computer = playerFactory();
const enemyBoard = gameBoardFactory();

test("PC can pick random square that has not been attacked", () => {
  let move = computer.randomAttack();
  expect(move).toMatch(/[a-j][0-9]/);
});
