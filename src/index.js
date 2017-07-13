var coordinates = require('./static/coordinates.json');

function initMap() {
  var mnCenter = {lat: 46.459, lng: -93.685};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: mnCenter
  });
  var marker = new google.maps.Marker({
    position: mnCenter,
    map: map
  });
  var testCoords = new google.maps.Polygon({
    paths: coordinates,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 10,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  testCoords.setMap(map);
}

window.initMap = initMap;

var s = document.createElement('script');
s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDN1Cyr9vplNuUCSAZo3wVEBJ9hTsiYrE8&callback=initMap";
s.type = "text/javascript";
s.async = false;
document.getElementsByTagName('head')[0].appendChild(s);
