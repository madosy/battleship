import generateClickableLayer from "./generateClickableLayer";
import generateLeftLabel from "./generateLeftLabel";
import generateShipLayer from "./generateShipLayer";
import generateTopLabel from "./generateTopLabel";

function generateGrid() {
  let gridContainer = document.createElement("div");
  let topLabel = generateTopLabel();
  let leftLabel = generateLeftLabel();
  let shipLayer = generateShipLayer();
  let clickableLayer = generateClickableLayer();

  gridContainer.appendChild(topLabel);
  gridContainer.appendChild(leftLabel);
  gridContainer.appendChild(shipLayer);
  gridContainer.appendChild(clickableLayer);

  return gridContainer;
}

export default generateGrid;
