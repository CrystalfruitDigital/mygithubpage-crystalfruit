var app = angular.module('app',['uiGmapgoogle-maps']).config(
    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            key : "AIzaSyDQkrgeEEgtb-t4UclOlbqvwfGZELV6Ae4"
        });
    }]
);

//Tab transitions
var transitions = {"inLeft" : "animated delay fadeInLeft",
                  "outLeft" : "animated fadeOutLeft",
                  "inRight" : "animated delay fadeInRight",
                  "outRight" : "animated fadeOutRight",
                  "enlarge":"menu-large"
                  }



//button setting 
var buttonSetting = {"notSelected":"btn btn-success btn-block ",
                     "selected":"btn btn-success btn-block selected"};


//phone information
var appleBrand = ["iPhone 4/4s", "iPhone 5/5c/5s", "iPhone 6", "iPhone 6 Plus","iPhone 6S", "iPad2",
"iPad 3/4", "iPad Mini",
"iPad Mini 2","iPad Mini 3",
"iPad Air"];
var samBrand = ["Galaxy s3","Galaxy s4", "Galaxy s5"];
var lgBrand = ["LG G2","LG G3","LG G4"];
var andBrand = ["PlaceHolder QQ"];


   var issueChoices0 =[{
			"lowerCost" : 80,
			"higherCost": 160,
			"selected": false,
			"name": "LCD screen with digitizer assembly",
            "button": buttonSetting.notSelected,
            "number": 0,
            "price": 70
		},
		{
			"lowerCost" : 60,
			"higherCost": 70,
			"selected": false,
			"name": "Battery",
			"button": buttonSetting.notSelected,
            "number": 1,
            "price" : 50
		} ,
		{
			"lowerCost" : 60,
			"higherCost": 70,
			"selected": false,
			"name": "Original back glass" ,
			"button": buttonSetting.notSelected,
            "number": 2,
            "price" : 50
		} ,
		{
			"lowerCost" : 60,
			"higherCost": 70,
			"selected": false,
			"name": "Home button flex cable",
			"button": buttonSetting.notSelected,
            "number": 3,
            "price" : 50
		} ,
		{
			"lowerCost" : 60,
			"higherCost": 70,
			"selected": false,
			"name": "Charging port flex cable",
			"button": buttonSetting.notSelected,
            "number": 4,
            "price" : 50
		},
		{
			"lowerCost" : 60,
			"higherCost": 70,
			"selected": false,
			"name": "Power/Sensor cable",
			"button": buttonSetting.notSelected,
            "number": 5,
            "price" : 50
		},
        {
			"lowerCost" : 60,
			"higherCost": 70,
			"selected": false,
			"name": "Ear speaker",
			"button": buttonSetting.notSelected,
            "number": 6,
            "price" : 50
		}];

    var issueChoices1 =[{
			"lowerCost" : 5,
			"higherCost": 10,
			"selected": false,
			"name": "LCD screen with digitizer assembly",
            "button": buttonSetting.notSelected,
            "number": 0,
            "price" : 0
		},
		{
			"lowerCost" : 20,
			"higherCost": 50,
			"selected": false,
			"name": "Battery",
			"button": buttonSetting.notSelected,
            "number": 1,
            "price" : 60
		} ,

		{
			"lowerCost" : 9,
			"higherCost": 21,
			"selected": false,
			"name": "Home button flex cable",
			"button": buttonSetting.notSelected,
            "number": 2,
            "price" : 60
		} ,
		{
			"lowerCost" : 50,
			"higherCost": 100,
			"selected": false,
			"name": "Charging port flex cable",
			"button": buttonSetting.notSelected,
            "number": 3,
            "price" : 60
		},
		{
			"lowerCost" : 50,
			"higherCost": 100,
			"selected": false,
			"name": "Power/Sensor cable",
			"button": buttonSetting.notSelected,
            "number": 4,
            "price" : 60
		},
        {
			"lowerCost" : 50,
			"higherCost": 100,
			"selected": false,
			"name": "Ear speaker",
			"button": buttonSetting.notSelected,
            "number": 5,
            "price" : 60
		}];

