(function() {
  function ModalInstanceCtrl($uibModalInstance) {

    this.submit = function() {

      $uibModalInstance.close(this.room);
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
