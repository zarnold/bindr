
bindr.controller('mainCtrl', ['$scope', '$rootScope', 'authorsService', function($scope, $rootScope, authorsService) {
    $scope.formData = {};
    $scope.authors = [];
    authorsService.getAuthors().then(function(response) {
      $scope.authors = response;
      console.log('authors are');
      console.log($scope.authors);
      });

    $scope.addAuthor = function() {
    authorsService.addAuthor($scope.formData).then(function(response) {
      $scope.authors.push($scope.formData)
      $scope.formData = {};
      });
    }

    $scope.removeAuthor = function(author) {
    authorsService.removeAuthor(author).then(function(response) {
      $scope.authors.splice($scope.authors.indexOf(author), 1)
      });
    }
    }]);
