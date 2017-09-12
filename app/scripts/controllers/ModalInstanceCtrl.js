(function() {
  function ModalInstanceCtrl($uibModalInstance) {
    var modalInstance = this;
    modalInstance.submit = function() {

      $uibModalInstance.close(modalInstance.room);
    };

    modalInstance.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
