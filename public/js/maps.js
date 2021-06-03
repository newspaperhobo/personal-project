let map, infoWindow, newMarker;

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            } 
            map = new google.maps.Map(document.getElementById('map'),{
               center: currentPosition,
               zoom: 20 
            });
            infoWindow = new google.maps.InfoWindow();
            infoWindow.setPosition(currentPosition)
            infoWindow.open(map);
            infoWindow.setContent("Your location!");
            function addMarker(location, map) {
                newMarker = new google.maps.Marker({
                    position: location,
                    map: map,
                    draggable: true,
                }); console.log(location.lat(), location.lng())
            }
            let clickEventListener = google.maps.event.addListener(map, "click", (event) => {
            let clickEventPosition = event.latLng
            addMarker(clickEventPosition, map);
            console.log(clickEventPosition)
            if (clickEventPosition) {
            google.maps.event.removeListener(clickEventListener);
            }
            })
        })
        } else {
            
        }
    } 
