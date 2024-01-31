function getSquaresOccupied(shipOrientation, column, row, shipSize) {
  let alphabet = "abcdefghij".split("");
  let squaresOccupied = [];
  if (shipOrientation == "horizontal") {
    for (let index = 0; index < shipSize; index++) {
      squaresOccupied.push(
        `${alphabet[Number.parseInt(row) - 1]}${
          Number.parseInt(column) + index
        }`
      );
    }
  } else {
    for (let index = 0; index < shipSize; index++) {
      squaresOccupied.push(
        `${alphabet[Number.parseInt(row) + index - 1]}${Number.parseInt(
          column
        )}`
      );
    }
  }
  return squaresOccupied;
}

export default getSquaresOccupied;
