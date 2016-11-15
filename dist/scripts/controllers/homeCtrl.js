(function(){
    function homeCtrl(Room){
        
        this.chatRooms = Room.all;
        
    }
    
    angular
        .module("byrd-bloc-chat")
        .controller("homeCtrl", ['Room', homeCtrl]);
})();