angular
  .module('appres')
  .controller('HolidaysIndexCtrl', HolidaysIndexCtrl);

HolidaysIndexCtrl.$inject = ['HolidayFactory', '$state', '$auth', 'UserFactory', 'Flash'];
function HolidaysIndexCtrl(HolidayFactory, $state, $auth, UserFactory, Flash) {
  const vm = this;
  vm.all = HolidayFactory.query();

  vm.noResults = false;

  vm.currentUser = UserFactory.get({ id: $auth.getPayload().userId });

  vm.pickHoliday = pickHoliday;

  function pickHoliday() {
    if(vm.selectedHoliday.attendees.indexOf(vm.currentUser.id) !== -1) {
      $state.go('holidayShow', ({ id: vm.selectedHoliday.id }));
    } else {
      // vm.message = 'You are not attending this holiday';
      Flash.create('danger', 'You are not attending this holiday');
      vm.selectedHoliday = '';
    }

  }
}
