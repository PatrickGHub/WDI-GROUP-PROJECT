angular
  .module('appres')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['UserFactory', '$state'];
function UsersEditCtrl(UserFactory, $state) {
  const vm = this;

  vm.user   = UserFactory.get($state.params);
  vm.update = update;

  function update(){
    UserFactory
      .update($state.params, vm.user)
      .$promise
      .then(() => $state.go('userEdit'));
  }
}
