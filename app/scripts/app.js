 (function() {
     function config($stateProvider, $locationProvider) {
         
         $locationProvider
             .html5Mode({
                enabled: true,
                requireBase: false
              });
         
         $stateProvider
            .state("conversation", {
                url:'/conversation',
                controller: "homeCtrl as home",
                templateUrl: '/templates/conversation.html'
         });
     }
 
 
     angular
         .module('byrd-bloc-chat', ['ui.router',"firebase", "ui.bootstrap", "ngCookies"])
         .config(config);
 })();