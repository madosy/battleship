import PubSub from "pubsub-js";
import pubsubTopics from "../../pubsubTopics";

function generateOrientationButton() {
  const orientationButton = document.createElement("button");
  orientationButton.classList.add("orientation");
  orientationButton.addEventListener("click", () => {
    PubSub.publish(pubsubTopics.CHANGE_ORIENTATION);
  });
  return orientationButton;
}

export default generateOrientationButton;
