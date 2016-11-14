 (function() {
     function config($stateProvider, $locationProvider) {
         
         $locationProvider
             .html5Mode({
                enabled: true,
                requireBase: false
              });
         
         $stateProvider
            .state("home", {
                url:'/',
                templateUrl: '/templates/home.html'
         });
     }
 
 
     angular
         .module('byrd-bloc-chat', ['ui.router'])
         .config(config);
 })();