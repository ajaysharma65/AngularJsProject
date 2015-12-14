/**
 * Created by acer on 7/13/2015.
 */

angular.module('psMenu').directive('psMenuGroup', function() {
    return {
        require: '^psMenu',
        transclude: true,
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuGroupTemplate.html',
        link: function(scope, el, attr, ctrl) {
            scope.isOpen = false;
            scope.closedMenu = function() {
                scope.isOpen = false;
            };
            scope.clicked = function() {
                scope.isOpen = !scope.isOpen;
            };
        }
    };
});
