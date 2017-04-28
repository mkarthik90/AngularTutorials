angular.module('app')
    .directive('personDirective', ['personService', function(personService){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                showDetails: '&'
            },
            link: function($scope, iElm, iAttrs, controller) {
                $scope.authors = personService.authors;
            },
            template: "<table class='table table-stripped'>"
        +"<tr>"
                +"<td>Name</td>"
                +"<td>Nationality</td>"
                +"<td>Dates</td>"
                +"<td>Details</td>"
        +"</tr>"

        +"<tr ng-repeat='person in authors' change-background-color-directive >"

                +"<td>{{person.name}}</td>"
                +"<td>{{person.nationality}}</td>"
                +"<td>{{person.Dates}}</td>"
                +"<td>"
                        +"<input type='button' value='Details' class='btn btn-primary' ng-click='showDetails({author: person})' />"
                +"</td>"
        +"</tr>"
        +"</table>"
        };
    }]);