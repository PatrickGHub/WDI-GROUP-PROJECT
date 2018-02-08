angular
  .module('appres')
  .controller('HolidaysCreateCtrl', HolidaysCreateCtrl);

HolidaysCreateCtrl.$inject = ['HolidayFactory', 'DestinationFactory', 'UserFactory', '$state'];
function HolidaysCreateCtrl(HolidayFactory, DestinationFactory, UserFactory, $state) {
  const vm = this;

  vm.newHoliday = { attendees: []};
  vm.create     = create;
  vm.noResults = false;
  vm.destinations = DestinationFactory.query();
  vm.pickDestination = pickDestination;
  vm.users = UserFactory.query();
  vm.pickAttendee = pickAttendee;

  function pickDestination() {
  }

  function pickAttendee() {
    vm.newHoliday.attendees.push(vm.selectedUser);
    vm.users = vm.users.filter(user => user.id !== vm.selectedUser.id);
    vm.selectedUser = '';
  }

  function create(){
    HolidayFactory
      .save(vm.newHoliday)
      .$promise
      .then(() => $state.go('holidayIndex'));
  }

}
