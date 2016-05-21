(function () {
   "use strict";
  angular.module('dirApp', []).directive('name', function () {
    return {
      restrict: 'E',
      link:function (scope, ele, attr) {
        scope.fullName = attr.first + ' ' + attr.last
      },
      template:"<h1>{{fullName}}</h1>"
    }
  })
})();
