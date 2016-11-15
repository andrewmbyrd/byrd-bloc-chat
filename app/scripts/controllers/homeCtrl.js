(function(){
    function homeCtrl(Room){
        
        this.chatRooms = Room.all;
        this.remove = Room.remove;
        
    }
    
    angular
        .module("byrd-bloc-chat")
        .controller("homeCtrl", ['Room', homeCtrl]);
})();