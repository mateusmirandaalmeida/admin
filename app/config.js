'use strict';
requirejs.config({
    paths: {
        "angular": "bower_components/angular/angular.min",
        "jquery": "bower_components/jquery/dist/jquery.min",
        "angular-bootstrap": "bower_components/angular-bootstrap/ui-bootstrap-tpls.min",
        "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router.min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
        "gentelella" : "bower_components/gentelella/build/js/custom.min"
    },
    shim: {
        "angular": {exports: "angular", deps: ["jquery"]},
        "angular-bootstrap": {deps: ["angular"]},
        "angular-ui-router": {deps: ["angular"]},
        "bootstrap": {deps: ["jquery"]},
        "gentelella": {deps: ["jquery", "bootstrap", "angular"]},
    }
});
