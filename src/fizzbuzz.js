function Javabuzz() {};

Javabuzz.prototype._isDivisibleBy = function(number, divider) {
  return ( number % divider === 0 );
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return "JavaBuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Java";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  return number;
};

javabuzz = new Javabuzz();

for (var i = 1; i <= 100; i++) {
  console.log(javabuzz.says(i));
}
