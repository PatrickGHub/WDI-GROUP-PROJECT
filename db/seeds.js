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

let globalDestinations = null;

const destinationSeeds = [{
  town: 'Val Thorens',
  country: 'France',
  altitude: 10597,
  green: 13,
  blue: 40,
  red: 35,
  black: 11,
  lifts: 32,
  greatFor: 'Partying',
  overview: 'The highest party town in the Alps! Down in town there are more bars than you can visit in a night and the après starts early. The Frog and Roast Beef is the highest pub in Europe and draws a UK crowd. The Saloon Bar is the rowdiest and most fun bar on the strip if you can take the crowds. VT is also home to the largest nightclub in the Alps in Malaysia, it may be cavernous but it fills up late and rocks all night. The Folie Douce here is just above the town so everyone gets to do a short ski back down on wobbly legs.',
  image: 'https://findhomeabroad.com/wp-content/uploads/2017/11/val-thorens-property-1.jpg',
  lat: 45.2979478,
  lng: 6.5799096
}, {
  town: 'Tignes',
  country: 'France',
  altitude: 11318,
  green: 8,
  blue: 44,
  red: 27,
  black: 21,
  lifts: 39,
  greatFor: 'Families',
  overview: 'One of the highest ski resorts in the Alps, with guaranteed skiing virtually year round, Tignes can justifiably boast a fantastic snow record that is the envy of many resorts worldwide. Tignes is a world-famous ski resort which suits all abilities. Whilst the village charm may not be inspiring, the quality of skiing certainly is. Tignes is a fantastic option for any advanced or intermediate skiers who love to whizz around endlessly. The resort has very few queues and the snow is ever-reliable due to the high altitude.',
  image: 'https://img2.onthesnow.com/image/la/97/tignes_resort_france_97081.jpg',
  lat: 45.474395,
  lng: 6.8876349
}, {
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
}, {
  town: 'Val d\'Isere',
  country: 'France',
  altitude: 11338,
  green: 83,
  blue: 28,
  red: 39,
  black: 29,
  lifts: 42,
  greatFor: 'Partying',
  overview: 'Glamorous and expensive, and worth every penny! The skiing in the Espace Killy (the area linked with Tignes) offers more easily accessible variety than any other in Europe. It has a very long season because it catches the storms as they hit the end of the Tarentaise Valley at the border with Italy. But what really sets it apart is the number of high quality bars on-piste and off. The original Folie Douce has got its Mojo back after a couple of experimental years and now offers a great afternoon’s entertainment.',
  image: 'https://content.igluski.com/images/_i39726434.jpg?width=621',
  lat: 45.4232725,
  lng: 6.9447334
}, {
  town: 'St Anton',
  country: 'Austria',
  altitude: 9222,
  green: 0,
  blue: 52,
  red: 35,
  black: 13,
  lifts: 88,
  greatFor: 'Partying',
  overview: 'Ski hard, party harder! St Anton is still the best of Austria but it is perhaps too popular and the famous piste-side bars are uncomfortably jammed to overflowing with plastered Brits, Dutch and Germans. It has fantastic off-piste routes like the Valluga and brings a lot of the best skiers in the world to party. It also claims to have the oldest ski school in the world and this brings a constant flow of new skiers and boarders to the noisiest après ski bars in Austria.',
  image: 'https://www.stantonamarlberg.com/uploads/media/660x/04/414-Ort9_FotoSchmidtFriedrich.jpg?v=1-0',
  lat: 47.0736387,
  lng: 10.1538354
}, {
  town: 'Avoriaz',
  country: 'France',
  altitude: 8070,
  green: 12,
  blue: 29,
  red: 27,
  black: 12,
  lifts: 34,
  image: 'https://cdn.content.tuigroup.com/adamtui/2016_9/28_10/dffb4711-b955-4fc3-951b-a68f00a61191/TS_FRA_AVO_F0004WebOriginalCompressed.jpg',
  greatFor: 'Non-skiers',
  overview: 'Avoriaz is a superb resort for skiers and snowboarders of all abilities. A very distinctive resort with it\'s modern architecture and dramatic cliff top scenery. Its high altitude and north-facing slopes complement each other, resulting in consistently excellent snow records.',
  lat: 46.189997,
  lng: 6.7732041
}, {
  town: 'Zermatt',
  country: 'Switzerland',
  altitude: 12791,
  green: 5,
  blue: 23,
  red: 59,
  black: 14,
  lifts: 52,
  greatFor: 'Families',
  overview: 'Nestled beneath the magnificent Matterhorn, Zermatt (shown above) plays host to some of the most breathtaking views.  Its traffic free village centre is filled with charming chocolate box chalets and hotels with only the noise of the horse drawn sleighs to distract you. The skiing appeals to all abilities with many of the lower runs descending down very scenic tree lined pistes.',
  image: 'https://www.zermatt.ch/extension/portal-zermatt/var/storage/images/media/bibliothek/dorf-zermatt/zermatt-dorf-winter/1787315-3-ger-DE/Zermatt-Dorf-Winter_grid_700x365.jpg',
  lat: 45.9904994,
  lng: 7.6018623
}, {
  town: 'Verbier',
  country: 'Switzerland',
  altitude: 10925,
  green: 0,
  blue: 31,
  red: 48,
  black: 21,
  lifts: 82,
  greatFor: 'Partying',
  overview: 'Posh but fun! Let’s get the hard bit out of the way first, it’s expensive. The Swiss Franc is on a roll right now and until it gets back to reasonable levels against the £ your après sessions are going bite like a Nile crocodile. Do as Seasonaires do and follow the happy hours around the village.',
  image: 'http://image.interactiveresorts.co.uk/resorts/photos/00018/inter/localite_verbier_combins_09.jpg',
  lat: 46.0994409,
  lng: 7.2163483
}, {
  town: 'Livigno',
  country: 'Italy',
  altitude: 9514,
  green: 0,
  blue: 35,
  red: 48,
  black: 17,
  lifts: 31,
  greatFor: 'Non-skiers',
  overview: 'Tax free party haven! Livigno is a shopper\'s paradise as well as an après ski mecca. It has around 150 bars, which dwarfs any other ski resort in the world. Italian resorts tend to be a bit more sophisticated and calmer during the après ski hours, but there are some pretty good traditionally loud and riotous gems to be found in the resorts of Cervinia and Selva.',
  image: 'http://www.livignostmichael.com/img/TOP/livigno4.jpg',
  lat: 46.5322071,
  lng: 10.0989787
}, {
  town: 'Åre',
  country: 'Sweden',
  altitude: 4179,
  green: 2,
  blue: 43,
  red: 38,
  black: 17,
  lifts: 39,
  greatFor: 'Non-skiers',
  overview: 'Åre is Sweden\'s number one ski resort, situated in the North. Are consists of four separate ski areas and villages, which are partly interlinked and covered by one lift pass. The scenery is breathtaking, low sweeping mountains covered with pine forests, and the skiing is suited to all levels, plus there are a good range of activities for the non-skier on ski holidays in Are.',
  image: 'https://exp.cdn-hotels.com/hotels/2000000/1090000/1080600/1080526/1080526_82_z.jpg',
  lat: 63.3971461,
  lng: 13.0617457
}];

