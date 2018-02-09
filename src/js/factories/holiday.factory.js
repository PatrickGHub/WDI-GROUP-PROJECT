angular
  .module('appres')
  .factory('HolidayComment', HolidayComment)
  .factory('HolidayFactory', HolidayFactory);

HolidayFactory.$inject = ['$resource'];
function HolidayFactory($resource) {
  return $resource('/api/holidays/:id',
    { id: '@_id' },
    { 'update': { method: 'PUT' }}
  );
}

HolidayComment.$inject = ['$resource'];
function HolidayComment($resource) {
  return new $resource('/api/holidays/:holidayId/comments/:id', { id: '@id', holidayId: '@holidayId' }, {
    update: { method: 'PUT' }
  });
}
