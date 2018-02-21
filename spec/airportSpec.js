describe ('Airport', function() {

  var airport; //, weather;

  // var weather = {
  //   isStormy: function() {
  //     return true
  //   }
  // }

  beforeEach(function() {
    airport = new Airport();
    // airport.land('plane');
  });

  describe('landing a plane', function() {

    // it('stores a plane in hangar array', function() {
    //   expect(airport.hangar).toContain('plane');
    // });

    it('raises an error if its stormy', function() {
      // console.log('1', airport.weather.isStormy())
      // console.log(weather)
      // console.log(airport)

      spyOn(airport.weather, 'isStormy').and.returnValue(true);
      console.log('2', airport.weather.isStormy())
      // spyOn(Math, 'random').and.returnValue(0.9);
      console.log('3', airport.weather.isStormy());
      // console.log('4', airport.land('plane'));

      expect(function() {
        airport.land('plane')
      }).toThrow('It is stormy out there!');

    });

  });

  // describe('taking off plane', function() {
  //
  //   it('removes plane from hangar array', function() {
  //     airport.takeOff('plane');
  //     expect(airport.hangar).not.toContain('plane');
  //   });
  //
  // });

});
