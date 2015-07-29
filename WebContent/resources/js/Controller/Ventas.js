var appVentas = angular.module('XsoftFrontend');




//Alejandro Zambrano alejandrozambrano@gmail.com
//Controlador Buscar Ventas

appVentas.controller('contBuscarVentas', function($scope,ServiceBuscarVenta) {

		$scope.idVent;
		$scope.BuscarV = function(){ 
			ServiceBuscarVenta.BuscarV($scope.idVent).success(function(data){
			console.log(data);	
			});
		}
		
		$scope.btnInicio = function(){
			$location.url('/VistaAdmin');
		}
		
		$scope.btnBuscar = function(){
			$location.url('/BuscarVentas');
		}
		
		$scope.btnCrear = function() {
			$location.url('/CrearVentas');
		}
		
		$scope.btnEditar = function() {
			$location.url('/EditarVentas');
		}
		
		$scope.btnEliminar = function() {
			$location.url('/EliminarVentas');
		}
		
			       
});

var URL_SERVICIO_BUSCAR_VENTA ='../../XsoftBackend/rest/VentaResourse/obtenerVenta';
appVentas.service("ServiceBuscarVenta",function ($http){
	this.validar =function(idVent){
		return $http ({
			method:'GET',
			url: URL_SERVICIO_BUSCAR_VENTA,
			params:{
				idVenta : idVent
				   }
		});
	} 

});

//Controlador crear Ventas

appVentas.controller('contCrearVentas', function($scope,ServiceCrearVenta) {

		$scope.idVent;
		$scope.idClien;
		$scope.idUsu
		$scope.CrearV = function(){ 
			ServiceCrearVenta.crear($scope.idVent, $scope.idClien, $scope.idUsu).success(function(data){
			console.log(data);	
			});
		}
			
			$scope.btnInicio = function(){
				$location.url('/VistaAdmin');
			}
			
			$scope.btnBuscar = function(){
				$location.url('/BuscarVentas');
			}
			
			$scope.btnCrear = function() {
				$location.url('/CrearVentas');
			}
			
			$scope.btnEditar = function() {
				$location.url('/EditarVentas');
			}
			
			$scope.btnEliminar = function() {
				$location.url('/EliminarVentas');
			}

        
});

    
var URL_SERVICIO_CREAR_VENTA ='../../XsoftBackend/rest/VentaResourse/almacenarVenta';
appVentas.service("ServiceCrearVenta",function ($http){
	this.crear =function(idVent, idClien, idUsu){
		return $http ({
			method:'POST',
			url: URL_SERVICIO_CREAR_VENTA,
			params:{
				idVenta : idVent,
				idCliente : idClien,
				idUsuario : idUsu
				   }
		});
	}
});

//Controlador editar Ventas
//falta webservice
appVentas.controller('contEditarVentas', function($scope,ServiceEditarVenta) {  
		    
				$scope.idClien;
				$scope.idUsu
				$scope.EditarV = function(){ 
					ServiceEdtirarVenta.validar($scope.idVent, $scope.idClien, $scope.idUsu).success(function(data){
					console.log(data);	
					}); 
				}
					$scope.btnInicio = function(){
						$location.url('/VistaAdmin');
					}
					
					$scope.btnBuscar = function(){
						$location.url('/BuscarVentas');
					}
					
					$scope.btnCrear = function() {
						$location.url('/CrearVentas');
					}
					
					$scope.btnEditar = function() {
						$location.url('/EditarVentas');
					}
					
					$scope.btnEliminar = function() {
						$location.url('/EliminarVentas');
					}
		        
        });
 
		    
var URL_SERVICIO_EDITAR_VENTA ='../../XsoftBackend/rest/VentaResourse/venta';
        appVentas.service("ServiceEditarVenta",function ($http){
        	this.validar =function(idVent, idClien, idUsu){
        		return $http ({
        			method:'GET',
        			url: URL_SERVICIO_EDITAR_VENTA,
        			params:{
        				idVenta : idVent,
        				idCliente : idClien,
        				idUsuario : idUsu
        				   }
        		});
        	}

	});


//Controlador Eliminar Ventas

//Controlador para manejar el formulario de eliminar
        //falta web service
appVentas.controller('contEliminarVentas', function($scope,ServiceEliminarVenta) {
		  
				$scope.idVent;
				$scope.EliminarV = function(){ 
					ServiceEliminarVenta.validar($scope.idVent).success(function(data){
					console.log(data);	
					});
				}
					$scope.btnInicio = function(){
						$location.url('/VistaAdmin');
					}
					
					$scope.btnBuscar = function(){
						$location.url('/BuscarVentas');
					}
					
					$scope.btnCrear = function() {
						$location.url('/CrearVentas');
					}
					
					$scope.btnEditar = function() {
						$location.url('/EditarVentas');
					}
					
					$scope.btnEliminar = function() {
						$location.url('/EliminarVentas');
					}
		        
        });

 
		    
var URL_SERVICIO_EELIMINAR_VENTA ='../../XsoftBackend/rest/VentaResourse/venta';
        appVentas.service("ServiceEliminarVenta",function ($http){
        	this.validar =function(idVent){
        		return $http ({
        			method:'GET',
        			url: URL_SERVICIO_EDITAR_VENTA,
        			params:{
        				idVenta : idVent,
        			 }
        		});
        	}
       
	});

