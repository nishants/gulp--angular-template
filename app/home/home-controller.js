(function () {
  "use strict";

  app.controller("HomeController", ["$scope", "userInterface", "bookStore", function ($scope, userInterface, bookStore) {
    userInterface.hideLoader();

    $scope.books = bookStore.filteredBooks;
  }]);
}).call(this);