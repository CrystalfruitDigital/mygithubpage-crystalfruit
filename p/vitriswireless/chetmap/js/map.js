var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.986855, lng: -75.196442},
    zoom: 9,
    disableDefaultUI: true
  });

  setMarkers(map);
}

var info = [
{"name": 'MAX NAAR',
"bio":"Hi, my name is Max. I'm 18 years old, and I'm currently a freshman engineering major at the University of Pittsburgh. I've been repairing phones for three months now, but I'm excited to expand my knowledge and improve my skills here at Pitt. If I'm not repairing phones or studying, I'm usually playing piano, listening to music, or throwing a frisbee with my friends."},
{"name": 'NICK BENNETT',
"bio":"My name is Nick Bennett and I attend school at Saint Francis University. I'm an exercise physiology major with a SCUBA minor. I play D1 volleyball at school. In my free time I enjoy playing outdoor volleyball, scuba diving, and hiking."},
{"name":'NICK DESANTIS',
"bio":"Hi, I'm  Nick DeSantis I currently attend high school at Council Rock.  I'm a great guy to be around, I'm always positive and passionate about everything, which is what drives me to fix broken devices. I enjoy working out and playing hockey in my free time."},
{"name": 'RYAN BOYD',
"bio":"Hi, my name is Ryan Boyd and I'm currently a student at Council Rock South High School. In my free time I enjoy playing  basketball for my school's varsity team. When I'm not fixing devices and learning about the latest industry buzz you can find me fishing and snowboarding."}]

var markers = [
    {
        "title": info[0].name,
        "lat": '39.952584',
        "lng": '-75.165222',
        "description": 
                  '<div id = "container">'+
                    '<div id = "top" class = "animated fadeInDown"><img class = "animated delay bounceInDown img-responsive" src="./img/work1.jpg" alt="" />'+
                    '<p id = "name">'+ info[0].name+'</p></div>'+
                      '<div id = "info-tab" >'+
                            '<div id = "info-tab-left" class = "animated fadeInLeft"><p class = "number ">100</p><p class = "text">Number of Repairs</p></div>'+
                            '<div id = "info-tab-right" class = "animated fadeInRight"><p class = "number">4.5/5</p><p class = "text">Rating </p></div>'+
                      '</div>'+
                      '<div id = "info-para" class = "animated delay fadeIn "><p id = "test">'+info[0].bio+'</p></div>'+
                      '<button type="button" class="btn btn-success btn-block disabled animated fadeInUp">Repair Now</button>'+
                   '</div>'
                    
    },
    {
        "title": info[1].name,
        "lat": '39.981389',
        "lng": '-75.149444',
        "description": 
                  '<div id = "container">'+
                    '<div id = "top" class = "animated fadeInDown"><img class = "animated delay bounceInDown img-responsive img-responsive" src="./img/work2.jpg" alt="" />'+
                    '<p id = "name">'+ info[1].name+'</p></div>'+
                      '<div id = "info-tab" >'+
                            '<div id = "info-tab-left" class = "animated fadeInLeft"><p class = "number ">100</p><p class = "text">Number of Repairs</p></div>'+
                            '<div id = "info-tab-right" class = "animated fadeInRight"><p class = "number">4.5/5</p><p class = "text">Rating </p></div>'+
                      '</div>'+
                      '<div id = "info-para" class = "animated delay fadeIn "><p id = "test">'+info[1].bio+'</p></div>'+
                      '<button type="button" class="btn btn-success btn-block disabled animated fadeInUp">Repair Now</button>'+
                   '</div>'
                    
    },
    {
        "title": info[2].name,
        "lat": '40.237805',
        "lng": '-74.959841',
        "description": 
                  '<div id = "container">'+
                    '<div id = "top" class = "animated fadeInDown"><img class = "animated delay bounceInDown img-responsive" src="./img/work3.jpg" alt="" />'+
                    '<p id = "name">'+ info[2].name+'</p></div>'+
                      '<div id = "info-tab" >'+
                            '<div id = "info-tab-left" class = "animated fadeInLeft"><p class = "number ">100</p><p class = "text">Number of Repairs</p></div>'+
                            '<div id = "info-tab-right" class = "animated fadeInRight"><p class = "number">4.5/5</p><p class = "text">Rating </p></div>'+
                      '</div>'+
                      '<div id = "info-para" class = "animated delay fadeIn"><p id = "test">'+info[2].bio+'</p></div>'+
                      '<button type="button" class="btn btn-success btn-block disabled animated fadeInUp">Repair Now</button>'+
                   '</div>'
                    
    },
    {
        "title": info[3].name,
        "lat": '41.775509',
        "lng": '-71.507570',
        "description": 
                  '<div id = "container">'+
                    '<div id = "top" class = "animated fadeInDown"><img class = "animated delay bounceInDown img-responsive" src="./img/work4.jpg" alt="" />'+
                    '<p id = "name">'+ info[3].name+'</p></div>'+
                      '<div id = "info-tab" >'+
                            '<div id = "info-tab-left" class = "animated fadeInLeft"><p class = "number ">100</p><p class = "text">Number of Repairs</p></div>'+
                            '<div id = "info-tab-right" class = "animated fadeInRight"><p class = "number">4.5/5</p><p class = "text">Rating </p></div>'+
                      '</div>'+
                      '<div id = "info-para" class = "animated delay fadeIn"><p id = "test">'+info[3].bio+'</p></div>'+
                      '<button type="button" class="btn btn-success btn-block disabled animated fadeInUp">Repair Now</button>'+
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
            