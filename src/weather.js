var Weather = function() {
};

Weather.prototype.isStormy = function() {
  return Math.random() > 0.75 ? true : false;
};
