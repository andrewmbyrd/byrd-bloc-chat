(function (){
    function modalCtrl(buttons){
        
        this.button=buttons;
        
    }
    angular
        .module("byrd-bloc-chat")
        .controller("modalCtrl", ["buttons", modalCtrl]);
 
})();