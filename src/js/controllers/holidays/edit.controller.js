angular
  .module('appres')
  .controller('HolidaysEditCtrl', HolidaysEditCtrl);

HolidaysEditCtrl.$inject = ['HolidayFactory', '$state'];
function HolidaysEditCtrl(HolidayFactory, $state) {
  const vm = this;

  vm.holiday = HolidayFactory.get($state.params);
  vm.update  = update;

  function update(){
    HolidayFactory
      .update($state.params.id, vm.holiday)
      .$promise
      .then(() => $state.go('holidayShow', $state.params));
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
