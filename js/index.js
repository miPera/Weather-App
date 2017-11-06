$(document).ready(function() {
  alert("Obtaining your location...");
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      alert("Lat: " + lat + ", Lon: " + lon);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}