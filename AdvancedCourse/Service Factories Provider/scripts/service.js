var serviceModule = angular.module('serviceModule', [])
    serviceModule.service('itunesService', ['$http', '$q', function($http, $q){
        var _term = '';
        var _limit = '';

        this.getTerm = function() {
            return _term;
        }

        this.setTerm = function(term) {
            this._term = term;
        }

        this.setLimit = function(limit) {
            this._limit = limit;
        }

        this.getLimit = function() {
            return this._limit;
        }

        this.makeUrl = function() {
            var baseUrl = 'https://itunes.apple.com/search?term=';
            var newTerm = this._term.split(' ').join('+');
            
            var finalUrl = baseUrl + newTerm;

            if(this._limit !== undefined) {
                finalUrl = finalUrl + '&limit=' + this._limit;
            }
            console.log('finalUrl' + finalUrl);
            return finalUrl;
        }

        this.searchItunes = function() {
            var deffer = $q.defer();

            var config = {headers:  {
                    'Access-Control-Allow-Origin': true
                }
            };

            $http({
                method: 'GET',
                url: this.makeUrl()
            }).then(function(response) {
                deffer.resolve(response);
            }, function(error) {
                deffer.reject(error);
            });

            return deffer.promise;

        }

        return this;
    }]);