var issueChoices2 =[{
			"lowerCost" : 5,
			"higherCost": 10,
			"selected": false,
			"name": "Glass digitizer assembly",
            "button": buttonSetting.notSelected,
            "number": 0,
            "price" : 120
		},
		{
			"lowerCost" : 20,
			"higherCost": 50,
			"selected": false,
			"name": "Battery",
			"button": buttonSetting.notSelected,
            "number": 1,
            "price" : 100
		} ,
		{
			"lowerCost" : 6,
			"higherCost": 11,
			"selected": false,
			"name": "Charging port flex cable" ,
			"button": buttonSetting.notSelected,
            "number": 2,
            "price" : 90
		}];

var issueChoices3 =[{
			"lowerCost" : 5,
			"higherCost": 10,
			"selected": false,
			"name": "Glass digitizer assembly",
            "button": buttonSetting.notSelected,
            "number": 0,
            "price" : 0
		},
		{
			"lowerCost" : 20,
			"higherCost": 50,
			"selected": false,
			"name": "Battery",
			"button": buttonSetting.notSelected,
            "number": 1,
            "price" : 100
		} ,
        {
			"lowerCost" : 20,
			"higherCost": 50,
			"selected": false,
			"name": "Home button flex cable",
			"button": buttonSetting.notSelected,
            "number": 2,
            "price" : 90
		} ,
		{
			"lowerCost" : 6,
			"higherCost": 11,
			"selected": false,
			"name": "Charging port flex cable" ,
			"button": buttonSetting.notSelected,
            "number": 3,
            "price" : 90
		}];
var issueChoices4 =[{
			"lowerCost" : 5,
			"higherCost": 10,
			"selected": false,
			"name": "LCD screen with digitizer assembly",
            "button": buttonSetting.notSelected,
            "number": 0,
            "price" : 0
		},
		{
			"lowerCost" : 20,
			"higherCost": 50,
			"selected": false,
			"name": "Battery",
			"button": buttonSetting.notSelected,
            "number": 1,
            "price" : 60
		} ,
		{
			"lowerCost" : 50,
			"higherCost": 100,
			"selected": false,
			"name": "Charging port flex cable",
			"button": buttonSetting.notSelected,
            "number": 2,
            "price" : 60
		}];
var issueChoices5 =[{
			"lowerCost" : 5,
			"higherCost": 10,
			"selected": false,
			"name": "LCD screen with digitizer assembly",
            "button": buttonSetting.notSelected,
            "number": 0,
            "price" : 130
		},
		{
			"lowerCost" : 20,
			"higherCost": 50,
			"selected": false,
			"name": "Battery",
			"button": buttonSetting.notSelected,
            "number": 1,
            "price" : 60
		} ,
		{
			"lowerCost" : 9,
			"higherCost": 21,
			"selected": false,
			"name": "Home button flex cable",
			"button": buttonSetting.notSelected,
            "number": 2,
            "price" : 60
		} ,
		{
			"lowerCost" : 50,
			"higherCost": 100,
			"selected": false,
			"name": "Charging port flex cable",
			"button": buttonSetting.notSelected,
            "number": 3,
            "price" : 60
		}];



