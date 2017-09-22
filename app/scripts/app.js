(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('login', {
        url: '/',
        controller: 'RegisterCtrl as regCtrl',
        templateUrl: '/templates/login.html'
      })
      .state('register', {
        url: '/register',
        controller: 'RegisterCtrl as regCtrl',
        templateUrl: '/templates/register.html'
      })
      .state('home', {
        url: '/home',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
  }

  angular
    .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase',
      'ngCookies'
    ])
    .config(config);
})();
