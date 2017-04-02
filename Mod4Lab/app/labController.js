app.controller('labController', [
    '$scope', '$q', '$timeout',
    function ($scope, $q, $timeout) {
        $scope.model = {
            number: 0,
            result: 'Ready',
        }

        $scope.checkOddNumber = checkOddNumber;

        function checkOddNumberHandler(input) {
            var defer = $q.defer();

            $timeout(function() {
                if(isNumberOdd(input)) {
                    defer.resolve('Number is odd');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 2000);
            
            return defer.promise;
        }




        function checkOddNumber(input) {
            $scope.model.result = 'Working';
            checkOddNumberHandler(input).then(function(result) {
                $scope.model.result = 'Success' + result;
            }, function(result) {
                $scope.model.result = 'Error:' + result;
            });
        }


        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }

    }
]);