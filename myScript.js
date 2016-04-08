var myapp = angular.module('myapp', ["ui.router"])
myapp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.when("", "/pacientes/lista");
  $urlRouterProvider.when("/", "/pacientes/lista");

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/pacientes/lista");

  $stateProvider
    .state('pacientes', {
        abstract: true,
        url: '/pacientes',
        templateUrl: 'contacts.html',
        controller: 'mainCtrl'

    })
    .state('pacientes.lista', {
        url: '/lista',
        // loaded into ui-view of parent's template
        templateUrl: 'contacts.list.html',

    })
    .state('pacientes.expediente', {
        url: '/expediente/:id',
        // loaded into ui-view of parent's template
        templateUrl: 'contacts.detail.html',
        controller: 'expCtrl'

    })
    .state('pacientes.consulta', {
        url: '/consulta/:id',
        // loaded into ui-view of parent's template
        templateUrl: 'contacts.consult.html',
        controller: 'conCtrl'

    })
    .state('pacientes.registro', {
        url: '/registro',
        // loaded into ui-view of parent's template
        templateUrl: 'contacts.registro.html',
        controller: 'regCtrl'

    })



})
