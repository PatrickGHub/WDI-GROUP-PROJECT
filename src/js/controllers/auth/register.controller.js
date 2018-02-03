angular
  .module('appres')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};
  vm.submit = submit;

  function submit() {
    $auth.signup(vm.user)
      .then(() => {
        $state.go('login');
      });
  }
}
