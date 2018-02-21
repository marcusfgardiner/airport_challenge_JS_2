describe ('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
    airport.land('plane');
  });

  describe('landing a plane', function() {

    it('stores a plane in hangar array', function() {
      expect(airport.hangar).toContain('plane');
    });

    it('raises an error if its stormy', function() {
      // spyOn(Weather, 'isStormy').and.returnValue(true);
      spyOn(Math, 'random').and.returnValue(true);
      expect( function() { airport.land('plane'); }).toThrow('It is stormy out there!');
    });

  });

  describe('taking off plane', function() {

    it('removes plane from hangar array', function() {
      airport.takeOff('plane');
      expect(airport.hangar).not.toContain('plane');
    });

  });

});
