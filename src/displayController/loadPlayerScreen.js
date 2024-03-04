import clearContentDiv from "./clearContentDiv";
import gameController from "../gameController";
import "../style/attack.css";
import convertToCoordinate from "../helper/convertToCoordinate";
import generateGrid from "./generateGrid";
import pubsubTopics from "../pubsubTopics";
import shipList from "./loadDeploymentScreen/shipList";
import updateShipPosition from "./loadDeploymentScreen/updateShipPosition";

function loadPlayerScreen() {
  clearContentDiv();

  const enemyBoard = gameController.getEnemyBoard();

  const content = document.querySelector("div.content");
  const grid = generateGrid();
  content.append(grid);

  let attackMarkerGrid = document.createElement("div");
  attackMarkerGrid.classList.add("attack");
  attackMarkerGrid.classList.add("grid");
  let attackMarker = grabNewAttackMarker();
  let activeMarker = attackMarker;

  let clickableLayer = grid.querySelector("div:last-of-type");
  grid.insertBefore(attackMarkerGrid, clickableLayer);

  let token = PubSub.subscribe(pubsubTopics.SQUARE_MOUSEOVER, (msg, data) => {
    activeMarker.classList.add("active");
    activeMarker.style.gridColumn = `${data.col}`;
    activeMarker.style.gridRow = `${data.row}`;
  });

  PubSub.subscribe(pubsubTopics.SQUARE_MOUSEOVER, (msg, data) => {
    let squareToEvaluate = convertToCoordinate(data.row, data.col);
    let isAlreadyAttacked = enemyBoard.attackHistory.has(squareToEvaluate);
    isAlreadyAttacked
      ? activeMarker.classList.add("invalid")
      : activeMarker.classList.remove("invalid");
  });

  PubSub.subscribe(pubsubTopics.SQUARE_CLICKED, (msg, data) => {
    if (!isActiveMarkerValid()) return;

    let coordinate = convertToCoordinate(data.row, data.col);
    enemyBoard.receiveAttack(coordinate);
    let isHit = !enemyBoard.isSquareEmpty(coordinate);
    placeMarker(isHit);
    if (isHit) checkShipSunk(coordinate);
    activeMarker = grabNewAttackMarker();
  });

  function isActiveMarkerValid() {
    return (
      activeMarker.classList.contains("active") &&
      !activeMarker.classList.contains("invalid")
    );
  }

  function placeMarker(isHit) {
    activeMarker.classList.remove("active");
    isHit
      ? activeMarker.classList.add("hit")
      : activeMarker.classList.add("nohit");
  }

  function checkShipSunk(coordinate) {
    let attackedShip = enemyBoard.shipPlacement.get(coordinate);
    let isSunk = attackedShip.isSunk();
    if (isSunk) {
      let coordinates = enemyBoard.allShips.get(attackedShip);
      console.log(getOrientationData(coordinates));
      let deploymentGrid = grid.querySelector(".deployment");
      let name = attackedShip.getName();
      let size = attackedShip.getLength();
      let shipDOM = shipList.buildShip(name, size);
      deploymentGrid.appendChild(shipDOM);
      let positionInfo = getOrientationData(coordinates);
      updateShipPosition(
        shipDOM,
        positionInfo.orientation,
        positionInfo.row,
        positionInfo.col
      );
      shipDOM.classList.add("deployed");
    }
  }

  function getOrientationData(coordinates) {
    let alphabet = "abcdefghij".split("");
    let orientation = "horizontal";
    let length = coordinates.length;
    let firstLetter = coordinates[0].charAt(0);
    let secondLetter = coordinates[1].charAt(0);
    if (firstLetter != secondLetter) orientation = "vertical";
    let col = Number.parseInt(coordinates[0].substring(1));
    let row = alphabet.findIndex((element) => element == firstLetter) + 1;
    return { orientation, row, col, length };
  }

  function grabNewAttackMarker() {
    let attackMarker = document.createElement("div");
    attackMarker.classList.add("marker");
    attackMarkerGrid.appendChild(attackMarker);
    return attackMarker;
  }
}

export default loadPlayerScreen;
