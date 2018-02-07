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

HolidayComment.$inject = ['API', '$resource'];
function HolidayComment(API, $resource) {
  return new $resource(`${API}/holidays/:holidayId/comments/:id`, { id: '@id', holidayId: '@holidayId' }, {
    update: { method: 'PUT' }
  });
}
