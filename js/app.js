/**
 * Created by milos_000 on 02-Mar-16.
 */
angular.module('scroller', [])
    .controller('MainController', function($scope) {
        $scope.number = 25;
        $scope.getNumber = function(num){
            return new Array(num);
        };
    });