const shipFactory = (length, name) => {
  let _length = length;
  let hp = length;
  let _name = name;

  function getLength() {
    return _length;
  }

  function isSunk() {
    return hp > 0 ? false : true;
  }

  function hit() {
    hp--;
  }

  function getName() {
    return _name;
  }

  return { isSunk, hit, getLength, getName };
};

export { shipFactory };
