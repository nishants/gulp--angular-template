(function () {
  "use strict";
  app.factory("bookStore", ["$http", "BookFactory", function ($http, BookFactory) {

    var store = {
          filteredBooks: [],
          allBooks:[]
        },
        clear = function(arr){
          while(arr.length > 0) {arr.pop();}
        },
        error = function (error) {
          alert("Failed to connect : " + error);
        },
        onGetBooks = function (response) {
          var books = BookFactory.parse(response.data.books);
          clear(store.allBooks);
          clear(store.filteredBooks);
          for(var i = 0; i < books.length; i++){
            store.allBooks.push(books[i]);
            store.filteredBooks.push(books[i]);
          }
        },
        setBooks = function () {
          $http.get("books/all.json").then(onGetBooks, error)
        };

    setBooks();
    return store;
  }]);
}).call(this);