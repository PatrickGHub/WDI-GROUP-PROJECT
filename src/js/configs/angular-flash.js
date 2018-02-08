angular
  .module('appres')
  .config(FlashConfig);

FlashConfig.$inject = ['FlashProvider'];
function FlashConfig(FlashProvider) {
  FlashProvider.setTimeout(4000);
  FlashProvider.setShowClose(false);
}
