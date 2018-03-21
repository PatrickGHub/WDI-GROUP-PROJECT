angular
  .module('appres')
  .controller('HolidaysEditCtrl', HolidaysEditCtrl);

HolidaysEditCtrl.$inject = ['HolidayFactory', 'UserFactory', 'DestinationFactory', '$state', 'Flash'];
function HolidaysEditCtrl(HolidayFactory, UserFactory, DestinationFactory, $state, Flash) {
  const vm = this;

  HolidayFactory
    .get($state.params)
    .$promise
    .then((holiday) => {
      vm.holiday = holiday;
      UserFactory
        .query()
        .$promise
        .then((users) => {
          vm.users = users;
          const attendeeIds = holiday.attendees.map((attendee) => attendee.id);
          vm.users = vm.users.filter((user) => {
            return (attendeeIds.indexOf(user.id) === -1);
          });
        });
    });
  vm.update  = update;
  vm.noResults = false;
  vm.destinations = DestinationFactory.query();
  vm.pickDestination = pickDestination;

  vm.pickAttendee = pickAttendee;

  function update(){
    HolidayFactory
      .update($state.params.id, vm.holiday)
      .$promise
      .then(() => {
        Flash.create('success', 'Your update has been saved');
      });
  }

  function pickDestination() {
  }

  function pickAttendee() {
    vm.holiday.attendees.push(vm.selectedUser);
    // vm.users = vm.users.filter(user => user.id !== vm.holiday.attendees.id);
    vm.selectedUser = '';
  }

  vm.delete = holidaysDelete;

  function holidaysDelete(){
    HolidayFactory.delete($state.params)
      .$promise
      .then(() => {
        $state.go('holidayIndex');
      });
  }
}

// { id: $state.params.id }
