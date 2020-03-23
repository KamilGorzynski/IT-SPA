
export function getMap() {
    let mymap = L.map('mapid').setView([52.22948173332478, 21.103363037109375], 17);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 16,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibmlnZXJ1IiwiYSI6ImNrODRvMmY5dTAxcDUzb29lODRvZjJjd3oifQ.95GcTB3qTwaxwnWfBj8l6Q'
    }).addTo(mymap);

    let marker = L.marker([52.22948173332478, 21.103363037109375]).addTo(mymap);
    marker.bindPopup("<b>IT-SPA</b><br>JS avenue 55/8").openPopup();
}


