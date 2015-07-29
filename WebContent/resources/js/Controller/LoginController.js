
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
		    				alert(data.mensaje);
			    			$scope.username = '';
			    			$scope.password = '';
			    			return;
		    			}else if (data.tipo=="Login"){
		    				
		    				ServiceLogin.setToken(data.mensaje);
		    				
		    				if(data.tipoUsuario=="Secre"){
			    				console.log(ServiceLogin.getToken());
			    				$location.url('/PrincipalSecre');
			    				
			    			}else if(data.tipoUsuario=="Admin"){
			    				console.log(ServiceLogin.getToken());
			    				$location.url('/PrincipalAdmin');
			    				
			    			}else{
			    				$location.url('/');
			    			}
			    		}
		    		}
		    	});
		        
		    };
		    
	});
