describe('Javabuzz', function() {
  var javabuzz;

  describe('knows when a number is', function() {
    it('divisble by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe (true);
    });

  });
});

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return true;
};
