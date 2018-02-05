const mongoose  = require('mongoose');
const bluebird  = require('bluebird');
const Destination = require('../models/destination');
const User = require('../models/user');
const Holiday = require('../models/holiday');

mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment'); // added env here and in mongoose.connect  as per notes on slack - Charlotte

mongoose.Promise = bluebird;
mongoose.connect(db[env]);

Destination.collection.drop();
User.collection.drop();
Holiday.collection.drop();

Destination
  .create([{
    town: 'Val Thorens',
    country: 'France',
    altitude: 10597,
    green: 13,
    blue: 40,
    red: 35,
    black: 11,
    lifts: 32,
    image: 'https://findhomeabroad.com/wp-content/uploads/2017/11/val-thorens-property-1.jpg'
  }, {
    town: 'Tignes',
    country: 'France',
    altitude: 11318,
    green: 8,
    blue: 44,
    red: 27,
    black: 21,
    lifts: 39,
    image: 'https://img2.onthesnow.com/image/la/97/tignes_resort_france_97081.jpg'
  }, {
    town: 'Chamonix',
    country: 'France',
    altitude: 10744,
    green: 83,
    blue: 28,
    red: 39,
    black: 29,
    lifts: 47,
    image: 'https://media-server.clubmed.com/image/jpeg/1200/675/crop/center/60/https%3A%2F%2Fns.clubmed.com%2Ficp%2F1-MEDIA%2F01.VILLAGES%2F1.3MONTAGNE%2FCHAMONIX-MONT-BLANC%2F18-17-16-15-14-13-12-11-10-9-8-7-6-5-4-3-2-1-PHOTOS%2FCHACX900005.jpg'
  }, {
    town: 'Val d\'Isere',
    country: 'France',
    altitude: 11338,
    green: 83,
    blue: 28,
    red: 39,
    black: 29,
    lifts: 42 ,
    image: 'https://content.igluski.com/images/_i39726434.jpg?width=621'
  }, {
    town: 'St Anton',
    country: 'Austria',
    altitude: 9222,
    green: 0,
    blue: 52,
    red: 35,
    black: 13,
    lifts: 88,
    image: 'https://www.stantonamarlberg.com/uploads/media/660x/04/414-Ort9_FotoSchmidtFriedrich.jpg?v=1-0'
  }, {
    town: 'Avoriaz',
    country: 'France',
    altitude: 8070,
    green: 12,
    blue: 29,
    red: 27,
    black: 12,
    lifts: 34,
    image: 'https://cdn.content.tuigroup.com/adamtui/2016_9/28_10/dffb4711-b955-4fc3-951b-a68f00a61191/TS_FRA_AVO_F0004WebOriginalCompressed.jpg'
  }, {
    town: 'Zermatt',
    country: 'Switzerland',
    altitude: 12791,
    green: 5,
    blue: 23,
    red: 59,
    black: 14,
    lifts: 52,
    image: 'https://www.zermatt.ch/extension/portal-zermatt/var/storage/images/media/bibliothek/dorf-zermatt/zermatt-dorf-winter/1787315-3-ger-DE/Zermatt-Dorf-Winter_grid_700x365.jpg'
  }, {
    town: 'Verbier',
    country: 'Switzerland',
    altitude: 10925,
    green: 0,
    blue: 31,
    red: 48,
    black: 21,
    lifts: 82,
    image: 'http://image.interactiveresorts.co.uk/resorts/photos/00018/inter/localite_verbier_combins_09.jpg'
  }, {
    town: 'Livigno',
    country: 'Italy',
    altitude: 9514,
    green: 0,
    blue: 35,
    red: 48,
    black: 17,
    lifts: 31,
    image: 'http://www.livignostmichael.com/img/TOP/livigno4.jpg'
  }, {
    town: 'Åre',
    country: 'Sweden',
    altitude: 4179,
    green: 2,
    blue: 43,
    red: 38,
    black: 17,
    lifts: 39,
    image: 'https://exp.cdn-hotels.com/hotels/2000000/1090000/1080600/1080526/1080526_82_z.jpg'
  }])
  .then((destinations) => {
    console.log(`${destinations.length} destinations created!`);
  });

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
