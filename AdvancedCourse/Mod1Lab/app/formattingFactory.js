angular.module('app').factory('formattingFactory', function(){
    var formattingFactoryFunctions = {};

    formattingFactoryFunctions.format = function(text) {
        if(text.length % 2 == 0) {
            // even number of charcters
            return text.toLowerCase();
        } else {
            return text.toUpperCase();
        }
    }

    return formattingFactoryFunctions;
})