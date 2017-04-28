app.directive('appDirective2', function(){
    // Runs during compile
    return {
        link: function($scope, iElm, iAttrs, controller) {
            
        },
        controller: function() {
            this.noise = 'bar';
        }
    };
});