import gameController from "./gameController";
import displayController from "./displayController";
import "./style/common.css";
import pubsubTopics from "./pubsubTopics";

displayController.loadStartingScreen();
displayController.loadDeploymentScreen();
// displayController.loadPlayerScreen();

let mySubscriber = (msg, data) => console.log({ msg, data });
PubSub.subscribe(pubsubTopics.SQUARE_CLICKED, mySubscriber);
