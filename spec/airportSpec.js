describe ('Airport', function() {

  var airport;

});

describe('landing a plane', function() {

  // it('lands a plane', function() {
  //   airport = new Airport();
  //   expect(airport.landPlane()).toBe(true);
  // });

  it('stores a plane in an array', function() {
    airport = new Airport();
    expect(airport.landPlane('plane')).toContain('plane')
  });


});
