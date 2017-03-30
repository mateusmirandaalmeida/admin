define(function(require) {

  var APILocation = require('app/apiLocations');

  require('./services/module');
  require('./controllers/module');
  
  return require('angular')
    .module('app.home', [
      'app.home.controllers',
      'app.home.services'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('home.list', {
          url: '/list',
          templateUrl: 'app/modules/home/views/list.html',
          controller: 'HomeListController'
        })
    })
});
