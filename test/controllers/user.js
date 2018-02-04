/* globals api, expect, describe, it*/
require('../spec_helper');

const User = require('../../models/user'); // changed '../../../models/user' to '../../models/user' - Charlotte

describe('Users Controller Tests', () => {

  afterEach(done => {
    User.collection.remove();
    done();
  });

  describe('GET /api/users/:id', () => {

    let user  = null;
    let token = null;

    beforeEach(done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          name: 'test',
          email: 'test@test.com',
          password: 'password',
          passwordConfirmation: 'password',
          sport: [0],
          abilityLevel: [1],
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXf30fSEExqSEGeCRv9gMYTlR1CLP3pybH0chBM77ACjUqsbRm'
        })
        .end((err, res) => {
          user  = res.body.user;
          token = res.body.token;
          done();
        });
    });

    it('should return a 200 response', done => {
      api
        .get(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .expect(200, done);
    });

    it('should return user data in response body', done => {
      api
        .get(`/api/users/${user.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.body)
            .to.be.an('object')
            .and.have.all.keys([
              '__v',
              '_id',
              'id',
              'name',
              'email',
              'password',
              'passwordConfirmation',
              'sport',
              'abilityLevel',
              'image'
            ]);

          done();
        });
    });
  });

});
