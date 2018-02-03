angular
  .module('appres')
  .controller('HolidaysNewCtrl', HolidaysNewCtrl);

HolidaysNewCtrl.$inject = ['HolidayFactory', '$state'];
function HolidaysNewCtrl(HolidayFactory, $state) {
  const vm = this;

  vm.newHoliday = {};
  vm.create     = create;

  function create(){
    HolidayFactory
      .save(vm.newHoliday)
      .$promise
      .then(() => $state.go('holidaysShow'));
  }
}
