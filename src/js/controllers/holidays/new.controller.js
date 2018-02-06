angular
  .module('appres')
  .controller('HolidaysCreateCtrl', HolidaysCreateCtrl);

HolidaysCreateCtrl.$inject = ['HolidayFactory', '$state'];
function HolidaysCreateCtrl(HolidayFactory, $state) {
  const vm = this;

  vm.newHoliday = {};
  vm.create     = create;

  function create(){
    HolidayFactory
      .save(vm.newHoliday)
      .$promise
      .then(() => $state.go('landing'));
  }
}
