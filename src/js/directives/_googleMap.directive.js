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
        zoom: 12,
        mapTypeId: 'roadmap'
      });

      var infowindow = new $window.google.maps.InfoWindow({
        content: scope.contentString
      });

      var marker = new $window.google.maps.Marker({
        // animation: google.maps.Animation.DROP,
        map: map
      });


      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      function getRestaurants() {
        var request = {
          location: scope.center,
          radius: '5000',
          type: ['restaurant']
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
            scaledSize: new $window.google.maps.Size(20, 20)
          }
        });

        infowindow = new $window.google.maps.InfoWindow({
          content: `<p>${result.name}</p>`
        });

        marker.addListener('click', function() {
          if (infowindow) infowindow.close();
          infowindow.open(map, marker);
        });

        // here you would add infowindow code
      }

      function callback(results, status) {
        if (status === $window.google.maps.places.PlacesServiceStatus.OK) {
          scope.foundPlaces = results;
          $rootScope.$apply(); // force angular to update the view
          console.log(scope.foundPlaces);
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            console.log(place);
            createMarker(results[i]);
          }
        }
      }
    }
  };
}
