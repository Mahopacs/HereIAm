//Made these global so accessible anywhere
var lat;
var lang;
var address;

function getMapLocation() {
    try {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
    } catch (e) {
        alert("Error in getMapLocation.  Error=" + e.message);
    }
}

function onSuccess(position) {

    try {
        lat = position.coords.latitude;
        lang = position.coords.longitude;

        var myLatlng = new google.maps.LatLng(lat, lang);
        var mapOptions = {
            zoom: 4,
            center: myLatlng
        }

        //Creates a new map inside the <div> element
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        //Set address based on lattitude and longitude
        getAddress(myLatlng);

        //A marker identifies a location on a map.
        var marker = new google.maps.Marker(
        {
            position: myLatlng,
            map: map
        });

    } catch (e) {
        alert("error in onSuccess = " + e.message);
    }
}

function onError(error) {

    alert("In onMapError error=" + error.message);
}

////Continuously watch divice's current GPS position    
//var watchID = navigator.geolocation.watchPosition(onSuccess, onError,
//{
//    timeout: 3000
//});  

function getMyLocation() {
    alert("Address = " + address + " (Latitude = " + lat + " Longitude=" + lang + ")");
}

function getAddress(latLng) {
    try {
        var geocoder = new google.maps.Geocoder;

        geocoder.geocode({ 'latLng': latLng },
      function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                  address = results[0].formatted_address;
              }
              else {
                  address = "Address not found"
              }
          }
          else {
              address = status;
          }
      });
    } catch (e) {
        alert("error in getAddress = " + e.message);
    }
}



