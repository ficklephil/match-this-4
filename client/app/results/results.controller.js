'use strict';

angular.module('matchThis4App')
    .controller('ResultsCtrl', function ($scope,$rootScope, $http) {
        $scope.message = 'Hello';

            console.log('cameraPalette');
            console.log($rootScope.cameraPalette);
            console.log('cameraColor');
            console.log($rootScope.cameraColor);

        $http.get('/api/product/red+dresses').success(function(data) {
            console.log(data);
        });
    });
