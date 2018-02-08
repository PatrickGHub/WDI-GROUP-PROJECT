angular
  .module('appres')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$transitions', '$rootScope', '$state', '$auth'];
function MainCtrl($transitions, $rootScope, $state, $auth) {
  const vm = this;
  vm.logout = logout;
  vm.isNavCollapsed = true;



  $transitions.onSuccess({}, (transition) => {
    vm.pageName = transition.to().name;

    if (vm.stateHasChanged) vm.message = null;
    if (!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.isNavCollapsed = true;
    vm.isAuthenticated = $auth.isAuthenticated;
    if(vm.isAuthenticated()) {
      vm.currentUserId = $auth.getPayload().userId;
    }
  });

  $rootScope.$on('error', (e, err) => {
    vm.message = err.data.message;

    if (err.status === 401 && vm.pageName !== 'login') {
      vm.stateHasChanged = false;
      $state.go('login');
    }
  });

  function logout() {
    $auth.logout();
    $state.go('landing');
  }

}
