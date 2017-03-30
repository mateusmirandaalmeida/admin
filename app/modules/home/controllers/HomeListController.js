define([], function() {

  HomeListController.$inject = ['$scope', 'HomeService', 'GumgaDateService'];

  function HomeListController($scope, HomeService, GumgaDateService) {

    GumgaDateService.setDefaultConfiguration({
        background: '#1abc9c',
        primaryColor: '#1abc9c',
        fontColor: '#fff',
        format: 'dd/MM/yyyy',
        minYear: 1905,
        timeZone: "America/Sao_Paulo",
        maxYear: 2050,
        position: 'BOTTOM_LEFT',
        changeDateOnTab: false,
        showCalendar: true,
        closeOnChange: true,
        inputProperties: {
          class: 'mateuszao form-control'
        }
    })

    $scope.config = {
        background: '#1abc9c',
        primaryColor: '#1abc9c',
        fontColor: '#fff',
        format: 'dd/MM/yyyy HH:mm',
        minYear: 1905,
        timeZone: "America/Sao_Paulo",
        maxYear: 2050,
        position: 'BOTTOM_LEFT',
        changeDateOnTab: false,
        showCalendar: true,
        closeOnChange: true,
        inputProperties: {
          class: 'mateuszao form-control'
        }
    };

  };
  return HomeListController;
});
