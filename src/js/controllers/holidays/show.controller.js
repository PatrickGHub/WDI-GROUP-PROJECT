angular
  .module('appres')
  .controller('HolidaysShowCtrl', HolidaysShowCtrl);

HolidaysShowCtrl.$inject = ['HolidayFactory', 'HolidayComment', '$state'];

function HolidaysShowCtrl(HolidayFactory, HolidayComment, $state) {
  const vm = this;

  vm.holiday = {};
  vm.delete = remove;
  vm.addComment = addComment;
  vm.deleteComment = deleteComment;

  vm.holiday = HolidayFactory.get($state.params);

  function remove(){
    HolidayFactory
      .remove($state.params)
      .$promise
      .then(() => $state.go('/'));
  }

  function addComment() {
    HolidayComment
      .save({ holidayId: vm.holiday.id }, vm.newComment)
      .$promise
      .then((comment) => {
        vm.holiday.comments.push(comment);
        vm.newComment = {};
      });
  }


  function deleteComment(comment) {
    HolidayComment
      .delete({ holidayId: vm.holiday.id, id: comment.id })
      .$promise
      .then(() => {
        const index = vm.holiday.comments.indexOf(comment);
        vm.holiday.comments.splice(index, 1);
      });
  }

}
