(function(){
    'use strict';

    angular
        .module('app.step')
        .controller('StepsController', [
            'StepService',
            StepsController
        ]);

    function StepsController(StepService) {
        var self = this;
        
        self.steps = [];
        StepService.steps
        .then( function( steps ) {
            self.steps = [].concat(steps);
        });
    }

})();
