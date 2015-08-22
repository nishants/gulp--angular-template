(function(){
  "use strict";
  window.app = angular.module('app',[]);
  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });
}).call(this);