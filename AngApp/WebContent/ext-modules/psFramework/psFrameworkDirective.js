/**
 * Created by acer on 6/23/2015.
 */

angular.module('psFramework').directive('psFramework', function() {
   return {
       transclude: true,
       scope: {
           title: '@',
           subTitle: '@',
           iconFile: '@'
       },
       controller: 'psFrameworkController',
       templateUrl: 'ext-modules/psFramework/psFrameworkTemplate.html'
   }
});
