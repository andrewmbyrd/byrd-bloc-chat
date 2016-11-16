(function() {
  function Room($firebaseArray, buttons, Messages) {
      
      
      var Room={};
      /*
      *@ desc rooms is a firebase array object which references ref
      */
      var ref = firebase.database().ref().child("rooms");
      var rooms = $firebaseArray(ref);
      
      
      /*
      *@desc amethod that will use $add to add room to the rooms array
      *@args a room name
      */
      
      /*
      *@ holds the current room object
      */
      Room.currentRoom = undefined;
      
      /*
      *@stores the list of rooms from the firebase array
      */
      Room.all = rooms;
      
      
      Room.addRoom = function(newRoomName) {
          if(newRoomName == ""){
              alert("Please enter a room name");
          }else{
              rooms.$add({name: newRoomName});
              buttons.close();
              
          }
      };
      
      /*
      *@desc removes a room from the array
      *@args the room object in scope
      */
      
      Room.removeRoom = function($scope){
          rooms.$remove($scope);
      };
      
      
      
      /*
      *@desc this function takes the scope of the room name that was clicked, sets the current room
      *to that room, and sets messages' room Id to that room's ID
      *@args a room object
      */
      Room.setRoom = function($scope){
          Room.currentRoom=$scope;
          Messages.roomID = Room.currentRoom.$id;
          Messages.getByRoomID(Messages.roomID);
          console.log(Messages.page);
          
      }
      
      
      return Room;
    
      
      
  }

  angular
    .module('byrd-bloc-chat')
    .factory('Room', ['$firebaseArray', 'buttons', "Messages", Room]);
})();