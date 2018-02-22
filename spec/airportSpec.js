describe ('Airport', function() {

  var airport;
  var stormy_airport;
  var planeFlying;
  var planeLanded;

  beforeEach(function() {
    airport = new Airport();
    spyOn(airport.weather, 'isStormy').and.returnValue(false);
    stormy_airport = new Airport();
    spyOn(stormy_airport.weather, 'isStormy').and.returnValue(true);
    planeFlying = {_isFlying: true};
    planeLanded = {_isFlying: false};
    spyOn(planeFlying, 'changeFlyingStatus').and.returnValue(false);
    spyOn(planeLanded, 'changeFlyingStatus').and.returnValue(true);
  });

  describe('landing a plane', function() {

    it('stores a plane in hangar array', function() {
      airport.land(planeFlying);
      expect(airport.hangar).toContain(planeFlying);
    });

    it('cannot land a plane that is already in the hangar', function(){
      expect( function() {
        airport.land(planeLanded);
      }).toThrow('This plane is already at an airport');
    });

    it('raises an error if its stormy', function() {
      expect(function() {
        stormy_airport.land(planeFlying);
      }).toThrow('It is stormy out there!');
    });

    it('raises an error if hangar is full', function() {
      for (var i = 0; i < airport.capacity; i++) {
        airport.land(planeFlying);
      }

      expect(function() {
        airport.land(planeFlying);
      }).toThrow('Too many planes!');
    });
  });

  describe('taking off plane', function() {

    it('removes plane from hangar array', function() {
      airport.land(planeFlying);
      airport.takeOff(planeFlying);
      expect(airport.hangar).not.toContain(planeFlying);
    });

    it('raises an error if its stormy', function() {
      stormy_airport.hangar = [planeFlying];
      expect(function() {
        stormy_airport.takeOff(planeFlying);
      }).toThrow('It is stormy out there!');
    });

    it("raises an error if a specific plane isn't in the hangar", function() {
      for (var i = 0; i < 5; i++) {
        airport.land(planeFlying);
      }
      var plane = {};
      expect( function() {
        airport.takeOff(plane);
      }).toThrow('Plane not in hangar!');
    });

    it('is able to take off specific plane', function() {
      var plane = {};
      airport.hangar = [plane, planeFlying, planeFlying];
      airport.takeOff(plane);
      expect(airport.hangar).not.toContain(plane);
    });

  });
});
