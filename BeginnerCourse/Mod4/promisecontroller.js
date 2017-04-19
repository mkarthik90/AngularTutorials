app1.controller('promiseControl', ['$scope', '$q', '$timeout', function($scope, $q, $timeout){
        
    var delayedFunction = function() {
        var value = 10;
        var defer = $q.defer();
        $timeout(function(){
            defer.resolve("First deferred response");

        }, 200);
        return defer.promise
    }


    var newResponse = function() {
        var defer = $q.defer();
        $timeout(function() {
            defer.resolve('Second deferred response');
        }, 1500)
        return defer.promise;
    }

    delayedFunction().then(function(reponse){
        $scope.value = reponse;
    })

    newResponse().then(function(response){
        $scope.value = response;
    })


}])