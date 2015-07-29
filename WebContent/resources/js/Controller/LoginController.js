
var appClientes = angular.module('XsoftFrontend');


//Controlador para manejar el formulario de autenticacion
appClientes.controller('contLogin', function($scope, $location, ServiceLogin) {
		
		    $scope.username;
		    $scope.password;
		    
		    $scope.login = function(){
		    	
		    	ServiceLogin.validar($scope.username, $scope.password).success(function(data){
		    		console.log(data);
		    		if(data != ''){
		    			if(data.tipo=="Error"){
			    			$scope.username = '';
			    			$scope.password = '';
			    			return;
		    			}else if (data.tipo=="Login"){
			    			if(data.tipoUsuario=="Admin"){
			    				$location.url('/PrincipalAdmin');
			    			}else if(data.tipoUsuario=="Secre"){
			    				$location.url('/');
			    			}else{
			    				$location.url('/');
			    			}
			    		}
		    		}
		    	});
		        
		    };
		    
	});
