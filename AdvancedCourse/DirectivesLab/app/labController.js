angular.module('directiveModule')
    .controller('LabController', 
        function(){
            var vm = this;    

            vm.person = {
                name: 'Karthikeyan',
                penname: 'Mohan'
            };

            vm.show = function() {
                alert("Pased this function to directive. But this function is executed in controller scope."+JSON.stringify(vm.person));
            }
        }
    )