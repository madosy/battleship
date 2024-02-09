function generateShipLayer() {
  const shipLayer = document.createElement("div");
  shipLayer.classList.add("deployment");
  shipLayer.classList.add("grid");
  shipLayer.innerHTML = `
    <div class="carrier ship" data-size="5"></div>
    <div class="battle ship" data-size="4"></div>
    <div class="submarine ship" data-size="3"></div>
    <div class="destroyer ship" data-size="3"></div>
    <div class="patrol ship" data-size="2"></div>
    `;
  return shipLayer;
}

export default generateShipLayer;
