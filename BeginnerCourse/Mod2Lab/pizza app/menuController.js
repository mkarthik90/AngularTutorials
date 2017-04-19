var controller = app.controller('menuController', ['$scope', function($scope){
    $scope.model = {title: 'Our Menu'}
    
    var menuItems = [];
    menuItems.push({item: 'Pizza', price: 8.45});
    menuItems.push({item: 'BBQ Chicken Pizza', price: 9.67});
    menuItems.push({item: 'Combo Pizza', price: 18.04});

    $scope.model.menuItems = menuItems;

   
    $scope.changeMainDish = function(menuItem) {
        $scope.model.mainDish = menuItem.item;
        $scope.model.priceOfDish = menuItem.price;
    }
}])