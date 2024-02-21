import "../../style/deploy.css";
import clearContentDiv from "../clearContentDiv";
import generateGrid from "../generateGrid";
import generateOrientationButton from "./generateOrientationButton";
import startShipDeployment from "./startShipDeployment";

function loadDeploymentScreen() {
  clearContentDiv();

  const grid = generateGrid();
  let content = document.querySelector("div.content");
  content.appendChild(grid);

  const orientationButton = generateOrientationButton();
  content.appendChild(orientationButton);

  startShipDeployment();
}

export default loadDeploymentScreen;
