(function(){
    'use strict';

    angular
        .module('app.step')
        .service('StepService', [
            '$http', 
            StepService
        ]);


    function StepService($http) {
        var self = this;

        self.steps = $http.get('/step')
        .then(function(response){
            return response.data;
        });

    }

})();
