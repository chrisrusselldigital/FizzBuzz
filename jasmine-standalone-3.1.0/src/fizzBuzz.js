var Javabuzz = function(){};


Javabuzz.prototype.isDivisibleByThree = function(number) {
  return true;
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return(number % 3 === 0);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return true;
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return(number % 5 === 0);
};

Javabuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  return true;
};

Javabuzz.prototype.isDivisibleByThreeAndFive = function(number) {
  return(number % 15 === 0);
};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype._isDivisibleByFifteen = function(number) {
  return _isDivisibleBy(number, 15);
};
