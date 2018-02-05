angular
  .module('appres')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: '/js/views/landingpage.html'
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
    })
    .state('destinationsIndex', {
      url: '/destinations',
      templateUrl: '/js/views/destinations/index.html',
      controller: 'DestinationsIndexCtrl as vm'
    })
    .state('destinationsShow', {
      url: '/destinations/:id',
      templateUrl: '/js/views/destinations/show.html',
      controller: 'DestinationShowCtrl as vm'
    })
    .state('holidayIndex', {
      url: '/holidays',
      templateUrl: '/js/views/holidays/index.html',
      controller: 'HolidaysIndexCtrl as vm'
    })
    .state('holidayCreate', {
      url: '/holidays/new',
      templateUrl: '/js/views/holidays/new.html',
      controller: 'HolidaysCreateCtrl as vm'
    })
    .state('holidayEdit', {
      url: '/holidays/:id/edit',
      templateUrl: '/js/views/holidays/edit.html',
      controller: 'HolidaysEditCtrl as vm'
    })
    .state('holidayShow', {
      url: '/holidays/:id',
      templateUrl: '/js/views/holidays/show.html',
      controller: 'HolidaysShowCtrl as vm'
    })
    .state('userEdit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/edit.html',
      controller: 'UsersEditCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
