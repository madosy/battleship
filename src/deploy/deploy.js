let topGrid = document.querySelector(".top.grid");
let lowerGrid = document.querySelector(".lower.grid");

//generate grid
for (let row = 1; row < 11; row++) {
  for (let col = 1; col < 11; col++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("data-col", col);
    square.setAttribute("data-row", row);
    topGrid.appendChild(square);
    lowerGrid.appendChild(square.cloneNode());
  }
}

let squares = document.querySelectorAll(".top .square");
let gridContainer = document.querySelector(".grid-container");
let hoverShip = document.querySelector(".ship:not(.deployed)");
hoverShip.classList.add("active");
let shipOrientation = "horizontal";

squares.forEach((square) =>
  square.addEventListener("click", () => {
    if (
      hoverShip.classList.contains("invalid") ||
      !hoverShip.classList.contains("active")
    )
      return;
    hoverShip.classList.add("deployed");
    hoverShip = document.querySelector(".ship:not(.deployed)");
  })
);

squares.forEach((square) =>
  square.addEventListener("mouseover", () => {
    hoverShip.classList.add("active");
    let column = square.getAttribute("data-col");
    let row = square.getAttribute("data-row");
    let shipSize = hoverShip.getAttribute("data-size");
    console.log(shipSize);
    let limit = 10 - hoverShip.getAttribute("data-size") + 1;
    console.log(limit);

    if (shipOrientation == "horizontal" && column > limit) {
      hoverShip.classList.add("invalid");
    } else {
      hoverShip.classList.remove("invalid");
    }

    hoverShip.style.gridColumn = `${column} / span ${shipSize}`;
    hoverShip.style.gridRow = `${row}`;
  })
);

//probably just better to add data property for column and row values.

/* 
Get info on current square and give to display controller
Display controller get info which ship is to be displayed
Display controller get info horizontal or vertical
Display controller get square info
Check if square is valid for placement
  if yes set css grid properties for hover & set valid status
  if no don't display anything & set invalid status
*/
