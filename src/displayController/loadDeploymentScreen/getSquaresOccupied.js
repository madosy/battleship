function getSquaresOccupied(shipOrientation, column, row, shipSize) {
  let squaresOccupied = [];
  const rowNumber = Number.parseInt(row);
  const colNumber = Number.parseInt(column);

  function convertToRowLetter(row) {
    const rowNumber = parseInt(row);
    const alphabet = "abcdefghij".split("");
    return alphabet[rowNumber - 1];
  }

  if (shipOrientation == "horizontal") {
    for (let index = 0; index < shipSize; index++) {
      let rowLetter = convertToRowLetter(rowNumber);
      squaresOccupied.push(`${rowLetter}${colNumber + index}`);
    }
  } else {
    for (let index = 0; index < shipSize; index++) {
      let rowLetter = convertToRowLetter(rowNumber + index);
      squaresOccupied.push(`${rowLetter}${colNumber}`);
    }
  }

  return squaresOccupied;
}

export default getSquaresOccupied;
