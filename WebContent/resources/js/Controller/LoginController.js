
//Se crea el modulo y se le inyecta ngRoute que nos permite tener varias vistas
var appClientes = angular.module('XsoftFrontend');

//Controlador para manejar el formulario de autenticacion
appClientes.controller('contLogin', function($scope,$location) {
		    //la funci�n login que llamamos en la vista llama a la funci�n
		    //login de la factoria auth pasando lo que contiene el campo
		    //de texto del formulario
	
	console.log('Llama el controller');
//		    $scope.login = function(){
//		    	
//		    	Usuarios.validar($scope.nombreUsuario, $scope.pws).success(function(data){
//		    		if(data != ''){
//		    			//alert(data);
//		    			$scope.nombreUsuario = '';
//		    			$scope.pws = '';
//		    			
//		    			return;
//		    		}
//		    		$location.url('/Clientes');
//		    	});
//		        
//		    };
		    
	});
