(function(){
  "use strict";

  app.controller("HomeController", ["$scope", "userInterface", function($scope, userInterface){
    userInterface.hideLoader();

    $scope.items = [
        {
          name: "java i/o",
          description: "QuickBook"
        },
        {
          name: "unit testingangular controllerswith jasmine",
          description: "QuickBook"
        },
        {
          name: "test driven developmentfor java first timers",
          description: "QuickBook"
        },
        {
          name: "test driven developmentfor java developers",
          description: "QuickBook"
        }
    ]
  }]);
}).call(this);