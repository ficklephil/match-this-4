'use strict';

angular.module('matchThis4App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

        //HTML5 VIDEO
        // Grab elements, create settings, etc.
        var canvas = document.getElementById("canvas"),
            context = canvas.getContext("2d"),
            video = document.getElementById("video"),
            videoObj = { "video": true },
            errBack = function(error) {
                console.log("Video capture error: ", error.code);
            };

        // Put video listeners into place
        if(navigator.getUserMedia) { // Standard
            navigator.getUserMedia(videoObj, function(stream) {
                video.src = stream;
                video.play();
            }, errBack);
        } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
            navigator.webkitGetUserMedia(videoObj, function(stream){
                video.src = window.webkitURL.createObjectURL(stream);
                video.play();
            }, errBack);
        }
        else if(navigator.mozGetUserMedia) { // Firefox-prefixed
            navigator.mozGetUserMedia(videoObj, function(stream){
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }, errBack);
        }

    $scope.snap = function(){

        var colorThief = new ColorThief();

        context.drawImage(video, 0, 0, 640, 480);
        var canvasImage = new CanvasImage(canvas);

        console.log(colorThief.getColor(canvasImage));
        console.log(colorThief.getPalette(canvasImage));

        $scope.getShopSense();
    };

    $scope.getShopSense = function(){
        console.log('In shop sense.');

        $http.get('/api/product/red+dresses').success(function(data) {
            console.log(data);
        });
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
