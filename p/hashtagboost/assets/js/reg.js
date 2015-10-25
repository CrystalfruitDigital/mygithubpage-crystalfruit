toggleTerms = function() {
    $("#termsWindow").slideToggle('slow');
}

var app = angular.module("registerUser", []);

app.controller("mainCtrl", function($scope) {

    registerNewUser = function() {
        if ($scope.password == $scope.vPass) {
            var newuser = {
                'firstname': $scope.firstName,
                'lastname': $scope.lastName,
                'email': $scope.email,
                'password': $scope.password,
                'type': 1,
                'instagram': $scope.instagram,
                'audience': $scope.audience,
                'terms': $scope.termsChecked
            }

            $.ajax({
                url: "http://ec2-54-172-0-233.compute-1.amazonaws.com/addnewuser",
                datatype: 'json',
                type: 'post',
                data: {
                    'user': newuser
                },
                success: function(data) {
                	alert(data);
                    if (data.status == '409') {
                        alert('E-mail already in use!');
                    } else if (data.status == 'success') {
                        alert('successfully added to db');
                        $("#thankyou").slideToggle('fast');
                    }
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(xhr, status, err.tostring());
                }.bind(this)
            });
        } else {
            alert("Passwords do not match!");
            $scope.vPass = "";
        }
    }

});