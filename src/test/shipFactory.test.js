import { shipFactory } from "./shipFactory";

test("isSunk() should be a function that calculates it based on their length and the number of ‘hits’.", () => {
  const newShip = shipFactory(4);
  expect(newShip.isSunk()).toBe(false);
  newShip.hit();
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});

test("getLength()", () => {
  const newShip = shipFactory(1);
  expect(newShip.getLength()).toBe(1);

  const secondShip = shipFactory(5);
  secondShip.hit();
  expect(secondShip.getLength()).toBe(5);
});
