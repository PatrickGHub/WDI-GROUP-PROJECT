angular
  .module('appres')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.newUser = {};
  vm.submit = submit;

  function submit() {
    $auth.signup(vm.newUser)
      .then(res => {
        $auth.setToken(res.data.token);
        $state.go('destinationsIndex');
      });
  }
}
