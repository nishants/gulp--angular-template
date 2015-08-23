(function () {
  "use strict";
  app.factory("bookStore", ["$http", "BookFactory", function($http, BookFactory){

    return {
      allBooks: function(success, error){
        return $http.get("books/all.json").then(function(response){
          success(BookFactory.parse(response.data.books));
        }, error)
      }
    };
  }]);
}).call(this);