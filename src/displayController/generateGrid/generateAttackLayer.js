function generateAttackMarkerLayer() {
  let attackMarkerGrid = document.createElement("div");
  attackMarkerGrid.classList.add("attack");
  attackMarkerGrid.classList.add("grid");

  let attackMarker = document.createElement("div");
  attackMarker.classList.add("marker");
  attackMarkerGrid.appendChild(attackMarker);

  return attackMarkerGrid;
}

export default generateAttackMarkerLayer;
