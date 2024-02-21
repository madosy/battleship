function updateShipPosition(ship, shipOrientation = "horizontal", row, col) {
  let shipSize = ship.getAttribute("data-size");
  if (shipOrientation == "horizontal") {
    ship.style.gridColumn = `${col} / span ${shipSize}`;
    ship.style.gridRow = `${row}`;
  }

  if (shipOrientation == "vertical") {
    ship.style.gridColumn = `${col}`;
    ship.style.gridRow = `${row} / span ${shipSize}`;
  }
}

export default updateShipPosition;
