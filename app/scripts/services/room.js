(function() {
  function Room($firebaseArray) {
      
      var ref = firebase.database().ref().child("rooms");
      var rooms = $firebaseArray(ref);
      
      /*
      *@desc an abstract method that will use $add to add room to the rooms array
      *@args a room name
      */
      var addRoom = function(newRoomName) {
          rooms.$add({name: newRoomName});
      };
      
      return {
          all: rooms,
          add: addRoom
      };
    
      
      
  }

  angular
    .module('byrd-bloc-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();