(function () {
  "use strict";

  app.controller("SearchController", ["$scope", "bookStore", function ($scope, bookStore) {

    $scope.$watch("search.keyword", function(keyword){
      //bookStore.searchFor(keyword);
      console.log(keyword);
    })
  }]);
}).call(this);