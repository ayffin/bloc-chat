(function() {
  function HomeCtrl($scope, Message, Room) {
    this.rooms = Room.all;
    this.changeRoom = function(room) {
      $scope.activeRoom = room;
      console.log($scope.activeRoom);
      $scope.messages = Message.getByRoomId($scope.activeRoom.$id);

    };


  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ["$scope", 'Message', 'Room', HomeCtrl]);
})();
