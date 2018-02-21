// debugger;

var Airport = function() {
  this.hangar = [];
};

Airport.prototype.land = function(plane) {
  return this.hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  return this.hangar.pop(plane);
};
