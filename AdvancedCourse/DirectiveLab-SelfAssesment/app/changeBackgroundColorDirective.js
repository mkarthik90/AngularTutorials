angular.module('app').directive('changeBackgroundColorDirective', function(){
    // Runs during compile
    return {
        restrict: 'A',
        replace: true,
        link: function($scope, element, attr) {
            console.log('link is called');
            element.on('mouseenter', function() {
                element.css('background-color', 'silver');    
            });
            element.on('mouseleave', function() {
                element.css('background-color', 'white');
            });
        }
    };
});