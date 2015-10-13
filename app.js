var app = angular.module("app", []);

app.controller("buttonsController", ["$scope","$http", function($scope, $http) {
    $http.get("./sounds.json").success(function(data) {
      $scope.soundButtons = data;
    });
    $scope.isFavorite = function(item) {
      return item.favorite;
    };
}]);

app.directive("soundButton", function() {
  return {
    restrict: "E",
    transclude: true,
    templateUrl: "sound-button.html",
    link: function(scope, element, attrs) {
      var audio = new Audio("./assets/sounds/" + attrs.sound + ".wav");
      element.on("click", function() {
        audio.currentTime = 0;
        audio.play();
      });
    }
  };
});
