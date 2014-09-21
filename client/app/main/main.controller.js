'use strict';

angular.module('matchThis4App')
  .controller('MainCtrl', function ($scope,$rootScope, $state, $http, $interval) {
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


        var colorThief = new ColorThief();

    $scope.snap = function(){

        context.drawImage(video, 0, 0, 1, 1);
        var canvasImage = new CanvasImage(canvas);

        $rootScope.cameraPalette = colorThief.getPalette(canvasImage);
        $rootScope.cameraColor = colorThief.getColor(canvasImage);

        $state.go('results');

    };

        var colorThief = new ColorThief();

        //loop
        $interval(getPictureColor, 50);

        function getPictureColor(){

            try{
                context.drawImage(video, 0, 0, 1, 1);
                var canvasImage = new CanvasImage(document.getElementById("canvas"));
                var colorItem = colorThief.getColor(canvasImage);
                $('.match-this-button').css('background-color','rgb('+colorItem[0]+','+colorItem[1]+','+colorItem[2]+')');

            }catch(err){
                console.log('Video not there yet!');
            }
        }

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
