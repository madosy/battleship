let squares = document.querySelectorAll(".square");
let gridContainer = document.querySelector(".grid-container");

squares.forEach((square) =>
  square.addEventListener("click", () => {
    let gridID = square.getAttribute("data-grid");
    console.log(gridID);
  })
);

let hoverShip = document.querySelector(".ship3");

squares.forEach((square) =>
  square.addEventListener("mouseover", () => {
    let gridID = square.getAttribute("data-grid");
    console.log(gridID);
    hoverShip.style.gridColumn = `${gridID.charAt(1)} / span 2`;
    hoverShip.style.gridRow = `${gridID.charAt(0)}`;
  })
);

/* 
Get info on current square and give to display controller
Display controller get info which ship is to be displayed
Display controller get info horizontal or vertical
Display controller get square info
Check if square is valid for placement
  if yes set css grid properties for hover & set valid status
  if no don't display anything & set invalid status
*/
