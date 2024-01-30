function loadStartingScreen() {
  const background = document.createElement("div");
  background.classList.add("bg-image");
  document.body.appendChild(background);

  const header = document.createElement("div");
  header.classList.add("header");
  document.body.appendChild(header);
  header.textContent = "Battleship";

  const content = document.createElement("div");
  content.classList.add("content");
  document.body.appendChild(content);

  const startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.addEventListener("click", () =>
    console.log("tell gameController to starts")
  );
  content.appendChild(startButton);
}

export default loadStartingScreen;
