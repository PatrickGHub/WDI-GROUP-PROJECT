angular
  .module('appres')
  .factory('DestinationFactory', DestinationFactory);

DestinationFactory.$inject = ['$resource', 'API'];
function DestinationFactory($resource, API){
  return $resource(`${API}/destinations/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
