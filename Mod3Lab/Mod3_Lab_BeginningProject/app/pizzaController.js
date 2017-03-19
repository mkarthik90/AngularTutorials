app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = { title: 'Pizza Builder',
                        availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
                        selectedToppings: [],
                        success: false
         };

         

         $scope.addTopping = function(topping) {
            $scope.model.selectedToppings.push(topping);
            $scope.model.search = null;
            $scope.model.success = true;
         }

    }
]);