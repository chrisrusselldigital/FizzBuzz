describe('Javabuzz', function() {
  var javabuzz;

  describe('knows when a number is', function() {
    it('divisble by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    describe('when a number is NOT', function() {
      it('divisble by 3', function() {
        javabuzz = new Javabuzz();
        expect(javabuzz.isDivisibleByThree(1)).toBe(false);
      });
    });
  });

  describe('knows when a number is', function() {
    it('divisble by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    describe('when a number is NOT', function() {
      it('divisble by 5', function() {
        javabuzz = new Javabuzz();
        expect(javabuzz.isDivisibleByFive(1)).toBe(false);
      });
    });
  });

  describe('knows when a number is', function() {
    it('divisble by 3 and 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });

    describe('when a number is NOT', function() {
      it('divisble by 3 and 5', function() {
        javabuzz = new Javabuzz();
        expect(javabuzz.isDivisibleByThreeAndFive(1)).toBe(false);
      });
    });
  });
});
