angular
  .module('appres')
  .config(FileStack);

FileStack.$inject = ['filepickerProvider'];
function FileStack(filepickerProvider) {
  filepickerProvider.setKey('AdqO7oAlVRPKrdLocN84Pz');
}
