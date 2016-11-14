(function(){
    function homeCtrl(){
        
        this.chatRooms = ["Room 1", "My Room", "Cool Room"];
        
    }
    
    angular
        .module("byrd-bloc-chat")
        .controller("homeCtrl", homeCtrl);
})();