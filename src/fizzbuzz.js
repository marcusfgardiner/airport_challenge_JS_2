function Javabuzz() {};

Javabuzz.prototype._isDivisibleBy = function(number, divider) {
  return ( number % divider === 0 );
}

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

console.log(4 % 5 === 0 )
