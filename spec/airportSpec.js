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

    it('raises an error if hangar is full', function() {
      for (var i = 0; i < airport.capacity; i++) {
        airport.land('plane');
      }

      expect(function() {
        airport.land('plane');
      }).toThrow('Too many planes!');
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

    it("raises an error if a specific plane isn't in the hangar", function() {
      for (var i = 0; i < 5; i++) {
        airport.land('plane');
      }
      var plane = {};
      expect( function() {airport.takeOff(plane);}).toThrow('Plane not in hangar!');
    });
    //
    // it('raises an error if plane is already in the air', function() {
    //   // var plane = {};
    //   airport.hangar = [];
    //   expect( function() {airport.takeOff('plane');}).toThrow('');
    // });

    // planes that are already flying cannot takes off and/or be in an airport
    // planes that are landed cannot land again and must be in an airport, etc.
    // test for taking off without planes in hangar
    // test for taking off specific plane
    // ensuring that planes can only take off from airports they are in
  });
});
