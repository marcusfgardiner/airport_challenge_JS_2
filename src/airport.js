// debugger;

var Airport = function(capacity) {
  this.hangar = [];
  this.weather = new Weather();
  this.capacity = capacity || 20;
};

Airport.prototype.land = function(plane) {
  if (!plane._isFlying) throw 'This plane is already at an airport';
  this._fullError();
  this._stormyError();
  console.log(plane)
  // plane.changeFlyingStatus();
  return this.hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  this._planeNotInHangarError(plane);
  this._stormyError();
  return this._deleteAt(plane);
};

Airport.prototype._stormyError = function () {
    if (this.weather.isStormy()) throw 'It is stormy out there!';
};

Airport.prototype._fullError = function () {
  if (this.hangar.length >= this.capacity) throw 'Too many planes!';
};

Airport.prototype._planeNotInHangarError = function (plane) {
  if (!this.hangar.includes(plane)) throw 'Plane not in hangar!';
};

Airport.prototype._deleteAt = function (plane) {
 var index = this.hangar.indexOf(plane);
 this.hangar.splice(index, 1);
};
