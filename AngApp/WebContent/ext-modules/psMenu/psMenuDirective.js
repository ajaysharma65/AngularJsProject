/**
 * Created by acer on 6/23/2015.
 */

angular.module('psMenu').directive('psMenu', function() {
   return {
       scope: {

       },
       transclude: true,
       templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
       controller: 'psMenuController',
       link: function(scope, el, attr) {

       }
   };
});
