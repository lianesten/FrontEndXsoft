
var appClientes = angular.module('XsoftFrontend');

appClientes.controller('contAdmin', function($scope, $location, ServiceLogin) {
	
	$scope.cerrarSession = function(){
			ServiceLogin.cerrarSesion(ServiceLogin.getToken).success(function(data){
	    		if(data != ''){
	    			if(data.tipo=="Error"){
	    				$location.url('/');
	    			}else if (data.tipo=="Logout"){	
	    				ServiceLogin.setToken('');
	    				$location.url('/');
		    				
		    		}
	    		}
	    		$location.url('/');
	    	});
		};
	
});