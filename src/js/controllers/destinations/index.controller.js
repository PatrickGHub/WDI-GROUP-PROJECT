angular
  .module('appres')
  .controller('DestinationsIndexCtrl', DestinationsIndexCtrl);

DestinationsIndexCtrl.$inject = [ 'DestinationFactory'];
function DestinationsIndexCtrl(DestinationFactory) {
  const vm = this;
  vm.all = DestinationFactory.query();
}
