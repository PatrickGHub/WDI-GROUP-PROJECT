angular
  .module('appres')
  .factory('UserFactory', UserFactory);

UserFactory.$inject = ['$resource'];
function UserFactory($resource) {
  return $resource('/api/users/:id', { id: '@_id' },
    {
      'update': { method: 'PUT' },
      'addFavourite': { method: 'POST', url: '/api/users/:id/favourite' }
    }
  );
}
