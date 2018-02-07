angular
  .module('appres')
  .factory('HolidayComment', HolidayComment)
  .factory('HolidayFactory', HolidayFactory);

HolidayFactory.$inject = ['API', '$resource'];
function HolidayFactory(API, $resource) {
  return $resource(`${API}/holidays/:id`,
    { id: '@_id' },
    { 'update': { method: 'PUT' }}
  );
}

HolidayComment.$inject = ['$resource'];
function HolidayComment($resource) {
  return new $resource('/api/holidays/:holidayId/comments/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
