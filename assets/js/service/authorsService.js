bindr.service('authorsService', function($http, $q) {
  return {
    'getAuthors' : function(){
      var defer = $q.defer();
      $http.get('/authors/getAuthors').success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
      return defer.promise;
    },
    'addAuthor': function(author) {
      var defer = $q.defer();
      $http.post('/authors/addAuthor', todo).success(function(resp){
          defer.resolve(resp);
      }).error( function(err) {
          defer.reject(err);
        });
      return defer.promise;
    },
    'removeAuthor': function(author) {
      var defer = $q.defer();
      $http.post('/authors/removeAuthor', todo).success(function(resp){
          defer.resolve(resp);
          }).error( function(err) {
            defer.reject(err);
            });
      return defer.promise;
    }
  }});
