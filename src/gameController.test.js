import gameController from "./gameController";

test("Switch turn as you play", () => {
  expect(gameController.getCurrentPlayer()).toBe("playerOne");
  gameController.playRound("a5");
  expect(gameController.getCurrentPlayer()).toBe("playerTwo");
  gameController.playRound("d5");
  expect(gameController.getCurrentPlayer()).toBe("playerOne");
});
