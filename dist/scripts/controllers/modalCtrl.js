(function (){
    function modalCtrl($uibModal, Room){
    
        this.open = function(){
            $uibModal.open({
            templateUrl: "/templates/modal.html",
            
            })
            
        }
        
        this.submit = Room.add;
        
        this.roomName="";
        
    }
    angular
        .module("byrd-bloc-chat")
        .controller("modalCtrl", ["$uibModal", "Room", modalCtrl]);
 
})();