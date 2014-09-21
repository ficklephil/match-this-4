'use strict';

angular.module('matchThis4App')
  .controller('ResultsCtrl', function ($scope,$rootScope, $stateParams) {
    $scope.message = 'Hello';

    console.log('cameraPalette');
    console.log($rootScope.cameraPalette);
    console.log('cameraColor');
    console.log($rootScope.cameraColor);
  });
