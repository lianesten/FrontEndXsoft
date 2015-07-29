
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
		
		$scope.btnInicio = function(){
			$location.url('/PrincipalAdmin')
		}
		
		$scope.btnBuscar = function(){
			$location.url('/BuscarCliente')
		}
		
		$scope.btnCrear = function() {
			$location.url('/CrearCliente');
		}
		
		$scope.btnEditar = function() {
			$location.url('/EditarCliente');
		}
		
		$scope.btnEliminar = function() {
			$location.url('/EliminarCliente');
		}	
	
});