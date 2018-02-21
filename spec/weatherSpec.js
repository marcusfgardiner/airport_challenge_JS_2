describe('Weather', function() {

  var weather;

  describe('stormy weather', function() {

    it('returns stormy weather 1/4 time', function() {
      weather = new Weather();
      expect(weather.isStormy()).toBeTruthy();
    });

  });

});
