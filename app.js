var app = angular.module("app", []);

app.controller("buttonsController", ["$scope", function($scope) {
  $scope.soundButtons = [
    { name: "elephant-short",
      sound: "elephant-short"},
    { name: "elephant-long",
      sound: "elephant-long"},
    { name: "money",
      sound: "money"},
    { name: "elephant-short",
      sound: "elephant-short"},
  ];
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
