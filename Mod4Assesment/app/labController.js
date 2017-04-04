app.controller('labController', [
    '$scope', '$q', '$timeout', '$http', 'gitHub',
    function ($scope, $q, $timeout, $http, gitHub) {
        $scope.model = {
            number: 0,
            result: 'Ready',
        }

        $scope.checkOddNumber = checkOddNumber;
        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;
        $scope.model.search = '';

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

        
        function getRepos() {
            console.log('Get Repos called');
            console.log($scope.model.search);
            gitHub.getAll({ org: $scope.model.search }).$promise.then(function(response){
                console.log(response);
                $scope.model.repos = response;
                $scope.model.error = '';
            }, function(error) {
                $scope.model.error = 'Error';
                $scope.model.repos = '';
            })  
            ;
        }

        //function getRepos() {
        //    console.log('Called getRepos');
        //    $http.get('https://api.github.com/orgs/angular/repos')
        //        .then(function(response) {
        //            $scope.model.repos = response.data;
        //        }, function(error) {
         //           $scope.model.repos = 'Error' + response.data;
          //      });

        //}

        

        function checkOddNumber(input) {
            $scope.model.result = 'Working';
            checkOddNumberHandler(input).then(function(result) {
                $scope.model.result = 'Success' + result;
            }, function(result) {
                $scope.model.result = 'Error:' + result;
            });
        }

        /*function loadDetail(name) {
            var url = 'https://api.github.com/repos/angular/' + name;
            $http.get(url)
                .then(function(response) {
                    $scope.model.detail = response.data;
                }, function(error){
                    $scope.model.detail = {error: true, message: 'Error' + response.data.message};
                })
        }*/

        function loadDetail(name) {
            $scope.model.detail = gitHub.getDetail({ id: name, org: $scope.model.search });
        }



        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }

    }
]);