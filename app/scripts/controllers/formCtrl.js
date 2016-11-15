(function(){
    function formCtrl(Room){
        
        /*
        *@ this allows us to update the room list
        */
        this.submit = Room.add;
        
        /*
        *@desc we bind this with ng-model when the form is submitted
        */
        this.roomName = "";
        
        
    }
    
    angular
        .module("byrd-bloc-chat")
        .controller("formCtrl",["Room", formCtrl]);
})();