// debugger;

var Airport = function() {
  this.hangar = [];
  this.weather = new Weather();
};

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy()) {
    throw 'It is stormy out there!';
  }
  else {
    return this.hangar.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  if (this.weather.isStormy()) {
    throw 'It is stormy out there!';
  }
  else {
    return this.hangar.pop(plane);
  }
};
