//Note: You do NOT need to create an external JS file for this project despite any instructions you may see in Canvas. This file, app.js, is the only external JS file you need.



// Create map
// let map = L.map('map').setView([51.505, -0.09], 13);    /*from the quick start guide. */

var myMap = L.map('map').setView([51.505, -0.09], 13);


// Add openstreetmap tiles
// L.tileLayer('https://.tile.openstreetmap.org///.png', {    /*from the quick start guide. */
//     maxZoom: 15,
//     attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);



//Note: Replace 'https://.tile.openstreetmap.org///.png' with 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' in this copy/paste part in the Canvas activity instructions


// Create and add a geolocation marker

// let marker = L.marker([51.1, -0.09]).addTo(map);

let marker = L.marker([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()  /*this looks like what is causing error */


// Draw the 2nd arrondissement

// let polygon = L.polygon([                                         
//     [48.863368120198004, 2.3509079846928516],
//     [48.86933262048345, 2.3542531602919805],
//     [48.87199261164275, 2.3400569901592183],
//     [48.86993336274516, 2.3280142476578813],
//     [48.86834104280146, 2.330308418109664]
// ]).addTo(map);


// Metro station markers


// Create red pin marker
