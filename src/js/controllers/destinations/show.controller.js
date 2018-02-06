angular
  .module('appres')
  .controller('DestinationShowCtrl', DestinationShowCtrl);

DestinationShowCtrl.$inject = ['DestinationFactory', '$state'];

function DestinationShowCtrl(DestinationFactory, $state) {
  const vm = this;

  vm.destination = {};

  vm.destination = DestinationFactory.get($state.params);
}
