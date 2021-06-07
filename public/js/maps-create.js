// kira's code
// let map, infoWindow, newMarker;

// function initMap() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             currentPosition = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//             } 
//             map = new google.maps.Map(document.getElementById('map'),{
//                center: currentPosition,
//                zoom: 20 
//             });
//             infoWindow = new google.maps.InfoWindow();
//             infoWindow.setPosition(currentPosition)
//             infoWindow.open(map);
//             infoWindow.setContent("Your location!");
//             function addMarker(location, map) {
//                 newMarker = new google.maps.Marker({
//                     position: location,
//                     map: map,
//                     draggable: true,
//                 }); console.log(location.lat(), location.lng())
//             }
//             let clickEventListener = google.maps.event.addListener(map, "click", (event) => {
//             let clickEventPosition = event.latLng
//             addMarker(clickEventPosition, map);
//             if (clickEventPosition) {
//             google.maps.event.removeListener(clickEventListener);
//             }
//             })
//         })
//         } else {
            
//         }
//     } 

// kiki's code
let map, marker, currentPosition;

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // current location of the user
            currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }

            // Set static latitude, longitude value
            latlng = new google.maps.LatLng(currentPosition);
            // render initial lat/lng value from currentlocation
            function setLatLng(lat, lng) {
                document.getElementById("lat").setAttribute('value', lat);
                document.getElementById("lng").setAttribute('value', lng);
            }
            // render initial lat/lng value from currentlocation in DOM
            setLatLng(currentPosition.lat, currentPosition.lng);

            // Set map options
            var myOptions = {
                zoom: 18,
                center: latlng,
                streetViewControl: false,
                mapTypeControl: false,
            }
            // Create map object with options
            map = new google.maps.Map(document.getElementById("map"), myOptions);
            // Create and set the marker
            marker = new google.maps.Marker({
                map: map,
                draggable: true,
                position: latlng,
                icon: '../../imgs/maps-icons/marker-test-large-vert.png',
            });
            // save marker current position in individual variables

            // Register Custom "dragend" Event
            google.maps.event.addListener(marker, 'dragend', function () {
                // Get the Current position, where the pointer was dropped
                var point = marker.getPosition()
                var lat = marker.getPosition().lat();
                var lng = marker.getPosition().lng();
                // render value of dragged lat in DOM
                document.getElementById("lat").setAttribute('value', lat);
                // render value of dragged lng in DOM
                document.getElementById("lng").setAttribute('value', lng);
                // Center the map at given point
                map.panTo(point);
            });
        })
    }
}
