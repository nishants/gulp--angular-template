(function () {
  "use strict";

  app.controller("SearchController", ["$scope", "userInterface", function ($scope, userInterface) {

    $scope.$watch("search.keyword", function(keyword){
      userInterface.searchFor(keyword);
    })
  }]);
}).call(this);