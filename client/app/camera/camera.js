'use strict';

angular.module('matchThis4App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('camera', {
        url: '/camera',
        templateUrl: 'app/camera/camera.html',
        controller: 'CameraCtrl'
      });
  });