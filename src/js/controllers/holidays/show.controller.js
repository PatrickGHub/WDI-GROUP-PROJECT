angular
  .module('appres')
  .controller('HolidaysShowCtrl', HolidaysShowCtrl);

HolidaysShowCtrl.$inject = ['HolidayFactory', '$state'];

function HolidaysShowCtrl(HolidayFactory, $state) {
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
