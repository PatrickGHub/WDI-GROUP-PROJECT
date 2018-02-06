angular
  .module('appres')
  .controller('HolidaysIndexCtrl', HolidaysIndexCtrl);

HolidaysIndexCtrl.$inject = ['HolidayFactory', '$state'];
function HolidaysIndexCtrl(HolidayFactory, $state) {
  const vm = this;
  vm.all = HolidayFactory.query();

  vm.noResults = false;

  vm.pickHoliday = pickHoliday;

  function pickHoliday() {
    $state.go('holidayShow', { id: vm.selectedHoliday.id });
  }
}
