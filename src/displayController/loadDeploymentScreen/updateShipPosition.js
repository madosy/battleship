function updateShipPosition(ship, shipOrientation = "horizontal", row, col) {
  let shipSize = ship.getAttribute("data-size");
  if (shipOrientation == "horizontal") {
    ship.style.gridColumn = `${col} / span ${shipSize}`;
    ship.style.gridRow = `${row}`;
    ship.classList.remove("vertical");
  }

  if (shipOrientation == "vertical") {
    ship.style.gridColumn = `${col}`;
    ship.style.gridRow = `${row} / span ${shipSize}`;
    ship.classList.add("vertical");
  }
}

export default updateShipPosition;
