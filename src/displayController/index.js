import loadStartingScreen from "./loadStartingScreen";
import loadDeploymentScreen from "./loadDeploymentScreen";
import loadPlayerScreen from "./loadPlayerScreen";

const displayController = (() => {
  return { loadStartingScreen, loadDeploymentScreen, loadPlayerScreen };
})();

export default displayController;
