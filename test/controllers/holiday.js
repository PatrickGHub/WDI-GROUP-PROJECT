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

describe('Holidays Controller Test', () => {

  afterEach(done => {
    Holiday.collection.remove();
    User.collection.remove();
    Destination.collection.remove();
    done();
  });

  //INDEX ROUTE
  describe('GET /api/holidays', () => {
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
  });

  // POST ROUTE
  describe('POST /api/holidays', () => {

  });
});
