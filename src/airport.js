function Airport() {
  array = []
};

Airport.prototype.landPlane = function(plane) {
  array.push(plane);
  return array;
};
