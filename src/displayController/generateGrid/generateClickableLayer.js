import PubSub from "pubsub-js";
import pubsubTopics from "../../pubsubTopics";

function generateClickableLayer() {
  const container = document.createElement("div");
  container.classList.add("top");
  container.classList.add("grid");

  for (let row = 1; row < 11; row++) {
    for (let col = 1; col < 11; col++) {
      let clickableSquare = document.createElement("div");
      clickableSquare.classList.add("square");
      clickableSquare.setAttribute("data-col", col);
      clickableSquare.setAttribute("data-row", row);
      clickableSquare.addEventListener("click", () =>
        PubSub.publish(pubsubTopics.SQUARE_CLICKED, { col, row })
      );
      clickableSquare.addEventListener("mouseover", () =>
        PubSub.publish(pubsubTopics.SQUARE_MOUSEOVER, { col, row })
      );
      container.appendChild(clickableSquare);
    }
  }

  return container;
}

export default generateClickableLayer;
