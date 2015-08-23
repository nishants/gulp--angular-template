(function () {
  "use strict";
  app.factory("userInterface", ["bookStore", function(bookStore){

    return {
      searchFor: function(keyword){
        bookStore.filterBy(keyword);
      },
      hideLoader: function(){
        document.getElementById("loader").style.display = "none";
      }
    };
  }]);
}).call(this);