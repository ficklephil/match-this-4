'use strict';

angular.module('matchThis4App')
    .controller('ResultsCtrl', function ($scope,$rootScope, $http) {

        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        function rgbToHex(r, g, b) {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }

        function getColorName(hexColor){
            var n_match = ntc.name(hexColor);
            var n_name = n_match[1];

//            console.log(n_match);
//            console.log('coloris :' +  String(n_match[3]));

            var colorToMatch = String(n_match[3]);

            $http.get('/api/product/'+colorToMatch+'+dresses').success(function(data) {
                console.log(data);

                $scope.products = data.products;
                console.log($scope.products);
            });
        }


        $scope.message = 'Hello';

        $scope.products = [];

            console.log('cameraPalette');
            console.log($rootScope.cameraPalette);
            console.log('cameraColor');
            console.log($rootScope.cameraColor);

            var rgb = $rootScope.cameraColor;
            var hexColor = rgbToHex(rgb[0],rgb[1],rgb[2]);

            getColorName(hexColor);
    });
