(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider
            .state("landing",{
                url: "/",
                templateUrl: "/templates/landing.html"
        });
        
    }
    
    angular
            .module("byrd-bloc-chat",["firebase", "ui.router"])
            .config(config);
})();