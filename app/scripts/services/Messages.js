(function() {
  function Messages($firebaseArray, $cookies) {
        
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
      message.username = $cookies.get("blocChatCurrentUser");
      message.content = "";
      message.sentAt = "";
      message.roomID = undefined;
      message.all = messagesList;
      message.page = [];
      
      
      /*
      *@desc this method is called in the Room factory. it sets the message room id to the current room *ID
      *@args a room object.
      */
      message.setRoomID = function(roomObject){
          if(roomObject){
              message.roomID = roomObject.$id;
          }
      }
      
      /*
      *@desc a function to make the message empty again after having been sent
      */
      message.clear = function(){
            message.content = "";
            message.sentAt = "";
      }
      
      /*
      *@desc a method to sort messages by roomID and store them in message.page
      *@args the roomID of the room we're currently in
      */
      message.getByRoomID = function(roomID){
          messagesRef.orderByChild("roomID").equalTo(roomID).on("value", function(snapshot){message.page = snapshot.val();});
          
      }
      
      /*
      *@desc this function gets time right now. it will be evaluated at time of message sending
      */
      message.establishTime = function(){
          var totalTimeElapsed = Date.now()+(new Date().getTimezoneOffset())*60000;
          var millisecondsToday = totalTimeElapsed % 86400000;
          var minutesToday = parseInt(millisecondsToday/1000/60);
          
          var hours = parseInt(minutesToday/60);
          var minutes = parseInt(minutesToday%60);
          
          if(minutes<10){
              minutes="0"+minutes;
          }
          
          message.sentAt = hours+":"+minutes;
      }
      
      /*
      @desc sends the message by appending it to the end of the array of messages
      */
      message.send = function(){
          message.establishTime();
          var currentMessage = {
              username: this.username,
              content: this.content,
              sentAt: this.sentAt,
              roomID: this.roomID
          };
          
          console.log(currentMessage);
          console.log(message.page);
          messagesList.$add(currentMessage);
          message.clear();
          
      }
      
      return message;
      
  }

  angular
    .module('byrd-bloc-chat')
    .factory('Messages', ['$firebaseArray', "$cookies", Messages]);
})();