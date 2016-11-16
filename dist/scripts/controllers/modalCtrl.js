(function (){
    function modalCtrl(buttons){
        
        /*
        *@desc allows interaction with the buttons on the modal
        */
        this.button=buttons;
        
    }
    angular
        .module("byrd-bloc-chat")
        .controller("modalCtrl", ["buttons", modalCtrl]);
 
})();