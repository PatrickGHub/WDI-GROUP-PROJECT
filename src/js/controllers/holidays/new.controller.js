angular
  .module('appres')
  .controller('HolidaysCreateCtrl', HolidaysCreateCtrl);

HolidaysCreateCtrl.$inject = ['HolidayFactory', 'DestinationFactory', 'UserFactory', '$state'];
function HolidaysCreateCtrl(HolidayFactory, DestinationFactory, UserFactory, $state) {
  const vm = this;

  vm.newHoliday = {};
  vm.create     = create;
  vm.noResults = false;
  vm.destinations = DestinationFactory.query();
  vm.pickDestination = pickDestination;
  vm.users = UserFactory.query();
  vm.pickAttendee = pickAttendee;

  function pickDestination() {
  }

  function pickAttendee() {
  }

  function create(){
    HolidayFactory
      .save(vm.newHoliday)
      .$promise
      .then(() => $state.go('holidayIndex'));
  }

}
