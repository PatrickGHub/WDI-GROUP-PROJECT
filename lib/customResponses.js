function customResponses(req, res, next) {
  res.notFound = function notFound() {
    const err = new Error('Not Found');
    err.status = 404;

    throw err;
  };

  res.unauthorized = function unauthorized() {
    const error = new Error('Unauthorized');
    error.status = 401;

    throw error;
  };

  next();
}
//
// function unauthorizedResponses(req, res, next) {
//   res.unauthorized = function unauthorized() {
//     const error = new Error('Unauthorized');
//     error.status = 401;
//
//     throw error;
//   };
//
//   next();
// }

module.exports = customResponses;
