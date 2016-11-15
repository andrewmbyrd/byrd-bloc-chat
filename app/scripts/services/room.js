(function() {
  function Room($firebaseArray, buttons) {
      
      /*
      *@ desc rooms is a firebase array object which references ref
      */
      var ref = firebase.database().ref().child("rooms");
      var rooms = $firebaseArray(ref);
      
      /*
      *@desc an abstract method that will use $add to add room to the rooms array
      *@args a room name
      */
      var addRoom = function(newRoomName) {
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
      
      var removeRoom = function($scope){
          rooms.$remove($scope);
      };
      
      return {
          /*
          *@desc all is an object that is the list of rooms. add is a function that adds a room
          */
          all: rooms,
          add: addRoom,
          remove: removeRoom
      };
    
      
      
  }

  angular
    .module('byrd-bloc-chat')
    .factory('Room', ['$firebaseArray', 'buttons', Room]);
})();