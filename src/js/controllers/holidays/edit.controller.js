angular
  .module('appres')
  .controller('HolidaysEditCtrl', HolidaysEditCtrl);

HolidaysEditCtrl.$inject = ['HolidayFactory', '$state'];
function HolidaysEditCtrl(HolidayFactory, $state) {
  const vm = this;

  vm.holiday = {};
  vm.update    = update;

  vm.holiday = HolidayFactory.get($state.params);

  function update(){
    HolidayFactory
      .update({ id: $state.params.id }, vm.holiday)
      .$promise
      .then(() => $state.go('holidaysShow'));
  }
}
