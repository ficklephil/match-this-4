'use strict';

angular.module('matchThis4App')
    .controller('ResultsCtrl', function ($scope,$rootScope, $http) {

        $scope.matchedColor = '';

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

            console.log('coloris :' +  String(n_match[3]));

            $scope.matchedColor = String(n_match[3]);
            $scope.matchedColorHex = String(n_match[2]);

            var colorToMatch = String(n_match[3]);

            requestData(colorToMatch);
        }

        function requestData(colorToMatch){

            $http.get('/api/product/'+colorToMatch+'+dresses').success(function(data) {
                console.log(data);

                $scope.products = data.products;
                console.log($scope.products);
            });

            $scope.complimentaryColor = getComplimentaryColor(colorToMatch);
            console.log($scope.complimentaryColor);

            $http.get('/api/product/'+$scope.complimentaryColor+'+dresses').success(function(data) {
                console.log(data);

                $scope.complimentaryColoredProducts = data.products;
                console.log($scope.complimentaryColoredProducts);
            });

            $scope.complimentarySecondColor = getSecondComplimentaryColor(colorToMatch);
            console.log($scope.complimentarySecondColor);

            $http.get('/api/product/'+$scope.complimentarySecondColor+'+accessories').success(function(data) {
                console.log(data);

                $scope.complimentarySecondaryColoredProducts = data.products;
                console.log($scope.complimentarySecondaryColoredProducts);
            });
        }

        function getComplimentaryColor(color){
            console.log('getComplimentaryColor');
            console.log(color);

            if(color == 'Brown'){
                return 'red';
            }else if(color === 'Orange'){
                return 'red';
            }else if(color === 'Yellow'){
                return 'white';
            }else if(color === 'Red'){
                return 'white';
            }else if(color === 'Purple'){
                return 'blue';
            }else if(color === 'Blue'){
                return 'white';
            }else if(color === 'Grey'){
                return 'white';
            }else{
                return 'green';
            }
        }

        function getSecondComplimentaryColor(color){
            if(color == 'Brown'){
                return 'yellow';
            }else if(color === 'Orange'){
                return 'brown';
            }else if(color === 'Yellow'){
                return 'green';
            }else if(color === 'Red'){
                return 'black';
            }else if(color === 'Purple'){
                return 'white';
            }else if(color === 'Blue'){
                return 'black';
            }else if(color === 'Grey'){
                return 'black';
            }else{
                return 'green';
            }
        }

        function setHeaderColor(colorToMatch){
            $('.top-box').css('background-color',colorToMatch);

        }

        $scope.message = 'Hello';

        $scope.products = [];

            //REAL
            console.log('cameraPalette');
            console.log($rootScope.cameraPalette);
            console.log('cameraColor');
            console.log($rootScope.cameraColor);

            var rgb = $rootScope.cameraColor;
            var hexColor = rgbToHex(rgb[0],rgb[1],rgb[2]);
            getColorName(hexColor);

            //WORKING
//            $http.get('/api/product/red+dresses').success(function(data) {
//            console.log(data);
//
//            $scope.products = data.products;
//            console.log($scope.products);
//            });

    });
