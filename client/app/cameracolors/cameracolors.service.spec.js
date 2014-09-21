'use strict';

describe('Service: cameracolors', function () {

  // load the service's module
  beforeEach(module('matchThis4App'));

  // instantiate service
  var cameracolors;
  beforeEach(inject(function (_cameracolors_) {
    cameracolors = _cameracolors_;
  }));

  it('should do something', function () {
    expect(!!cameracolors).toBe(true);
  });

});
