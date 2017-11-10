/**
Weather API code credit: https://codepen.io/freeCodeCamp/pen/bELRjV?editors=1010
*/
var api = "https://fcc-weather-api.glitch.me/api/current?"; //api url
var celsiusUnit = "C";
var farenheightUnit = "F";

$(document).ready(function() {
  alert("Obtaining your location...");
  getLocation();
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
      switchVisible();
      $("#city-state").html(result.name + ", " + result.sys.country);
      $("#temp-unit").html((Math.round(result.main.temp * 10) / 10) + + " " + String.fromCharCode(176) + " " + celsiusUnit);
    },
    error: function(result) {
      alert("ERROR: Weather data not found!");
    }
  });
}

//https://stackoverflow.com/questions/25981198/how-to-hide-one-div-and-show-another-div-using-button-onclick
function switchVisible() {
  if (document.getElementById('loading-info')) {
    if (document.getElementById('loading-info').style.display == 'none') {
      document.getElementById('loading-info').style.display = 'block';
      document.getElementById('weather-info').style.display = 'none';
    }
    else {
      document.getElementById('loading-info').style.display = 'none';
      document.getElementById('weather-info').style.display = 'block';
    }
  }
}