//Rate controller
app.controller('phoneController',['$scope','$timeout','$log', function($scope, $timeout,$log){
    $scope.issues = [];
    $scope.windowButton = "btn btn-success btn-block disabled animated fadeInUp";
 
    
 
    $scope.map = { center: { latitude: 39, longitude: -75 }, zoom: 11,
    markers: [{
        latitude: 39.952584,
        longitude: -75.16522,
        id : 0,
        content:{
            name: 'MAX NAAR',
            info: "Hi, my name is Max. I'm 18 years old, and I'm currently a freshman engineering major at the University of Pittsburgh. I've been repairing phones for three months now, but I'm excited to expand my knowledge and improve my skills here at Pitt. If I'm not repairing phones or studying, I'm usually playing piano, listening to music, or throwing a frisbee with my friends.",
            img:"./img/MAX_NAAR.jpg",
            phoneNumber : "Or contact at: (844) 484-8747 ext 707"  
        }
    },{
        latitude:39.981389,
        longitude: -75.149444,
        id : 1,
        content:{
            name: 'NICK BENNETT',
            info: "My name is Nick Bennett and I attend school at Saint Francis University. I'm an exercise physiology major with a SCUBA minor. I play D1 volleyball at school. In my free time I enjoy playing outdoor volleyball, scuba diving, and hiking.",
        img:"./img/NICK_BENNETT.jpg",
        phoneNumber : "Or contact at: (844) 484-8747 ext 715" 
        }
    },{
        latitude: 41.775509,
        longitude: -71.507570,
        id : 2,
        content:{
            name: 'NICK DESANTIS',
            info: "Hi, I'm  Nick DeSantis I currently attend high school at Council Rock.  I'm a great guy to be around, I'm always positive and passionate about everything, which is what drives me to fix broken devices. I enjoy working out and playing hockey in my free time.",
            img:"./img/NICK_DESANTIS.jpg",
            phoneNumber : "Or contact at: (844) 484-8747 ext xxx" 
        }
    },{
        latitude:45,
        longitude: -74,
        id : 3,
        content:{
            name: 'RYAN BOYD',
            info: "Hi, my name is Ryan Boyd and I'm currently a student at Council Rock South High School. In my free time I enjoy playing  basketball for my school's varsity team. When I'm not fixing devices and learning about the latest industry buzz you can find me fishing and snowboarding.",
            img:"./img/RYAN_BOYD.jpg",
            phoneNumber : "Or contact at: (844) 484-8747 ext 712" 
        }
    }], // array of models to display
        markersEvents: {
            click: function(marker, eventName, model, arguments) {
                $scope.map.window.model = model;
                $scope.map.window.show = true;
            }
        },
        window: {
            marker: {},
            show: false,
            closeClick: function() {
                this.show = false;
            },
            options: {
                pixelOffset: {
                width: -1,
                height: -25
              }
            },
            
        }
                
    }
    
    
    
      var currentTab =1;
    $scope.backButton = "button-display-none";
    $scope.menuClass = transitions.normal;
    $scope.iconClass = transitions.iconNormal;
    
	$scope.tabBackward = function(i){
        switch(currentTab){
    
            case 2:
                $scope.class2 = transitions.outRight;
		        $scope.class1 = transitions.inLeft;
                $timeout(function(){
			         $scope.showTab2 = false}, 500);
                $scope.showTab1 = true;
                currentTab--;
                $scope.backButton = " btn btn-success animated bounceOut";
                break;
            case 3:
                $scope.class3 = transitions.outRight;
		        $scope.class2 = transitions.inLeft;
                $timeout(function(){
			         $scope.showTab3 = false}, 400);
                $scope.showTab2 = true;
                currentTab--;
            
                break;
            case 4:
                $scope.class4 = transitions.outRight;
		        $scope.class3 = transitions.inLeft;
                $timeout(function(){
			    $scope.showTab4 = false}, 400);
                $scope.showTab3 = true;
                currentTab--;
                $scope.windowButton = "btn btn-success btn-block disabled animated fadeInUp";
                break;
                
        }
                
		
        
	}

	//Change to Tab3
	$scope.tabForward = function(i){
        switch(i){
            case 1:
                $scope.class1 = transitions.outLeft;
                $scope.class2 = transitions.inRight;
                $scope.showTab2 = true;	
                $timeout(function(){
                    $scope.showTab1 = false}, 500);

                $scope.backButton = "btn btn-success animated bounceInDown ";
                currentTab++;
                break;
            case 2:
                
                $scope.class2 = transitions.outLeft;
                $scope.class3 = transitions.inRight;
                $scope.showTab3 = true;	
                $timeout(function(){
                    $scope.showTab2 = false}, 500);
                currentTab++;
                break;
            case 3:
                $scope.class3 = transitions.outLeft;
                $scope.class4 = transitions.inRight;
                $scope.showTab4 = true;	
                $timeout(function(){
                    $scope.showTab3 = false}, 500);
                currentTab++;
                $scope.windowButton =  "btn btn-success btn-block animated fadeInUp";
                break;
        }
        
        
	}
    
    
    
    //brand model
    $scope.phoneFunction = function(i){
        switch (i){
            case 0:
                $scope.choosenBrand = appleBrand;
                break;
            case 1:
                $scope.choosenBrand = samBrand;
                break;
            case 2:
                $scope.choosenBrand = lgBrand;
                break;
            case 3:
                $scope.choosenBrand = andBrand;
                break;
        }
    }
    
    
    
    //phone model
    $scope.choosenPhone = function (data){
        $scope.selectedPhone = data;
        
        if(data === appleBrand[0]){
            $scope.issues = issueChoices0;
        }
        else if(data === appleBrand[1]|data === appleBrand[2]| data === andBrand[3]){
            if(data === appleBrand[1]){
                $scope.issues = issueChoices1;
                $scope.issues[0].price = 120;
            }
            else if(data === appleBrand[2]){
                $scope.issues = issueChoices1;
                $scope.issues[0].price = 140;
            }
            else{
                $scope.issues = issueChoices1;
                $scope.issues[0].price = 150
            }
            
        }
        else if(data === appleBrand[4]|data === appleBrand[5]| data === appleBrand[6]){
            $scope.issues =  issueChoices2;
        }
        else if(data === appleBrand[7]|data === appleBrand[8]|data === appleBrand[9]){
            $scope.issues =  issueChoices3;
            if(data === appleBrand[9]){
                $scope.issues[0].price = 140;
                $scope.issues[1].price = 110;
            }
        
        }
        else if(data === samBrand[0]|data === samBrand[1]| data === samBrand[2]){
            if(data === samBrand[0]){
                $scope.issues =  issueChoices4;
                $scope.issues[0].price = 130;
                $scope.issues[1].price = 50;
                $scope.issues[2].price = 50;
            }
            else if(data === samBrand[1]){
                $scope.issues =  issueChoices4;
                issues[0].price = 150;
                issues[1].price = 60;
                issues[2].price = 60;
            }
            else{
                $scope.issues =  issueChoices4;
                $scope.issues[0].price = 200;
                $scope.issues[1].price = 60;
                $scope.issues[2].price = 60;
            }
        }
        else if(data === lgBrand[0]|data === lgBrand[1]|data === lgBrand[2]){
             $scope.issues =  issueChoices5;
            if(data === lgBrand[2]){
               
                $scope.issues[0].price = 150;
            }   
        }
        
    }
    
    
    //checkbox model
    $scope.lower = 0;
	$scope.higher = 0;
    
    
    
    //issue information
	

		//selected checkbox
	$scope.toggleSelection = function(i){
		if($scope.issues[i].selected === false){
			$scope.lower = $scope.lower +$scope.issues[i].lowerCost;
			$scope.higher = $scope.higher +$scope.issues[i].higherCost;
			$scope.issues[i].selected = true;
			$scope.issues[i].button = buttonSetting.selected;
		}
        //de-selected checkbox
		else{
			$scope.lower = $scope.lower -$scope.issues[i].lowerCost;
			$scope.higher = $scope.higher -$scope.issues[i].higherCost;
			$scope.issues[i].selected = false;
			$scope.issues[i].button = buttonSetting.notSelected;
		}
	}
    $scope.receiptButtonClass = "button-display-none";
    $scope.buttonVisible = function(){
    
        if($scope.lower > 0){
            $scope.receiptButtonClass = "animated bounceInDown btn btn-success";
        }
        else{
            $scope.receiptButtonClass = "animated bounceOutUp btn btn-success";
        }
    }
    

    
//receipt model    
    var k = 0;
    $scope.selectedIssue = [];
    $scope.totalCost = 0;
    $scope.result = function() {
        for(var i = 0; i < $scope.issues.length;i++){
            if($scope.issues[i].selected === true){
                $scope.selectedIssue[k] = $scope.issues[i];
                $scope.totalCost = $scope.issues[i].price + $scope.totalCost;
                k++;
                
            }
        }
        
    }
    
    $scope.clearArray= function(){
        $timeout(function(){
        $scope.selectedIssue.length = 0;
        $scope.totalCost = 0;
        for(var i = 0; i < $scope.issues.length; i++){
            $scope.issues[i].selected = false;
            $scope.issues[i].button = buttonSetting.notSelected;
        }
        $scope.lower = 0;
        $scope.higher = 0;
        $scope.receiptButtonClass = "";
        $scope.receiptButtonClass = "button-display-none";       
        },400);
    }
   
}]);