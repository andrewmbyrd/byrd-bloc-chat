(function() {
  function buttons($uibModal){
      /*
      *@desc instantiates the object that will be returned
      */
      var buttons={};
      
      /*
      *@desc at first, there is no modal object associated with the button
      */
      buttons.modalObject={};
      
      /*
      *@desc opens a modal and associates this modal object with the button
      */
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
      
      
      buttons.openUsernameModal = function(){
          var nameEntry = $uibModal.open({
                templateUrl: "/templates/userModal.html",
                bindToController: true,
                controller: "cookieCtrl",
                controllerAs: "cookie",
          });
          
          buttons.modalObject = nameEntry;
          
      }
      /*
      *@desc closes the modal object
      */
      buttons.close = function(){
          buttons.modalObject.dismiss("Cancel");
      }
      
      return buttons;
      
      
  }

  angular
    .module('byrd-bloc-chat')
    .factory('buttons', ["$uibModal", buttons]);
})();