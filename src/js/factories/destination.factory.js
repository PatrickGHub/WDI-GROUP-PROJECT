angular
  .module('appres')
  .factory('DestinationFactory', DestinationFactory);

DestinationFactory.$inject = ['$resource'];
function DestinationFactory($resource){
  return $resource('/api/destinations/:id', { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
