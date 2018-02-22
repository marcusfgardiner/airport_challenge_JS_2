describe('Plane', function() {
  var plane;

  describe('plane status', function() {
    it('defaults to being a flying plane on creation', function() {
      plane = new Plane();
      expect(plane.isFlying).toBeTruthy();
    });

    it('changes plane status from flying to landed', function() {
      plane = new Plane();
      plane.changeFlyingStatus();
      expect(plane.isFlying).toBeFalsy();
    });
  });
});
