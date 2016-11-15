(function() {
  function buttons($uibModal){
      
      var buttons={};
      
      buttons.modalObject={};
      
      buttons.open = function(){
                        var modalInstance= $uibModal.open({
                        bindToController: true,
                        controller: "formCtrl",
                        controllerAs: "form",
                        templateUrl: "/templates/modal.html",
                        ariaLabelledBy: "modal"
                
                        });
                        
                        buttons.modalObject = modalInstance;
                    };
      
      buttons.close = function(){
          buttons.modalObject.dismiss("Cancel");
      }
      
      return buttons;
      
      
  }

  angular
    .module('byrd-bloc-chat')
    .factory('buttons', ["$uibModal", buttons]);
})();