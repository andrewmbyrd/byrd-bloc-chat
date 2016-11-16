(function(){
    function homeCtrl(Room, Messages){
        
        /*
        *@desc allows interation with Room factory
        */
        this.Room = Room;
        
        /*
        *@desc allows interaction with messages factory
        */
        this.message=Messages;
        
    }
    
    angular
        .module("byrd-bloc-chat")
        .controller("homeCtrl", ['Room', "Messages", homeCtrl]);
})();