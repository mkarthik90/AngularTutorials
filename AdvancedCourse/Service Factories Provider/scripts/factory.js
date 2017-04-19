var factoryModule = angular.module('factoryModule', [])
    factoryModule.factory('itunesFactory', function($http, $q){
        
        var _term = '';
        var _limit;

        var factoryService = {};

        factoryService.setTerm = function(term) {
            _term = term;
        }

        factoryService.getTerm = function() {
            return _term;
        }

        factoryService.setLimit = function(limit) {
            _limit = limit;
        }

        factoryService.getLimit = function(limit) {
            _limit = limit;
        }

        factoryService.searchItunes = function() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: getFinalUrl()
            }).then(function(response) {
                console.log('Success from factory');
                deferred.resolve(response);
            }, function(error) {
                console.log('Failure from factory');
                deferred.reject('Error' + error);
            });

            return deferred.promise;
        }

        function getFinalUrl() {
            var baseUrl = 'https://itunes.apple.com/search?term=';
            var newTerm = _term.split(' ').join('+');
            
            var finalUrl = baseUrl + newTerm;

            if(_limit !== undefined) {
                finalUrl = finalUrl + '&limit=' + _limit;
            }
            console.log('finalUrl' + finalUrl);
            return finalUrl;
        }

        
        return factoryService;
    });