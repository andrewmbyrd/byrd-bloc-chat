(function() {
  function Room($firebaseArray) {
      
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
          }
      };
      
      return {
          /*
          *@desc all is an object that is the list of rooms. add is a function that adds a room
          */
          all: rooms,
          add: addRoom
      };
    
      
      
  }

  angular
    .module('byrd-bloc-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();