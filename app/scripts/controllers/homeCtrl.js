(function(){
    function homeCtrl(Room){
        
        //this.chatRooms = ["Room 1", "My Room", "Cool Room"];
        this.chatRooms = Room;
        
    }
    
    angular
        .module("byrd-bloc-chat")
        .controller("homeCtrl", homeCtrl);
})();