// debugger;

var Airport = function(capacity) {
  this.hangar = [];
  this.weather = new Weather();
  this.capacity = capacity || 20;
};

Airport.prototype.land = function(plane) {
  this._fullError();
  this._stormyError();
    return this.hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
    this._stormyError();
    return this.hangar.pop(plane);
};

Airport.prototype._stormyError = function () {
    if (this.weather.isStormy()) throw 'It is stormy out there!';
};

Airport.prototype._fullError = function () {
  if (this.hangar.length >= this.capacity) throw 'Too many planes!';
};
