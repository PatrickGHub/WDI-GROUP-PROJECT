angular
.module('appres')
.directive('googleMap', googleMap);

var map;
var service;
var infowindow;

googleMap.$inject = ['$window', '$rootScope'];
function googleMap($window, $rootScope) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map">Google Map goes here</div>',
    scope: {
      center: '=',
      contentString: '@',
      foundPlaces: '='
    },

    link(scope, element) {
      scope.$watch('center', () => {
        if (!scope.center.lat || !scope.center.lng) return false;
        console.log(scope.center);

        map.setCenter(scope.center);
        marker.setPosition(scope.center);
        getRestaurants();
      });

      var map = new $window.google.maps.Map(element[0], {
        zoom: 15,
        mapTypeId: 'roadmap'
      });

      var marker = new $window.google.maps.Marker({
        map: map
      });

      let infoWindow = null;

      function getRestaurants() {
        var request = {
          location: scope.center,
          radius: '50000',
          type: ['restaurant']

          // add bars too
        };

        service = new $window.google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
      }

      function createMarker(result) {
        const latLng = result.geometry.location.toJSON();

        const marker = new $window.google.maps.Marker({
          // animation: google.maps.Animation.DROP,
          map: map,
          position: latLng,
          icon: {
            url: result.icon, // url
            scaledSize: new $window.google.maps.Size(15, 15)
          }
        });

        marker.addListener('click', function() {
          if(infoWindow) infoWindow.close();

          infoWindow = new $window.google.maps.InfoWindow({
            content: `<h1>${result.name}</h1>`
          });

          infoWindow.open(map, marker);
        });



        // here you would add infowindow code
      }

      function callback(results, status) {
        if (status === $window.google.maps.places.PlacesServiceStatus.OK) {
          scope.foundPlaces = results;
          $rootScope.$apply(); // force angular to update the view
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
          }
        }
      }
    }
  };
}
