angular
  .module('appres')
  .controller('HolidaysEditCtrl', HolidaysEditCtrl);

HolidaysEditCtrl.$inject = ['HolidayFactory', 'UserFactory', 'DestinationFactory', '$state', 'Flash'];
function HolidaysEditCtrl(HolidayFactory, UserFactory, DestinationFactory, $state, Flash) {
  const vm = this;

  vm.holiday = HolidayFactory.get($state.params);
  vm.update  = update;
  vm.noResults = false;
  vm.destinations = DestinationFactory.query();
  vm.pickDestination = pickDestination;
  vm.users = UserFactory.query();
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
    vm.users = vm.users.filter(user => user.id !== vm.selectedUser.id);
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
