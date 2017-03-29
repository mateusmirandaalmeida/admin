define(function(require) {
    'use strict';

    require('angular');
    require('angular-bootstrap');
    require('angular-ui-router');
    require('app/apiLocations');
    require('gentelella');

    require('app/modules/home/home');

    angular.module('app.core', [
        'ui.router',
        'ui.bootstrap',
        'app.home'
    ])
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, $injector) {

      $urlRouterProvider.otherwise('home/list');

      $stateProvider
        .state('home', {
          url: '/home',
          data: {
            id: 0
          },
          template: '<div ui-view></div>'
        })

      $httpProvider.interceptors.push(function($q, $injector, $timeout) {
        return {
          'request': function(config) {
            //AQUI VOCÊ PODE SETAR O TOKEN DO USUÁRIO LOGADO
            if(window.sessionStorage.getItem('token'))
              config.headers['Authorization'] = window.sessionStorage.getItem('token');
            return config;
          },
          'responseError': function(rejection) {
            var $state = $injector.get('$state');
            //TRATRAMENTO DE MENSAGENS.
            return $q.reject(rejection);
          }
        };
      })
    })
});
