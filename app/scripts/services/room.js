(function() {
  function Room($firebaseArray, buttons) {
      
      
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
      
      Room.currentRoom = undefined;
      
      Room.all = rooms;
      
      Room.setRoom = function($scope){
          Room.currentRoom=$scope;
          console.log($scope);
          
      }
      
      
      return Room;
    
      
      
  }

  angular
    .module('byrd-bloc-chat')
    .factory('Room', ['$firebaseArray', 'buttons', Room]);
})();