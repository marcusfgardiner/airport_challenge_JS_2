// debugger;

var Airport = function(capacity) {
  this.hangar = [];
  this.weather = new Weather();
  this.capacity = capacity || 20
};

Airport.prototype.land = function(plane) {
  if (this.hangar.length >= this.capacity) {
    throw 'Too many planes!'
  }
  else if (this.weather.isStormy()) {
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
