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
let map, marker;

function initMap() {
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            // current location of the user
            currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            } 
    // Set static latitude, longitude value
    var latlng = new google.maps.LatLng(currentPosition);
    // Set map options
    var myOptions = {
    zoom: 10,
    center: latlng
    }
    // Create map object with options
    map2 = new google.maps.Map(document.getElementById("map2"), myOptions);
    // Create and set the marker
    marker = new google.maps.Marker({
    map: map2,
    position: latlng,
    icon: '../../imgs/maps-icons/marker-test-large-vert.png'
    });
  
    marker = new google.maps.Marker({
    map: map,
    position: latlng,
    icon: '../../imgs/maps-icons/marker-test-large-vert.png'
    });
  })
    }
  }
