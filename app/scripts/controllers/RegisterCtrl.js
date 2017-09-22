angular.module('blocChat')
  .controller('RegisterCtrl', ['Auth',
    function(Auth) {
      var regCtrl = this;
      regCtrl.login = function() {
        Auth.login(regCtrl.user);
      }; //login
      regCtrl.register = function() {
        Auth.register(regCtrl.user);
      }; //register
    }
  ]);
