import loadStartingScreen from "./loadStartingScreen";
import loadDeploymentScreen from "./loadDeploymentScreen";
import loadPlayerScreen from "./loadPlayerScreen";
import pubsubTopics from "../pubsubTopics";

const displayController = (() => {
  let shipOrientation = "horizontal";

  function changeShipOrientation() {
    shipOrientation == "horizontal"
      ? (shipOrientation = "vertical")
      : (shipOrientation = "horizontal");
  }
  PubSub.subscribe(pubsubTopics.CHANGE_ORIENTATION, changeShipOrientation);

  function getShipOrientation() {
    return `${shipOrientation}`;
  }
  return {
    loadStartingScreen,
    loadDeploymentScreen,
    loadPlayerScreen,
    getShipOrientation,
  };
})();

export default displayController;
