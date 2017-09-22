(function() {

  function Auth($rootScope, $firebaseAuth, $location, $firebaseObject) {
    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    auth.$onAuthStateChanged(function(authUser) {
      if (authUser) {
        var userRef = ref.child('users').child(authUser.uid);
        var userObj = $firebaseObject(userRef);
        $rootScope.currentUser = userObj;
      } else {
        $rootScope.currentUser = '';

      }
    });

    return {
      login: function(user) {
        auth.$signInWithEmailAndPassword(
          user.email,
          user.password
        ).then(function(user) {
          $location.path('/home');
        }).catch(function(error) {
          $rootScope.message = error.message;
        }); //signInWithAndPassword
      }, //login
      register: function(user) {
          auth.$createUserWithEmailAndPassword(
            user.email,
            user.password
          ).then(function(regUser) {
            var regRef = ref.child('users')
              .child(regUser.uid).set({
                date: firebase.database.ServerValue.TIMESTAMP,
                regUser: regUser.uid,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
              }); //userinfo
            $rootScope.message = 'Hi ' + user.firstname +
              'Thanks for registring';
          }).catch(function(error) {
            $rootScope.message = error.message;
          }); //createUserWithEmailAndPassword
        } //register
    }; //return
  }

  angular
    .module('blocChat')
    .factory('Auth', ['$rootScope', '$firebaseAuth', "$location",
      '$firebaseObject', Auth
    ]);
})();
