(function () {
  "use strict";
  app.factory("BookFactory", [function ($http) {

    var
        Book = function (data) {
          this.id = data.id;
          this.name = data.name;
          this.description = data.description;
          this.preview = "books/preview/" + data.id + ".html";
          this.tags = data.tags;
        },


        parseToBooks = function (booksData) {
          var books = [];
          for (var i = 0; i < booksData.length; i++) {
            books.push(new Book(booksData[i]));
          }
          return books;
        };

    Book.prototype.hasTag = function(string){
      for(var i =0; i < this.tags.length; i++){
        if(this.tags[i].indexOf(string) != -1){
          return true;
        }
      }
      return false;
    };

    return {
      parse: parseToBooks
    };
  }]);
}).call(this);