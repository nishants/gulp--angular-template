(function(){
  "use strict";

  app.controller("HomeController", ["$scope", function($scope){
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