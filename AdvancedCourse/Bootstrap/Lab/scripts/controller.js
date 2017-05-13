angular.module('app').controller('bootstrapController', ['$scope', function($scope){
    $scope.toggle = true;
    $scope.alerts = [];
    $scope.alerts.push({
        'msg' : 'Hello There!',
        'type' : 'success'
    });

    $scope.alerts.push({
        'msg' : 'WOAAA There',
        'type' : 'warning'
    });

    $scope.closeAlert = function(index) {
        console.log('Close Alert at ' + index);
    }

}]);