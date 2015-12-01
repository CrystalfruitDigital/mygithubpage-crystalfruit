var map;

(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {


	});

})(jQuery);

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        alert("Oh no!");
    }
};

function showPosition(position) {

    var myLat = position.coords.latitude+0.005;
    var myLong = position.coords.longitude;
    var myLatlng = new google.maps.LatLng(myLat, myLong);

    x.innerHTML = "Latitude: " + myLat + 
    "<br>Longitude: " + myLong; 
    map.setCenter(myLatlng);
    map.setZoom(12);

    var meinfo = new google.maps.InfoWindow({
      content: "Located here"
    });

    var me = new google.maps.Marker({
      position: myLatlng,
      map: map
    });

    meinfo.open(map, me);

};

var hidden = 0;

// $(".hide-sidebar").click(function(){
// 	if(!hidden){
// 		$(".sidebar").hide();
// 		$(".hide-sidebar").text(">");
// 		$(".map-div").width("100%");
// 		hidden = 1;
// 	} else {
// 		$(".sidebar").show();
// 		$(".hide-sidebar").text("<");
// 		$(".map-div").width("70%");
// 		hidden = 0;
// 	}

// 	google.maps.event.trigger(map, "resize");
// });

map = new google.maps.Map(document.getElementById('map'), {
  zoom: 7,
  center: {lat: 40.34, lng: -75.11}
});

// #1 Bucks County Vitris HQ
var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Bucks County Vitris HQ</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

var infowindow = new google.maps.InfoWindow({
  content: contentString
});

var marker = new google.maps.Marker({
  position: {lat: 40.34, lng: -75.11},
  map: map
});

marker.addListener('click', function() {
  infowindow.open(map, marker);
});

// #2 - Alex S.
var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Alex Scalamandre</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

var infowindow2 = new google.maps.InfoWindow({
  content: contentString2
});

var marker2 = new google.maps.Marker({
  position: {lat: 39.9721356, lng: -75.1669702},
  map: map
});

marker2.addListener('click', function() {
  infowindow2.open(map, marker2);
});


// #3 - Chris Perrotta
var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Chris Perrotta</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

var infowindow3 = new google.maps.InfoWindow({
  content: contentString3
});

var marker3 = new google.maps.Marker({
  position: {lat: 39.9821356, lng: -75.1569702},
  map: map
});

marker3.addListener('click', function() {
  infowindow3.open(map, marker3);
});
