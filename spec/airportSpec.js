describe ('Airport', function() {

  var airport;
  var stormy_airport;

  beforeEach(function() {
    airport = new Airport();
    spyOn(airport.weather, 'isStormy').and.returnValue(false);
    stormy_airport = new Airport();
    spyOn(stormy_airport.weather, 'isStormy').and.returnValue(true);
  });

  describe('landing a plane', function() {

    it('stores a plane in hangar array', function() {
      airport.land('plane');
      expect(airport.hangar).toContain('plane');
    });

    it('raises an error if its stormy', function() {
      expect(function() {
        stormy_airport.land('plane');
      }).toThrow('It is stormy out there!');
    });
  });

  describe('taking off plane', function() {

    it('removes plane from hangar array', function() {
      airport.land('plane');
      airport.takeOff('plane');
      expect(airport.hangar).not.toContain('plane');
    });

    it('raises an error if its stormy', function() {
      stormy_airport.hangar = ['plane'];
      expect(function() {
      stormy_airport.takeOff('plane');
      }).toThrow('It is stormy out there!');

    });
  });
});
