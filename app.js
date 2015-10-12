var app = angular.module("app", []);

app.controller("buttonsController", ["$scope","$http", function($scope, $http) {
    $http.get("./sounds.json").success(function(data) {
      $scope.soundButtons = data;
    });
}]);

app.directive("soundButton", function() {
  return {
    restrict: "E",
    transclude: true,
    template: "<div><span class='label' ng-transclude></span></div>",
    link: function(scope, element, attrs) {
      var audio = new Audio("./sounds/" + attrs.sound + ".wav");
      element.on("click", function() {
        audio.currentTime = 0;
        audio.play();
      });
    }
  };
});
