angular.module('app').service('personService', function(){
 
    this.authors = [{
        name:'Mark Twain',
        nationality: 'American',
        Dates: '05/23/1991'
    }, {
        name:'Mark Twain 2',
        nationality: 'American 2',
        Dates: '11/08/1990'
    }];
    return this;
})