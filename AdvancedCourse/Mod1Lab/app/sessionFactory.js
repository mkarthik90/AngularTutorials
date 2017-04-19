angular.module('app').factory('SessionFactory', ['$window', function($window){
    
        var sessionFactory = {};

        sessionFactory.save = function(key, value) {
            $window.sessionStorage.setItem(key, value);
        };

        sessionFactory.get = function(key, value) {
            return $window.sessionStorage.getItem(key);
        };

        sessionFactory.clear = function() {
            $window.sessionStorage.clear();
        };
        
        return sessionFactory;

}])