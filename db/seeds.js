const mongoose  = require('mongoose');
const bluebird  = require('bluebird');
const User = require('../models/user');
const Holiday = require('../models/holiday');

mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment'); // added env here and in mongoose.connect  as per notes on slack - Charlotte

mongoose.Promise = bluebird;
mongoose.connect(db[env]);

User.collection.drop();
Holiday.collection.drop();

User
  .create([{
    username: 'Shaun White',
    email: 'shaun@ga.co',
    password: 'shaun',
    passwordConfirmation: 'shaun',
    sport: 2,
    abilityLevel: 3,
    image: 'https://cdn-s3.si.com/s3fs-public/sikids/pages/images/cms/imce/users/dantec/2014/01/shaun-white-2014-olympics-header.jpg'
  }, {
    username: 'Vreni Schneider',
    email: 'vreni@ga.co',
    password: 'vreni',
    passwordConfirmation: 'vreni',
    sport: 1,
    abilityLevel: 3,
    image: 'http://cdn.welove2ski.com/wp-content/uploads/vreni1-1.jpg'
  }, {
    username: 'Tracis Rice',
    email: 'tracis@ga.co',
    password: 'tracis',
    passwordConfirmation: 'tracis',
    sport: 2,
    abilityLevel: 3,
    image: 'https://assets.saatchiart.com/saatchi/84381/art/1617509/819762-7.jpg'
  },{
    username: 'Hannah Teter',
    email: 'hannah@ga.co',
    password: 'hannah',
    passwordConfirmation: 'hannah',
    sport: 2,
    abilityLevel: 3,
    image: 'https://www.sierrasun.com/wp-content/uploads/2017/12/hannahteter-tdt-120917-1-4.jpg'
  },{
    username: 'Charlotte',
    email: 'charlotte@ga.co',
    password: 'charlotte',
    passwordConfirmation: 'charlotte',
    sport: 1,
    abilityLevel: 2,
    image: 'http://www.oogazone.com/wp-content/uploads/top-little-girl-skiing-stock-vector-skier-cartoon-ski-image.jpg'
  },{
    username: 'Evelina',
    email: 'evelina@ga.co',
    password: 'evelina',
    passwordConfirmation: 'evelina',
    sport: 1,
    abilityLevel: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXf30fSEExqSEGeCRv9gMYTlR1CLP3pybH0chBM77ACjUqsbRm'
  },{
    username: 'Patrick',
    email: 'patrick@ga.co',
    password: 'patrick',
    passwordConfirmation: 'patrick',
    sport: 1,
    abilityLevel: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvvdYy2pa7Es35cKnm_MhPGLDH1rzlPu0C3Dybe8AeNVYKsdw'
  }])
  .then((users) => {
    console.log(`${users.length} users created!`);

    return Holiday.create([{
      holidayname: 'Patrick turns 25 ski trip',
      createdBy: users[6],
      attendees: ['Charlotte', 'Evelina', 'Hannah Teter', 'Shaun White', 'Vreni Schneider', 'Tracis Rice'],
      destination: 'Chamonix',

      comments: [{
        comment: 'This is going to be epic!',
        createdBy: users[1]
      },{
        comment: 'Cannot wait to start planning!',
        createdBy: users[0]
      }]
    },{
      holidayname: 'Shaun & girls go ',
      createdBy: users[0],
      attendees: ['Charlotte', 'Evelina', 'Hannah Teter', 'Shaun White', 'Vreni Schneider', 'Tracis Rice'],
      destination: 'Chamonix',

      comments: [{
        comment: ' Where do we want to eat the first night?!',
        createdBy: users[5]
      },{
        comment: 'I shoud get new skies, to rent or buy? 🧐',
        createdBy: users[4]
      }]
    }]);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close())

  .then((holidays) => {
    console.log(`${holidays.length} holidays created!`);
  })
  .finally(() => {
    return mongoose.connection.close();
  })
  .catch(err => console.log(err));
