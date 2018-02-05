angular
  .module('appres')
  .controller('HolidaysIndexCtrl', HolidaysIndexCtrl);

HolidaysIndexCtrl.$inject = [ 'Holiday'];
function HolidaysIndexCtrl(Holiday) {
  const vm = this;
  vm.all = Holiday.query();
}
