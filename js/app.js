
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

		$scope.mensaje = 'Hola Mundo';
		$scope.titulo = "Este es el titulo";
		$scope.subtitulo = "Este es un subtitulo en el app.js";

		$scope.borradoMensaje = '';

		$scope.mostrar_alerta = function(){
				swal( $scope.mensaje );
		}

		$scope.mostrar_subtitulo = function(){
				swal( $scope.titulo, $scope.subtitulo  )
		}

		$scope.mostrar_confirmacion = function(){
				swal({
						title: 'Are you sure?',
						text: "You won't be able to revert this!",
						type: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						confirmButtonText: 'Yes, delete it!',
						closeOnConfirm: false
					}, function(){
								$scope.borradoMensaje = 'Archivo borrado';
								$scope.$apply();
								swal(
									'Deleted!',
									'Your file has been deleted.',
									'success'
								);
						});
		}

		$scope.mostrar_input = function(){
			swal({
					title: 'An_input!',
					text: 'Write something interesting',
					type: 'input',
					showCancelButton: true,
					closeOnConfirm: false,
					animation: 'slide-from-top',
					inputPlaceholder: 'Escribe algo'
			}, function(inputValue){

					if(inputValue === false) return false;

					if(inputValue === ""){
							swal.showInputError("Necesitas escribir algo!");
							return false;
					}

					$scope.borradoMensaje = 'Archivo borrado';
					$scope.$apply();

					swal("Excelente!", "Escribiste: " + inputValue, "success");
			});
		}

}]);
