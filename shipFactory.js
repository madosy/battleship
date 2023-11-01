const shipFactory = (length) => {
  let _length = length;
  let hp = length;

  function getLength() {
    return _length;
  }

  function isSunk() {
    return hp > 0 ? false : true;
  }

  function hit() {
    hp--;
  }

  return { isSunk, hit, getLength };
};

export { shipFactory };
