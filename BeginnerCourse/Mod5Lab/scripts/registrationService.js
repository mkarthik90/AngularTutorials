var registrationService = angular.module('registrationService', ['ngResource'])
    registrationService.factory('registration', ['$resource', function($resource) {
        return $resource('http://reqres.in/api/register', {}, 
        {
            submit: {
                method: 'POST'
            },
        });
    
    }]);
    