var myapp = angular.module('myapp', ["ui.router"])
myapp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.when("", "/pacientes/lista");
  $urlRouterProvider.when("/", "/pacientes/lista");

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/contacts/list");

  $stateProvider
    .state('pacientes', {
        abstract: true,
        url: '/pacientes',
        templateUrl: 'contacts.html',
        controller: function($scope){
            $scope.contacts = [{ id:0, name: "Alice Smith", peso:50 }, { id:1, name: "Bob Hoppus", peso: 76 },{ id:2, name: "Sergio Hurtado", peso: 60}];
        },
        onEnter: function(){
          console.log("enter contacts");
        }

    })
    .state('pacientes.lista', {
        url: '/lista',
        // loaded into ui-view of parent's template
        templateUrl: 'contacts.list.html',
        onEnter: function(){
          console.log("enter contacts.list");
        }
    })
    .state('pacientes.expediente', {
        url: '/expediente/:id',
        // loaded into ui-view of parent's template
        templateUrl: 'contacts.detail.html',
        controller: function($scope, $stateParams){
          $scope.person = $scope.contacts[$stateParams.id];
          $scope.hola="hola";
        },
        onEnter: function(){
          console.log("enter contacts.detail");
        }
    })
    .state('pacientes.consulta', {
        url: '/consulta/:id',
        // loaded into ui-view of parent's template
        templateUrl: 'contacts.consult.html',
        controller: function($scope, $stateParams){
          $scope.person = $scope.contacts[$stateParams.id];
          $scope.hola="hola";
        },
        onEnter: function(){
          console.log("enter contacts.detail");
        }
    })
})
