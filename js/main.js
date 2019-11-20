$(document).ready(function () {

	$('.card').delay(1800).queue(function (next) {
		$(this).removeClass('hover');
		$('a.hover').removeClass('hover');
		next();
	});
});


//GOOGLE MAP CODE USED FOR LOCATIONS OF THE "COMPANY"
//CODE USED: https://wrightshq.com/playground/placing-multiple-markers-on-a-google-map-using-api-3/
// jQuery(function ($) {
// 	// Asynchronously Load the map API 
// 	var script = document.createElement('script');
// 	script.src = "//maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
// 	document.body.appendChild(script);
// });

// function initialize() {
// 	var map;
// 	var bounds = new google.maps.LatLngBounds();
// 	var mapOptions = {
// 		mapTypeId: 'roadmap'
// 	};

// 	// Display a map on the page
// 	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
// 	map.setTilt(45);

// 	// Multiple Markers
// 	var markers = [
// 		['Launch Facility, Kaunas', 54.919621, 23.917760],
// 		['Uspace Headquarters, Kaunas', 54.925136, 23.923811]
// 	];

// 	// Info Window Content
// 	var infoWindowContent = [
// 		['<div class="info_content">' +
// 			'<h3>Launch Facility</h3>' +
// 			'<p>Our launching facilities are the biggest on planet earth. At size of 200 000m2 we can launch 10 rockets at the same time. It is the largest facility in Lithuania as well.</p>' + '</div>'
// 		],
// 		['<div class="info_content">' +
// 			'<h3>Uspace Headquarters</h3>' +
// 			'<p>The Uspace Headquarters is the meeting place of the brains where all of the decisions happens. You will find all of the engineers, astronauts etc in this building.</p>' +
// 			'</div>'
// 		]
// 	];

// 	// Display multiple markers on a map
// 	var infoWindow = new google.maps.InfoWindow(),
// 		marker, i;

// 	// Loop through our array of markers & place each one on the map  
// 	for (i = 0; i < markers.length; i++) {
// 		var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
// 		bounds.extend(position);
// 		marker = new google.maps.Marker({
// 			position: position,
// 			map: map,
// 			title: markers[i][0]
// 		});

// 		// Allow each marker to have an info window    
// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				infoWindow.setContent(infoWindowContent[i][0]);
// 				infoWindow.open(map, marker);
// 			};
// 		})(marker, i));

// 		// Automatically center the map fitting all markers on the screen
// 		map.fitBounds(bounds);
// 	}

// 	// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
// 	var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
// 		this.setZoom(13.5);
// 		google.maps.event.removeListener(boundsListener);
// 	});

// }