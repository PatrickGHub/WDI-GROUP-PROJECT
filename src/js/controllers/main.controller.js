angular
  .module('appres')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$transitions', '$rootScope', '$state', '$auth'];
function MainCtrl($transitions, $rootScope, $state, $auth) {
  const vm = this;
  vm.logout = logout;
  vm.isNavCollapsed = true;

  $transitions.onSuccess({}, () => {
    vm.isNavCollapsed = true;
    vm.isAuthenticated = $auth.isAuthenticated;
    if(vm.isAuthenticated()) {
      vm.currentUserId = $auth.getPayload().userId;
    }
  });

  function logout() {
    $auth.logout();
    $state.go('landing');
  }

}
