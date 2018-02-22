var Plane = function() {
  this.isFlying = true;
};

Plane.prototype.changeFlyingStatus = function(plane) {
  this.isFlying = !this.isFlying;
};
