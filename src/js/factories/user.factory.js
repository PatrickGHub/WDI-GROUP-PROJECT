angular
  .module('appres')
  .factory('UserFactory', UserFactory);

UserFactory.$inject = ['API', '$resource'];
function UserFactory(API, $resource) {
  return $resource(`${API}/users/:id`, { id: '@_id' },
    {
      'update': { method: 'PUT' },
      'addFavourite': { method: 'POST', url: '/api/users/:id/favourite' }
    }
  );
}
