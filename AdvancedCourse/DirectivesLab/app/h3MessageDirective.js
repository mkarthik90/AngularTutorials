angular.module('directiveModule')
    .directive('h3MessageDirective', function(){
        return {
            scope: {
                title: '@'
            },
            restrict: 'E',
            link: function(scope, element, attr) {
                element.bind('mouseenter', function() {
                    console.log(element);
                    element.css('background-color', 'red')
                });
                element.bind('mouseleave', function() {
                    element.css('background-color', 'silver')
                });
            },
            template: '<h3>{{title}}</h3>'
        };
    });