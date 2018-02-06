angular
  .module('appres')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$transitions', '$rootScope', '$state', '$auth'];
function MainCtrl($transitions, $rootScope, $state, $auth) {
  const vm = this;

  vm.isAuthenticated = $auth.isAuthenticated();
  vm.logout = logout;
  if(vm.isAuthenticated) {
    vm.currentUserId = $auth.getPayload().userId;
  }

  function logout() {
    $auth.logout();
    $state.go('landing');
  }
}
