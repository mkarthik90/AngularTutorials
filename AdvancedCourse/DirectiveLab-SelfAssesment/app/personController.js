angular.module('app')
    .controller('personController',function(){
        var vm = this;
        
        vm.showDetailsInController = function(person) {
            alert(person.name);
            alert(person.nationality);
            alert(person.Dates);
            alert('called inc ontroller');
        }
    });