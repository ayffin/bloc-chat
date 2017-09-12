(function() {
  function HomeCtrl($scope, Message, Room) {
    var home = this;
    home.rooms = Room.all;

    home.changeRoom = function(room) {
      $scope.activeRoom = room;
      console.log($scope.activeRoom);
      $scope.messages = Message.getByRoomId($scope.activeRoom.$id);

    };

    home.send = Message.send;



  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ["$scope", 'Message', 'Room',
      HomeCtrl
    ]);
})();
