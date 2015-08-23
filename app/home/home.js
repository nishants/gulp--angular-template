(function () {
  "use strict";

  app.controller("HomeController", ["$scope", "userInterface", "bookStore", function ($scope, userInterface, bookStore) {
    userInterface.hideLoader();

    bookStore.allBooks(function (books) {
          $scope.items = books;
        }
    );
    $scope.previewFor = function(item){
      return "books/preview/" + item.id +".html";
    };
  }]);
}).call(this);