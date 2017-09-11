(function() {
  function UserInstanceCtrl($uibModalInstance, $cookies) {

    this.createUser = function() {
      $cookies.put('blocChatCurrentUser', this.username);
      $uibModalInstance.close();
    };


  }

  angular
    .module('blocChat')
    .controller('UserInstanceCtrl', ['$uibModalInstance', '$cookies',
      UserInstanceCtrl
    ]);
})();
