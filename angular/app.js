/**
 * 
 */

var myApp = angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope){
	$scope.checkForm = function(){
		if($scope.username == "nguyenvana" && $scope.password =="123"){
			window.location="index_user.html";
		}
		else{
			alert("sai mat khau hoac password");
		}
	}
})

var demoApp = angular.module('demoApp',[])
	.controller( "RegisterCtrl",['$scope', function($scope) {
		$scope.success=false;
      	$scope.register = function(){
      		$scope.success=true;
      	}
    }]);