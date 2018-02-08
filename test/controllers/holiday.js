/* globals api, expect, it, describe, afterEach, beforeEach */
require('../spec_helper');

const Holiday = require('../../models/holiday');
const User = require('../../models/user');
const Destination = require('../../models/destination');

const testDestination = {
  town: 'Chamonix',
  country: 'France',
  altitude: 10744,
  green: 83,
  blue: 28,
  red: 39,
  black: 29,
  lifts: 47,
  greatFor: 'Families',
  overview: 'One of the oldest and most famous French resorts, Chamonix is as popular with summer climbers as it is with winter freeriders. The ski area encompasses four different mountains, meaning it is a little spread out but there is plenty to explore and definitely something for everyone.',
  image: 'https://media-server.clubmed.com/image/jpeg/1200/675/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Ficp%2F1-MEDIA%2F01.VILLAGES%2F1.3MONTAGNE%2FCHAMONIX-MONT-BLANC%2F18-17-16-15-14-13-12-11-10-9-8-7-6-5-4-3-2-1-PHOTOS%2FCHACX900005.jpg',
  lat: 45.9319777,
  lng: 6.7888777
};

const testUser = {
  username: 'Patrick',
  email: 'patrick@ga.co',
  password: 'patrick',
  passwordConfirmation: 'patrick',
  sport: 'both',
  abilityLevel: 'intermediate',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvvdYy2pa7Es35cKnm_MhPGLDH1rzlPu0C3Dybe8AeNVYKsdw'
};

const testHoliday = {
  holidayName: 'Test Holiday',
  dateArrive: '10 Feb',
  dateDepart: '20 Feb'
};

describe('Holidays Controller Test', () => {

  afterEach(done => {
    Holiday.collection.remove();
    User.collection.remove();
    Destination.collection.remove();
    done();
  });

  //INDEX ROUTE
  describe('GET /api/holidays', () => {
    it('should return a 200 response', done => {
      api
        .get('/api/holidays')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return an array of holidays', done => {
      api
        .get('/api/holidays')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  // POST ROUTE
  describe('POST /api/holidays', () => {
    let destinationCreated = null;
    let userCreated = null;
    let token = null;

    beforeEach(done => {
      Destination
        .create(testDestination)
        .then(destination => {
          destinationCreated = destination;

          return User.create(testUser);
        })
        .then(user => {
          userCreated = user;

          api
            .post('/api/login')
            .set('Accept', 'application/json')
            .send({
              email: 'patrick@ga.co',
              password: 'patrick'
            })
            .end((err, res) => {
              token = res.body.token;
              done();
            });
        });
    });

    it('should return a 201 response', done => {
      api
        .post('/api/holidays')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          holidayName: 'Test Holiday',
          createdBy: userCreated._id,
          attendees: [userCreated._id],
          dateArrive: '10 Feb',
          dateDepart: '20 Feb',
          destination: destinationCreated._id
        })
        .end((err, res) => {
          expect(res.status).to.eq(201);
          done();
        });
    });

    it('should return created holiday data in response body', done => {
      api
        .post('/api/holidays')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          holidayName: 'Test Holiday',
          createdBy: userCreated._id,
          attendees: [userCreated._id],
          dateArrive: '10 Feb',
          dateDepart: '20 Feb',
          destination: destinationCreated._id
        })
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.have.all.keys([
              '__v',
              '_id',
              'id',
              'holidayName',
              'createdBy',
              'attendees',
              'dateArrive',
              'dateDepart',
              'destination',
              'comments'
            ]);

          done();
        });
    });
  });

  // SHOW ROUTE
  describe('GET /api/holidays/:id', () => {
    let destinationCreated = null;
    let userCreated = null;
    let holidayCreated = null;
    let token = null;

    beforeEach(done => {
      Destination
        .create(testDestination)
        .then(destination => {
          destinationCreated = destination;

          return User.create(testUser);
        })
        .then(user => {
          userCreated = user;

          testHoliday.createdBy = user;
          testHoliday.attendees = [user];
          testHoliday.destination = destinationCreated;

          return Holiday.create(testHoliday);
        })
        .then(holiday => {
          holidayCreated = holiday;

          api
            .post('/api/login')
            .set('Accept', 'application/json')
            .send({
              email: 'patrick@ga.co',
              password: 'patrick'
            })
            .end((err, res) => {
              token = res.body.token;
              done();
            });
        });

    });

    it('should return a 200 response', done => {
      api
        .get(`/api/holidays/${holidayCreated.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });

    it('should return holiday data in response body', done => {
      api
        .get(`/api/holidays/${holidayCreated.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.have.all.keys([
              '__v',
              '_id',
              'id',
              'holidayName',
              'createdBy',
              'attendees',
              'dateArrive',
              'dateDepart',
              'destination',
              'comments'
            ]);

          done();
        });
    });
  });

  // UPDATE ROUTE
  describe('PUT /api/holidays/:id', () => {
    let destinationCreated = null;
    let userCreated = null;
    let holidayCreated = null;
    let token = null;

    beforeEach(done => {
      Destination
        .create(testDestination)
        .then(destination => {
          destinationCreated = destination;

          return User.create(testUser);
        })
        .then(user => {
          userCreated = user;

          testHoliday.createdBy = user;
          testHoliday.attendees = [user];
          testHoliday.destination = destinationCreated;

          return Holiday.create(testHoliday);
        })
        .then(holiday => {
          holidayCreated = holiday;

          api
            .post('/api/login')
            .set('Accept', 'application/json')
            .send({
              email: 'patrick@ga.co',
              password: 'patrick'
            })
            .end((err, res) => {
              token = res.body.token;
              done();
            });
        });

    });

    it('should return a 200 response', done => {
      var updatedHoliday = {
        holidayName: 'Updated',
        dateArrive: '99 Feb',
        dateDepart: '99 Feb'
      };

      api
        .put(`/api/holidays/${holidayCreated.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(updatedHoliday)
        .expect(200, done);
    });

    it('should return updated data in body', done => {
      var updatedHoliday = {
        holidayName: 'Updated',
        dateArrive: '99 Feb',
        dateDepart: '99 Feb'
      };

      api
        .put(`/api/holidays/${holidayCreated.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(updatedHoliday)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.to.have.property('holidayName', 'Updated');
          done();
        });
    });
  });

  // DELETE ROUTE
  describe('DELETE /api/holidays/:id', () => {
    let destinationCreated = null;
    let userCreated = null;
    let holidayCreated = null;
    let token = null;

    beforeEach(done => {
      Destination
        .create(testDestination)
        .then(destination => {
          destinationCreated = destination;

          return User.create(testUser);
        })
        .then(user => {
          userCreated = user;

          testHoliday.createdBy = user;
          testHoliday.attendees = [user];
          testHoliday.destination = destinationCreated;

          return Holiday.create(testHoliday);
        })
        .then(holiday => {
          holidayCreated = holiday;

          api
            .post('/api/login')
            .set('Accept', 'application/json')
            .send({
              email: 'patrick@ga.co',
              password: 'patrick'
            })
            .end((err, res) => {
              token = res.body.token;
              done();
            });
        });

    });

    it('should return a 204 response', done => {
      api
        .delete(`/api/holidays/${holidayCreated.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(204, done);
    });
  });
});
