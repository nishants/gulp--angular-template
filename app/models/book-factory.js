(function () {
  "use strict";
  app.factory("BookFactory", [function ($http) {

    var
        Book = function (data) {
          this.id = data.id;
          this.name = data.name;
          this.description = data.description;
          this.preview = "books/preview/" + data.id + ".html"
        },

        parseToBooks = function (booksData) {
          var books = [];
          for (var i = 0; i < booksData.length; i++) {
            books.push(new Book(booksData[i]));
          }
          return books;
        };


    return {
      parse: parseToBooks
    };
  }]);
}).call(this);