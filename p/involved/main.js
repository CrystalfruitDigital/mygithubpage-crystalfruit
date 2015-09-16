var app = new angular.module("imApp", ["firebase"]);

var config = {
    delimiter: "",  // auto-detect
    newline: "",    // auto-detect
    header: false,
    dynamicTyping: false,
    preview: 0,
    encoding: "",
    worker: false,
    comments: false,
    step: undefined,
    complete: undefined,
    error: undefined,
    download: false,
    skipEmptyLines: false,
    chunk: undefined,
    fastMode: undefined,
    beforeFirstChunk: undefined,
}

app.controller("mainCtrl", function($scope, $firebaseArray) {
    var ref = new Firebase("https://involvedmembers.firebaseio.com/");

    var imRef = $firebaseArray(ref);

    $scope.fields = imRef;

    $scope.pushCSV = function() {
        // var file = $("#targetFile").parse($("#targetFile"), config);
        ref.push({"text":"hi"});
    }

    $scope.deleteMe = function(video) {
        if (confirm("Are you sure you want to delete this video?")) {
            $scope.links.$remove(video);
        }
    }
});