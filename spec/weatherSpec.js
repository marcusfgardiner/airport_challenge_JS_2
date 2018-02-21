describe('Weather', function() {

  var weather;

  describe('stormy weather', function() {

    it('returns true for stormy weather 1/4 time', function() {
      spyOn(Math, 'random').and.returnValue(true);
      weather = new Weather();
      expect(weather.isStormy()).toBeTruthy();
    });

    it('returns false for non-stormy weather 3/4 time', function() {
      spyOn(Math, 'random').and.returnValue(false);
      weather = new Weather();
      expect(weather.isStormy()).toBeFalsy();
    });
  });
});
