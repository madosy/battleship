const pubsubTopics = (() => {
  const SQUARE_CLICKED = "SQUARE_CLICKED";
  const SQUARE_MOUSEOVER = "SQUARE_MOUSEOVER";
  const CHANGE_ORIENTATION = "CHANGE_ORIENTATION";

  return {
    SQUARE_CLICKED,
    SQUARE_MOUSEOVER,
    CHANGE_ORIENTATION,
  };
})();

export default pubsubTopics;
