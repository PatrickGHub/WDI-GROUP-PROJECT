angular
  .module('appres')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('userEdit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/edit.html',
      controller: 'UsersEditCtrl as vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/users/login.html',
      controller: 'LoginCtrl as vm'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/users/register.html',
      controller: 'RegisterCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
