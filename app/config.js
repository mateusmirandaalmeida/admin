'use strict';
requirejs.config({
    paths: {
        "angular": "bower_components/angular/angular.min",
        "angular-bootstrap": "bower_components/angular-bootstrap/ui-bootstrap-tpls.min",
        "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router.min",
        "gentelella": "assets/js/admin",
        "gumga-date-ng" : "bower_components/gumga-date-ng/dist/gumga-date.min",
        "moment" : "bower_components/moment/min/moment.min",
        "locale" : "https://cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.6.3/angular-locale_pt-br.min",
        "moment-timezone" : "bower_components/moment-timezone/builds/moment-timezone-with-data.min"

    },
    shim: {
        "angular": {exports: "angular", deps: []},
        "locale": {deps: ["angular"]},
        "angular-bootstrap": {deps: ["angular"]},
        "angular-ui-router": {deps: ["angular"]},
        "moment": {deps: []},
        "gumga-date-ng": {deps: ["angular", "moment", "moment-timezone"]}
    }
});
