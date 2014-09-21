'use strict';

describe('Controller: CameraCtrl', function () {

  // load the controller's module
  beforeEach(module('matchThis4App'));

  var CameraCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CameraCtrl = $controller('CameraCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
