(function(){
    function cookieCtrl($cookies, buttons){
        
        
        /*
        *@desc we bind this with ng-model when the form is submitted
        */
        this.userName = "";
        
        this.acceptUserName = function(){
            
            if(this.userName){
                $cookies.put("blocChatCurrentUser", this.userName);
                //console.log($cookies.get("blocChatCurrentUser"));
                buttons.close();
            }else{
                alert("Please enter a username");
            }
            
            
        }
        
        
    }
    
    angular
        .module("byrd-bloc-chat")
        .controller("cookieCtrl", ["$cookies", "buttons", cookieCtrl]);
})();
