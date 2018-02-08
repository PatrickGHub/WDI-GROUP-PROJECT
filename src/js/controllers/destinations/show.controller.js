angular
  .module('appres')
  .controller('DestinationShowCtrl', DestinationShowCtrl);

DestinationShowCtrl.$inject = ['DestinationFactory', 'UserFactory', '$state', '$auth'];

function DestinationShowCtrl(DestinationFactory, UserFactory, $state, $auth) {
  const vm = this;
  vm.destination = DestinationFactory.get($state.params);
  vm.checkUserFavourites = checkUserFavourites;

  if($auth.getPayload()) {
    vm.currentUser = UserFactory.get({id: $auth.getPayload().userId});
  }

  vm.addFavourite = addFavourite;

  function addFavourite(place) {
    const currentUserId = $auth.getPayload().userId;
    place.town = vm.destination.town;

    UserFactory
      .addFavourite({ id: currentUserId }, place)
      .$promise
      .then(user => {
        vm.currentUser = user;
      })
      .catch(err => console.log(err));

  }

  function checkUserFavourites(place) {
    return !vm.currentUser.favorites.find(fav => fav.id === place.id);
  }
}
