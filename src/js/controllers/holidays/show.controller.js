angular
  .module('appres')
  .controller('HolidayShowCtrl', HolidayShowCtrl);

HolidayShowCtrl.$inject = ['HolidayFactory', '$state'];

function HolidayShowCtrl(HolidayFactory, $state) {
  const vm = this;

  vm.holiday = {};
  vm.delete    = remove;

  vm.holiday = HolidayFactory.get($state.params);

  function remove(){
    HolidayFactory
      .remove($state.params)
      .$promise
      .then(() => $state.go('/'));
  }
}
