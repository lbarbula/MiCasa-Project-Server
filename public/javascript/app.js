angular.module('micasaBusinessLookup', [])

.controller('mainController', function($scope, $http) {

	$scope.formData = {};
	$scope.businessData = {};

	// Get all todos
	$http.get('/search')
		.success(function(data) {
			$scope.businessData = data;
			console.log(data);
		})
		.error(function(error) {
			console.log('Error: ' + error);
		});

	// Create a new todo
	$scope.createTodo = function(todoID) {
		$http.post('/api/v1/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.todoData = data;
				console.log(data);
			})
			.error(function(error) {
				console.log('Error: ' + error);
			});
	};

	// Delete a todo
	$scope.deleteTodo = function(todoID) {
		$http.delete('/api/v1/todos/' + todoID)
			.success(function(data) {
				$scope.todoData = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

});
