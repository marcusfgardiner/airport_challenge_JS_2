describe ('Airport', function() {

  var airport;
  var stormy_airport;
  // var plane;
  // var planeFlying;
  // var planeLanded;

  beforeEach(function() {
    airport = new Airport();
    spyOn(airport.weather, 'isStormy').and.returnValue(false);
    stormy_airport = new Airport();
    spyOn(stormy_airport.weather, 'isStormy').and.returnValue(true);

    // planeFlying = {_isFlying: true};
    // planeLanded = {_isFlying: false};
    // spyOn(planeFlying, 'changeFlyingStatus').and.returnValue(false);
    // spyOn(planeLanded, 'changeFlyingStatus').and.returnValue(true);
  });

  describe('landing a plane', function() {

    it('stores a plane in hangar array', function() {
      var plane = function() {
        this.isFlying = true;
      };

      plane.prototype.changeFlyingStatus = function() {  this.isFlying = !this.isFlying;};
      // var plane = new Plane_mock();

      spyOn(plane, 'changeFlyingStatus').and.returnValue(false);
      // console.log(plane);

      // plane = jasmine.createSpyObj(plane, 'changeFlyingStatus');

      airport.land(plane);
      expect(airport.hangar).toContain(plane);
    });

  //   it('cannot land a plane that is already in the hangar', function(){
  //     expect( function() {
  //       airport.land(planeLanded);
  //     }).toThrow('This plane is already at an airport');
  //   });
  //
  //   it('raises an error if its stormy', function() {
  //     expect(function() {
  //       stormy_airport.land('plane');
  //     }).toThrow('It is stormy out there!');
  //   });
  //
  //   it('raises an error if hangar is full', function() {
  //     for (var i = 0; i < airport.capacity; i++) {
  //       airport.land('plane');
  //     }
  //
  //     expect(function() {
  //       airport.land('plane');
  //     }).toThrow('Too many planes!');
  //   });
  // });
  //
  // describe('taking off plane', function() {
  //
  //   it('removes plane from hangar array', function() {
  //     airport.hangar = ['plane'];
  //     airport.takeOff('plane');
  //     expect(airport.hangar).not.toContain('plane');
  //   });
  //
  //   it('raises an error if its stormy', function() {
  //     stormy_airport.hangar = ['plane'];
  //     expect(function() {
  //       stormy_airport.takeOff('plane');
  //     }).toThrow('It is stormy out there!');
  //   });
  //
  //   it("raises an error if a specific plane isn't in the hangar", function() {
  //     for (var i = 0; i < 5; i++) {
  //       airport.hangar.push('plane');
  //     }
  //     var plane = {};
  //     expect( function() {
  //       airport.takeOff(plane);
  //     }).toThrow('Plane not in hangar!');
  //   });
  //
  //   it('is able to take off specific plane', function() {
  //     var plane = {};
  //     airport.hangar = [plane, 'plane', 'plane'];
  //     airport.takeOff(plane);
  //     expect(airport.hangar).not.toContain(plane);
  //   });

  });
});
