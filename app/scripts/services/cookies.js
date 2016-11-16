(function(){
    function BlocChatCookies($cookies, $uibModal, buttons){
        var currentUser = $cookies.get("blocChatCurrentUser");
        if(!currentUser || currentUser === ""){
            buttons.openUsernameModal();
        }
    }
    
    angular
        .module("byrd-bloc-chat")
        .run(["$cookies", "$uibModal", "buttons", BlocChatCookies]);
})();