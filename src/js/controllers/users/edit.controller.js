angular
  .module('appres')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['UserFactory', '$state'];
function UsersEditCtrl(UserFactory, $state) {
  const vm = this;

  vm.user   = UserFactory.get($state.params);
  vm.update = update;
  console.log(vm.user);
  // vm.delete = destroy;


  function update(){
    UserFactory
      .update($state.params, vm.user)
      .$promise
      .then(() => $state.go('userEdit'));
  }

  // function destroy() {
  //   console.log('clicked');
  //   // send request to api containing id for user that i want to delete
  //   UserFactory
  //     .delete($state.params, vm.user)
  //     .$promise
  //     // .logout()
  //     .then(() => $state.go('landing'));
  // }
}
