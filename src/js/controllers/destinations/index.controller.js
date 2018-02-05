angular
  .module('appres')
  .controller('DestinationsIndexCtrl', DestinationsIndexCtrl);

DestinationsIndexCtrl.$inject = [ 'Destination'];
function DestinationsIndexCtrl(Destination) {
  const vm = this;
  vm.all = Destination.query();
}
