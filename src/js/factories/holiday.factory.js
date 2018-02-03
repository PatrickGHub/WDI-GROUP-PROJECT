angular
  .module('appres')
  .factory('HolidayFactory', HolidayFactory);

HolidayFactory.$inject = ['API', '$resource'];
function HolidayFactory(API, $resource) {
  return $resource(`${API}/holidays/:id`,
    { id: '@_id' },
    { 'update': { method: 'PUT' }}
  );
}
