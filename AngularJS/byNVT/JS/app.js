//Create module
var app = angular.module("myAdd", []);

//Controller
app.controller("addController", function($scope){
    var con = this;
    con.infos = [];
    con.new = {};
    con.userShown = true;

    con.addInfo = function() {
        if (con.new.name && con.new.email && con.new.phone) {
            con.infos.push(con.new);
            con.new = {};
            $scope.myForm.$setPristine();
        } else {
            alert("Please fill in all required fields!");
        }
    }
    con.showUser = function() {
        con.userShown = !con.userShown;
    }
});