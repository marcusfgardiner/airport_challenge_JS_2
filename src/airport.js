// debugger;

var Airport = function() {
  this.hangar = [];
  this.weather = new Weather();
};

Airport.prototype.land = function(plane) {
  if (this.weather.isStormy()) {
    console.log('in stormy');
    throw 'It is stormy out there!';
  }
  else {
    console.log('not in stormy');

    return this.hangar.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  return this.hangar.pop(plane);
};
