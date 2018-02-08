angular
  .module('appres')
  .controller('UsersNewCtrl', UsersNewCtrl);

UsersNewCtrl.$inject = ['UserFactory', '$state'];
function UsersNewCtrl(UserFactory, $state) {
  const vm = this;

  vm.newUser    = {};
  vm.submit     = create;

  function create(){
    console.log('click');
    UserFactory
      .save(vm.newUser)
      .$promise
      .then(() => $state.go('login'));
  }
}
