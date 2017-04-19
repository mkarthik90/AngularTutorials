app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {

        $scope.favoritePizza = ['',
            'Cheese Pizza',
            'Pepperoni Pizza',
            'Margherita Pizza',
            'BBQ Chicken Pizza',
            'Combo Pizza'];

        $scope.model = {selectedFavorite: ''};

        $scope.reset = reset;
        $scope.submit = submit;


        function reset() {
            $scope.model = {};
        }

        function submit(model) {
            alert('submitted value is ' + JSON.stringify(model));
            registration.submit(model).$promise.then(function(response) {
                alert('Success');
            }, function(error){
                alert('Token is'+error);
                $scope.model = {};
            }); 
        }
    }
]);