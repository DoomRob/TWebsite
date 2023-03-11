// Code for Geolocation
var x = document.getElementById("para");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

  lat = position.coords.latitude;
  lon = position.coords.longitude;
  latlon = new google.maps.LatLng(lat, lon)

    var myOptions = {
        zoom:14,
        center:latlon,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{
        style:google.maps.NavigationControlStyle.SMALL}
    }
         
    //New Map
    var map = new google.maps.Map(document.getElementById("googleMap"), myOptions);
    var marker = new google.maps.Marker({
        position:latlon,
        map:map,//add marker to map 
        title:"You are here!"
    });
}


