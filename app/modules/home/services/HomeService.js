define(['app/apiLocations'], function(APILocation) {

	HomeService.$inject = ['$http'];

	function HomeService($http) {
    	var Service = {};

      Service.getById = function(id){
        // busca por id ex:
        // return $http.get(APILocation.apiLocation+'/cliente/'+id);
      }

    	return Service;
    }

  	return HomeService;
});
