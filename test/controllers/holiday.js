// /* globals api, expect, it, describe, afterEach, beforeEach */
// require('../spec_helper');
//
// const Holiday = require('../../models/holiday');
//
// describe('Holidays Controller Tests', () => {
//   afterEach(done => {
//     Holiday.collection.drop();
//     done();
//   });
//
//   // SHOW ROUTE
//   describe('GET /api/holidays', () => {
//
//     let testHoliday = null;
//
//     beforeEach(done => {
//       Holiday
//         .create({
//           holidayname: 'Test',
//           attendees: ['Guy', 'Ben'],
//           dateArrive: 'Feb 1',
//           dateDepart: 'Feb 8',
//           destination: 'Meribel'
//         })
//         .then(holidayData => {
//           testHoliday = holidayData;
//           done();
//         })
//         .catch(done);
//     });
//
//     it('should return a 200 response', done => {
//       api
//         .get(`/api/holidays/${testHoliday.id}`)
//         .set('Accept', 'application/json')
//         .expect(200, done);
//     });
//
//     it('should return holiday data in response body', done => {
//       api
//         .get(`/api/holidays/${testHoliday.id}`)
//         .set('Accept', 'application/json')
//         .end((err, res) => {
//           expect(res.body)
//             .to.be.an('object')
//             .and.have.all.keys([
//               '__v',
//               '_id',
//               'id',
//               'holidayname',
//               'createdBy',
//               'attendees',
//               'dateArrive',
//               'dateDepart',
//               'destination'
//             ]);
//
//           done();
//         });
//     });
//   });
//
//   // POST ROUTE
//   describe('POST /api/holidays', () => {
//     it('should return a 201 response', done => {
//       api
//         .post('/api/holidays')
//         .set('Accept', 'application/json')
//         .send({
//           holidayname: 'Test',
//           attendees: ['Guy', 'Ben'],
//           dateArrive: 'Feb 1',
//           dateDepart: 'Feb 8',
//           destination: 'Meribel'
//         })
//         .expect(201, done);
//     });
//
//     it('should return created holiday data in response body', done => {
//       api
//         .post('/api/holidays')
//         .set('Accept', 'application/json')
//         .send({
//           holidayname: 'Test',
//           attendees: ['Guy', 'Ben'],
//           dateArrive: 'Feb 1',
//           dateDepart: 'Feb 8',
//           destination: 'Meribel'
//         })
//         .end((err, res) => {
//           expect(res.body)
//             .to.be.an('object')
//             .and.have.all.keys([
//               '__v',
//               '_id',
//               'id',
//               'holidayname',
//               'createdBy',
//               'attendees',
//               'dateArrive',
//               'dateDepart',
//               'destination'
//             ]);
//
//           done();
//         });
//     });
//   });
//
//   // UPDATE ROUTE
//   describe('PUT /api/holidays/:id', () => {
//     let testHoliday = null;
//
//     beforeEach(done => {
//       Holiday.create({
//         holidayname: 'Test',
//         attendees: ['Guy', 'Ben'],
//         dateArrive: 'Feb 1',
//         dateDepart: 'Feb 8',
//         destination: 'Meribel'
//       })
//         .then(holidayData => {
//           testHoliday = holidayData;
//           done();
//         })
//         .catch(done);
//     });
//
//     it('should return a 200 response', done => {
//       var updatedHoliday = {
//         holidayname: 'Update Test',
//         attendees: ['Guy', 'Ben'],
//         dateArrive: 'April 14',
//         dateDepart: 'April 24',
//         destination: 'NZ'
//       };
//
//       api
//         .put(`/api/holidays/${testHoliday.id}`)
//         .set('Accept', 'application/json')
//         .send(updatedHoliday)
//         .expect(200, done);
//     });
//
//     it('should return updated data in body', done => {
//       var updatedHoliday = {
//         holidayname: 'Update Test',
//         attendees: ['Guy', 'Ben'],
//         dateArrive: 'April 14',
//         dateDepart: 'April 24',
//         destination: 'NZ'
//       };
//
//       api
//         .put(`/api/holidays/${testHoliday.id}`)
//         .set('Accept', 'application/json')
//         .send(updatedHoliday)
//         .end((err, res) => {
//           expect(res.body)
//             .to.be.an('object')
//             .and.to.have.property('destination', 'NZ');
//         });
//     });
//   });
//
//   // DELETE ROUTE
//   describe('DELETE /api/holidays/:id', () => {
//     let testHoliday = null;
//
//     beforeEach(done => {
//       Holiday.create({
//         holidayname: 'Test',
//         attendees: ['Guy', 'Ben'],
//         dateArrive: 'Feb 1',
//         dateDepart: 'Feb 8',
//         destination: 'Meribel'
//       })
//         .then(holidayData => {
//           testHoliday = holidayData;
//           done();
//         })
//         .catch(done);
//     });
//
//     it('should return a 204 response', done => {
//       api
//         .delete(`/api/holidays/${testHoliday.id}`)
//         .set('Accept', 'application/json')
//         .expect(204, done);
//     });
//   });
// });
