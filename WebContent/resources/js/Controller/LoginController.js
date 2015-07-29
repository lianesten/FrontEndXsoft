
//Se crea el modulo y se le inyecta ngRoute que nos permite tener varias vistas
var appClientes = angular.module('XsoftFrontend');


//Controlador para manejar el formulario de autenticacion
appClientes.controller('contLogin', function($scope, $location, ServiceLogin) {
		
		    $scope.username;
		    $scope.password;
		    
		    $scope.login = function(){
		    	
		    	ServiceLogin.validar($scope.username, $scope.password).success(function(data){
		    		console.log(data);
//		    		if(data != ''){
//		    			//alert(data);
//		    			$scope.nombreUsuario = '';
//		    			$scope.pws = '';
//		    			
//		    			return;
//		    		}
		    		//$location.url('/Clientes');
		    	});
		        
		    };
		    
	});
