let map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'));
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
            infoWindow = new google.maps.InfoWindow();
            infoWindow.setPosition(currentPosition);
            map.setCenter(currentPosition);
            map.setZoom(20);
            infoWindow.open(map);
            infoWindow.setContent("Your location!");
            function addMarker(location, map) {
                new google.maps.Marker({
                    position: location,
                    map: map,
                    draggable: true,
                }); console.log(location.lat(), location.lng())
            }
            google.maps.event.addListener(map, "click", (event) => {
                addMarker(event.latLng, map);
            })
        })
    } else {
        
    }
} 