const userSeeds = [{
  username: 'Shaun White',
  email: 'shaun@ga.co',
  password: 'shaun',
  passwordConfirmation: 'shaun',
  sport: 'snowboard',
  abilityLevel: 'beginner',
  image: 'https://cdn-s3.si.com/s3fs-public/sikids/pages/images/cms/imce/users/dantec/2014/01/shaun-white-2014-olympics-header.jpg',
  favorites: []
}, {
  username: 'Vreni Schneider',
  email: 'vreni@ga.co',
  password: 'vreni',
  passwordConfirmation: 'vreni',
  sport: 'ski',
  abilityLevel: 'advanced',
  image: 'http://cdn.welove2ski.com/wp-content/uploads/vreni1-1.jpg',
  favorites: []
}, {
  username: 'Tracis Rice',
  email: 'tracis@ga.co',
  password: 'tracis',
  passwordConfirmation: 'tracis',
  sport: 'both',
  abilityLevel: 'advanced',
  image: 'https://assets.saatchiart.com/saatchi/84381/art/1617509/819762-7.jpg',
  favorites: []
},{
  username: 'Hannah Teter',
  email: 'hannah@ga.co',
  password: 'hannah',
  passwordConfirmation: 'hannah',
  sport: 'ski',
  abilityLevel: 'beginner',
  image: 'https://www.sierrasun.com/wp-content/uploads/2017/12/hannahteter-tdt-120917-1-4.jpg',
  favorites: []
},{
  username: 'Charlotte',
  email: 'charlotte@ga.co',
  password: 'charlotte',
  passwordConfirmation: 'charlotte',
  sport: 'both',
  abilityLevel: 'advanced',
  image: 'http://www.oogazone.com/wp-content/uploads/top-little-girl-skiing-stock-vector-skier-cartoon-ski-image.jpg',
  favorites: []
},{
  username: 'Evelina',
  email: 'evelina@ga.co',
  password: 'evelina',
  passwordConfirmation: 'evelina',
  sport: 'ski',
  abilityLevel: 'intermediate',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXf30fSEExqSEGeCRv9gMYTlR1CLP3pybH0chBM77ACjUqsbRm',
  favorites: []
},{
  username: 'Patrick',
  email: 'patrick@ga.co',
  password: 'patrick',
  passwordConfirmation: 'patrick',
  sport: 'both',
  abilityLevel: 'intermediate',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvvdYy2pa7Es35cKnm_MhPGLDH1rzlPu0C3Dybe8AeNVYKsdw',
  favorites: []
}];

// const holidaySeeds = ;

Destination
  .create(destinationSeeds)
  .then((destinations) => {
    globalDestinations = destinations;
    console.log(`${destinations.length} destinations created! 🗻`);
    return User.create(userSeeds);
  })
  .then(users => {
    console.log(`${users.length} users created! ⛷`);
    return Holiday.create([{
      holidayName: 'Patrick turns 25 ski trip',
      createdBy: users[6],
      attendees: [users[4], users[5], users[3], users[0], users[1], users[2]],
      destination: globalDestinations[2],

      comments: [{
        text: 'This is going to be epic!',
        createdBy: users[1]
      },{
        text: 'Cannot wait to start planning!',
        createdBy: users[0]
      }]
    },{
      holidayName: 'Shaun & girls go ',
      createdBy: users[0],
      attendees: [users[4], users[5], users[3], users[0], users[1], users[2]],
      destination: globalDestinations[2],

      comments: [{
        text: ' Where do we want to eat the first night?!',
        createdBy: users[5]
      },{
        text: 'I shoud get new skies, to rent or buy? 🧐',
        createdBy: users[4]
      }]
    }]);
  })
  .then(holidays => {
    console.log(`${holidays.length} holidays created! ❄️`);
  })
  .finally(() => mongoose.connection.close())
  .catch(err => console.log(err));
