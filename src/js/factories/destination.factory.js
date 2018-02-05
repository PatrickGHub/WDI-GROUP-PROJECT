angular
  .module('appres')
  .factory('Destination', Destination);

Destination.$inject = ['$resource', 'API'];
function Destination($resource, API){
  return $resource(`${API}/destinations/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
