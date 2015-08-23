(function () {
  "use strict";
  app.factory("bookStore", ["$http", function($http){

    return {
      allBooks: function(success, error){
        return $http.get("books/all.json").then(function(response){
          success(response.data.books);
        }, error)
      }
    };
  }]);
}).call(this);