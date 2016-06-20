var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", { templateUrl: 'Views/LogIn.html', controller: "logInController" })
                  .when("/home", { templateUrl: 'Views/Home.html', controller: "homeController" })
                  .when("/aboutus", { templateUrl: 'Views/AboutUs.html', controller: "aboutusController" })
                   .when("/detailedInfo", {templateUrl:'Views/DetailedInfo.html', controller:"detailedController"})
                  .otherwise("/home")
}]);


app.controller("logInController", function($scope, $location){
    $scope.myLogIn = function () {
        if ($scope.username == "admin" && $scope.password == "123") {
           $location.path("/home");
        } else {
            alert("username: admin, password: 123");
        }
   
    }
});

app.controller("homeController", function ($scope, $http) {
    $http.get("http://services.groupkt.com/state/get/IND/all").success(function (data) {
        $scope.statesInfo = data.RestResponse.result;
    }).error(function () {
        alert("Error loading data");
    });

    

    $scope.detailedData = function (state) {
        alert(state.name);
        $location.path("/detaliedInfo");
        
      
    }
});

app.controller("detailedController", function ($scope) {
    
   
});
app.controller("myController", function ($scope) {

});