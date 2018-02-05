angular
  .module('appres')
  .controller('DestinationShowCtrl', DestinationShowCtrl);

DestinationShowCtrl.$inject = ['DestinationFactory', '$state'];

function DestinationShowCtrl(DestinationFactory, $state) {
  const vm = this;

  vm.holiday = {};
  vm.delete    = remove;

  vm.holiday = DestinationFactory.get($state.params);

  function remove(){
    DestinationFactory
      .remove($state.params)
      .$promise
      .then(() => $state.go('/'));
  }
}
