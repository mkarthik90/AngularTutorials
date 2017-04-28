angular.module('directiveModule')
    .directive('staticMessageDirective', function(){
        // Runs during compile
        return {
            restrict: 'EA',
            template: '<h2>This is a static directive</h2>'
        };
    });