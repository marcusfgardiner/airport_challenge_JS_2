describe('Weather', function() {

  var weather;

  describe('stormy weather', function() {

    it('returns true for stormy weather 1/4 time', function() {
      spyOn(Math, 'random').and.returnValue(0.9);
      weather = new Weather();
      expect(weather.isStormy()).toBeTruthy();
    });

    it('returns false for non-stormy weather 3/4 time', function() {
      spyOn(Math, 'random').and.returnValue(0.2);
      weather = new Weather();
      expect(weather.isStormy()).toBeFalsy();
    });
  });
});
