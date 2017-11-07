/**
Weather API code credit: https://codepen.io/freeCodeCamp/pen/bELRjV?editors=1010
*/
var api = "https://fcc-weather-api.glitch.me/api/current?"; //api url

$(document).ready(function() {
  alert("Obtaining your location...");
  var location = getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather({latitude: lat, longitude: lon});
    });
  } else {
    alert("Geolocation is not supported by this browser.");
    return {latitude: "0", longitude: "0"};
  }
}

function getWeather(location) {
  var urlString = api + location.latitude + "&" + location.longitude;
  
  $.ajax({
    url: urlString,
    type: 'GET',
    success: function(result) {
      alert("City: " + result.name + "\n" + result.sys.country);
    },
    error: function(result) {
      alert("ERROR: Weather not found!");
    }
  });
}