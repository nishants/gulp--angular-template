(function () {
  "use strict";
  app.factory("userInterface", [function(){

    return {
      hideLoader: function(){
        document.getElementById("loader").style.display = "none";
      }
    };
  }]);
}).call(this);