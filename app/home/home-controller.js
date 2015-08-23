(function () {
  "use strict";

  app.controller("HomeController", ["$scope", "userInterface", "bookStore", function ($scope, userInterface, bookStore) {
    userInterface.hideLoader();

    $scope.items = bookStore.filteredBooks;
  }]);
}).call(this);