define(function (require) {
    var angular = require('angular');
    require('../services/module');

    return angular
            .module('app.home.controllers', ['app.home.services'])
            .controller('HomeListController', require('./HomeListController'))
});
