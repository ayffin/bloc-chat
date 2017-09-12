(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {

      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };
    Message.send = function(newMessage, activeRoom) {
      var obj = {
        username: $cookies.get('blocChatCurrentUser'),
        content: newMessage,
        sentAt: Date.now(),
        roomId: activeRoom.$id
      };
      console.log(obj);
      messages.$add(obj);



    };



    return Message;
  }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
