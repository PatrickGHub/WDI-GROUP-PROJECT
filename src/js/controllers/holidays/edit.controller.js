angular
  .module('appres')
  .controller('HolidaysEditCtrl', HolidaysEditCtrl);

HolidaysEditCtrl.$inject = ['HolidayFactory', '$state', 'Flash'];
function HolidaysEditCtrl(HolidayFactory, $state, Flash) {
  const vm = this;

  vm.holiday = HolidayFactory.get($state.params);
  vm.update  = update;

  function update(){
    HolidayFactory
      .update($state.params.id, vm.holiday)
      .$promise
      .then(() => {
        Flash.create('success', 'Your update has been saved');
      });
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
