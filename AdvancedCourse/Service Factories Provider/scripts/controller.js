app.controller('testController', ['$scope', 'itunesService', 'itunesFactory' , 
    function($scope, itunesService, itunesFactory){
    
    $scope.serviceSubmit = serviceSubmit;
    $scope.serviceReset = serviceReset;
    $scope.factorySubmit = factorySubmit;
    $scope.factoryReset = factoryReset;

    function serviceSubmit() {
        itunesService.setTerm($scope.serviceModel.term);
        itunesService.setLimit($scope.serviceModel.limit);
        itunesService.searchItunes().then(function(response) {
            $scope.serviceModel.result = response;
        }, function(error) {
            $scope.serviceModel.resultError = error;
        });
    }

    function serviceReset() {
        $scope.serviceModel = {};
    }

    function factorySubmit() {
        itunesFactory.setTerm($scope.factoryModel.term);
        itunesFactory.setLimit($scope.factoryModel.limit);
        itunesFactory.searchItunes().then(function(response) {
            $scope.factoryModel.result = response;
        }, function(error) {
            $scope.factoryModel.resultError = error;
        });  

    }

    function factoryReset() {
        $scope.factoryModel = {};
    }

}])