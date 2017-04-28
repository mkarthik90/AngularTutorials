angular.module('app')
    .factory('SessionFactory', ['$window', 'formattingFactory', 
    function($window, formattingFactory){
    
        var sessionFactory = {};

        sessionFactory.save = function(key, value) {
            $window.sessionStorage.setItem(key, formattingFactory.format(value));
        };

        sessionFactory.get = function(key, value) {
            return $window.sessionStorage.getItem(key);
        };

        sessionFactory.clear = function() {
            $window.sessionStorage.clear();
        };
        
        return sessionFactory;

}])

