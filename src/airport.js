// debugger;

var Airport = function(weather) {
  this.hangar = [];
  this.weather = weather;
};

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy) {
    throw 'It is stormy out there!';
  } else {
    return this.hangar.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  return this.hangar.pop(plane);
};
