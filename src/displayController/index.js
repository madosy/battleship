import loadStartingScreen from "./loadStartingScreen";
import loadDeploymentScreen from "./loadDeploymentScreen";

const displayController = (() => {
  return { loadStartingScreen, loadDeploymentScreen };
})();

export default displayController;
