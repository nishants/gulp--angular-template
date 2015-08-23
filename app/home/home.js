(function () {
  "use strict";

  app.controller("HomeController", ["$scope", "userInterface", "bookStore", function ($scope, userInterface, bookStore) {
    userInterface.hideLoader();

    bookStore.allBooks(function (books) {
          $scope.items = books;
        }
    );
  }]);
}).call(this);