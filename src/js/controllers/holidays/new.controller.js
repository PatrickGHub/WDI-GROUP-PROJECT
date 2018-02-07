angular
  .module('appres')
  .controller('HolidaysCreateCtrl', HolidaysCreateCtrl);

HolidaysCreateCtrl.$inject = ['HolidayFactory', 'DestinationFactory', '$state'];
function HolidaysCreateCtrl(HolidayFactory, DestinationFactory, $state) {
  const vm = this;

  vm.newHoliday = {};
  vm.create     = create;
  vm.noResults = false;
  vm.destinations = DestinationFactory.query();

  vm.pickDestination = pickDestination;

  function pickDestination() {
    console.log('picked');
  }

  function create(){
    HolidayFactory
      .save(vm.newHoliday)
      .$promise
      .then(() => $state.go('holidayIndex'));
  }

}
