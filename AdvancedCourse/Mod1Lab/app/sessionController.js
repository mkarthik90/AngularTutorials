angular.module('app').controller('sessionController', ['$scope', 'sessionService', 'SessionFactory',
    function($scope, sessionService, SessionFactory){
        
                var vm = this;
                vm.getServiceSession = function() {
                    console.log('Get Service called');
                    vm.model = {
                        name: sessionService.get('name'),
                        nickname: sessionService.get('nickname'),
                        status: 'Retrived by service on data' + new Date()
                    }
                };   
                
                vm.setServiceSession = function() {
                    sessionService.save('name', vm.model.name);
                    sessionService.save('nickname', vm.model.nickname);
                    vm.getServiceSession();
                }; 
                
                vm.clearServiceSession = function() {
                    sessionService.clear();
                    vm.getServiceSession();
                };
            
                vm.getFactorySession = function() {
                    vm.model = {
                        name: SessionFactory.get('name'),
                        nickname: SessionFactory.get('nickname'),
                        status: 'Retrived by factory on date' + new Date()
                    }
                };

                vm.setFactorySession = function() {
                    SessionFactory.save('name', vm.model.name);
                    SessionFactory.save('nickname', vm.model.nickname);
                    vm.getFactorySession();
                };

                vm.clearFactorySession = function() {
                    SessionFactory.clear();
                    vm.getFactorySession();
                };
            
        
    }
])