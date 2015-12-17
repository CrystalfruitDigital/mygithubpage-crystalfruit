var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.986855, lng: -75.196442},
    zoom: 9,
    disableDefaultUI: true
  });

  setMarkers(map);
}

var markers = [
    {
        "title": 'John',
        "lat": '39.952584',
        "lng": '-75.165222',
        "description": 
                  '<div id = "container">'+
                    '<div id = "top" class = "animated fadeInDown"><img class = "animated delay bounceInDown" src="https://pbs.twimg.com/profile_images/417201275466690560/TzVjIXv2.jpeg" alt="" />'+
                    '<p id = "name"> Doge</p></div>'+
                      '<div id = "info-tab" >'+
                            '<div id = "info-tab-left" class = "animated fadeInLeft"><p class = "number ">100</p><p class = "text">Number of Repairs</p></div>'+
                            '<div id = "info-tab-right" class = "animated fadeInRight"><p class = "number">4.5/5</p><p class = "text">Rating </p></div>'+
                      '</div>'+
                      '<div id = "info-para" class = "animated delay fadeIn"><p id = "test">What light. So breaks. Such east. Very sun. Wow, Juliet. What Romeo. Such why. Very rose. Still rose. Very balcony. Such climb. Much love. So Propose. Wow, marriage. Very Tybalt. Much stab. What do? Such exile. Very Mantua. Much sad. So, priest? Much sleeping. Wow, tomb. Such poison. What dagger. Very dead. Wow, end.</p></div>'+
                      '<button type="button" class="btn btn-success btn-block disabled animated fadeInUp">Repair Now</button>'+
                   '</div>'
                    
    },
    {
        "title": 'Juhu Beach',
        "lat": '39.981389',
        "lng": '-75.149444',
        "description": '<div id="iw-container">' +
                    '<div class="iw-title">Porcelain Factory of Vista Alegre</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Profile</div>' +
                      '<img src="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg" height="115" width="83">' +
                      '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
    },
    {
        "title": 'Girgaum Beach',
        "lat": '40.237805',
        "lng": '-74.959841',
        "description": '<div id="iw-container">' +
                    '<div class="iw-title">Porcelain Factory of Vista Alegre</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Profile</div>' +
                      '<img src="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg" height="115" width="83">' +
                      '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
    },
    {
        "title": 'Jijamata Udyan',
        "lat": '41.775509',
        "lng": '-71.507570',
        "description": '<div id="iw-container">' +
                    '<div class="iw-title">Porcelain Factory of Vista Alegre</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Profile</div>' +
                      '<img src="https://scontent-iad3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/1743489_1167335746617229_1334023780022419611_n.jpg?oh=e1fe67edb85dbb4880fc408621462685&oe=5715C8C4" height="115" width="83">' +
                      '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
    },
    {
        "title": 'Sanjay Gandhi National Park',
        "lat": '40.068224',
        "lng": '-75.220316',
        "description": '<div id="iw-container">' +
                    '<div class="iw-title">Porcelain Factory of Vista Alegre</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Profile</div>' +
                      '<img src="https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg" height="115" width="83">' +
                      '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                      '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
    }
    ];

    function setMarkers(map){

    	for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title
            });
            var infoWindow = new google.maps.InfoWindow();
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    infoWindow.setContent(data.description);
                    infoWindow.open(map, marker);
                });
                google.maps.event.addListener(map, "click", function (e) { 
                    infoWindow.close();
                });
            })(marker, data);
 }



}
            