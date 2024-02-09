function generateLeftLabel() {
  let leftLabel = document.createElement("div");
  leftLabel.classList.add("left");
  leftLabel.classList.add("label");
  leftLabel.innerHTML = `
  <span>A</span>
  <span>B</span>
  <span>C</span>
  <span>D</span>
  <span>E</span>
  <span>F</span>
  <span>G</span>
  <span>H</span>
  <span>I</span>
  <span>J</span>
    `;
  return leftLabel;
}

export default generateLeftLabel;
