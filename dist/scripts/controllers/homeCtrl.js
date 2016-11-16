(function(){
    function homeCtrl(Room, Messages){
        
        this.Room = Room;
        
        this.message=Messages;
        
    }
    
    angular
        .module("byrd-bloc-chat")
        .controller("homeCtrl", ['Room', "Messages", homeCtrl]);
})();