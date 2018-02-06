angular
  .module('appres')
  .controller('HolidaysIndexCtrl', HolidaysIndexCtrl);

HolidaysIndexCtrl.$inject = ['HolidayFactory'];
function HolidaysIndexCtrl(HolidayFactory) {
  const vm = this;
  vm.all = HolidayFactory.query();
}
