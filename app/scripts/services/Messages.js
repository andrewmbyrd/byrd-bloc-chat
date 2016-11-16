(function() {
  function Messages($firebaseArray, Room) {
        
      //instantiates the message object we're going to return
      var message = {};
     
      /*
      *@ desc messages is a firebase array object which references messageRef
      */
      var messagesRef = firebase.database().ref().child("messages");
      var messagesList = $firebaseArray(messagesRef);
      
      
      /*
      *@desc these variables build out our message object. They will be populated by user entry and state capture later
      */
      message.username = "Test User";
      message.content = "";
      message.sentAt = "10:00";
      message.roomID = undefined;;
      message.all = messagesList;
      message.page = [];
      
      
      
      message.setRoomID = function(roomObject){
          if(roomObject){
              message.roomID = roomObject.$id;
          }
      }
      /*
      *@desc a function to make the message empty again after having been sent
      */
      
      
      message.clear = function(){
            message.username = "";
            message.content = "";
            message.sentAt = "";
            message.roomID = ""; 
      }
      
      /*
      *@desc a method to sort messages by roomID
      */
      message.getByRoomID = function(roomID){
          var thisList = messagesRef.orderByChild(roomID);
          console.log(thisList);
          
      }
      /*
      @desc sends the message by appending it to the end of the array of messages for the room
      */
      message.send = function(){
          var currentMessage = {
              username: this.username,
              content: this.content,
              sentAt: this.sentAt,
              roomID: this.roomID
          };
          messagesList.$add(currentMessage);
          message.clear();
          
      }
      
      return message;
      
  }

  angular
    .module('byrd-bloc-chat')
    .factory('Messages', ['$firebaseArray',"Room", Messages]);
})();