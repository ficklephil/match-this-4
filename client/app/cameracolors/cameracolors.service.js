'use strict';

angular.module('matchThis4App')
  .service('CameraColors', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
        var savedData = {};
        function setCameraColors(data) {
            savedData = data;
        }
        function getCameraColors() {
            return savedData;
        }

        return {
            set: setCameraColors,
            get: getCameraColors
        }
  });
