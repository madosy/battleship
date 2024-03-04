const shipList = (() => {
  function buildShip(name, size) {
    const ship = document.createElement("div");
    ship.classList.add(`${name}`);
    ship.classList.add("ship");
    ship.setAttribute("data-size", size);
    return ship;
  }

  let carrier = buildShip("carrier", 5);
  let battleship = buildShip("battleship", 4);
  let submarine = buildShip("submarine", 3);
  let destroyer = buildShip("destroyer", 3);
  let patrol = buildShip("patrol", 2);
  let data = [carrier, battleship, submarine, destroyer, patrol];

  function getNextShip() {
    if (data.length > 0) return data.shift();
  }
  return { getNextShip, buildShip };
})();

export default shipList;
