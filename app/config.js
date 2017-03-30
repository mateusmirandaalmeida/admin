'use strict';
requirejs.config({
    paths: {
        "angular": "bower_components/angular/angular.min",
        "angular-bootstrap": "bower_components/angular-bootstrap/ui-bootstrap-tpls.min",
        "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router.min",
        "gentelella": "assets/js/admin"
    },
    shim: {
        "angular": {exports: "angular", deps: []},
        "angular-bootstrap": {deps: ["angular"]},
        "angular-ui-router": {deps: ["angular"]}
    }
});
