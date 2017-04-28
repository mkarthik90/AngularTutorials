angular.module('directiveModule')
    .directive('person', function(){
        // Runs during compile
        return {
            restrict: 'E',
            scope: {
                person: '=',
                action: '&'
            },
            template: "Person Name: <input type='text' ng-model='person.name' class='form-control' /> Pen Name: <input type='text' ng-model='person.penname' class='form-control' /> "+
            "<input type='button' ng-click='action()' value='Action' class='btn btn-primary' />" +
            "<pre>{{person | json}}"
        };
    });