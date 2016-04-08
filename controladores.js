var myapp = angular.module('myapp');

myapp.controller('mainCtrl', function ($scope,$http) {
  $scope.contacts=[];
    $scope.search='';
      $scope.sortType='nombre';
  var request = $http({
  url: "selectPacientes.php",
  method: "POST",
  }).success(function(response) {
        console.log(response)
        for (var i = 0; i < response.length; i++) {
            console.log(response[i].idPaciente);
                    $scope.contacts.push({

                      idPaciente:response[i].idPaciente,
                      nombre: response[i].nombre,
                      peso: response[i].peso,
                      pesoIdeal: response[i].pesoIdeal,
                      pesoMeta: response[i].pesoMeta,
                      edad: response[i].edad,
                      nutri:response[i].nutri
                    });
}

})

$scope.eliminar=function(id){
  var r =  confirm("¿Seguro que desea eliminar paciente?");
if (r == true) {
              var request = $http({
                url: "eliminar.php",
                method: "POST",
                data:{
                  idPaciente: id
                }
            }).success(function(response) {

          history.go(0);


      });
} else {
    history.go(0);
}



}
});

myapp.controller('expCtrl', function($scope, $stateParams,$http){
$scope.person=[];
console.log($stateParams.id)
  var request = $http({
  url: "expediente.php",
  method: "POST",
  data: {
    idPaciente:$stateParams.id

  }
  }).success(function(response) {
        console.log(response)
    $scope.person.nombre=response[0].nombre;
    $scope.person.apodo=response[0].apodo;
    $scope.person.fechaNacimiento=response[0].fechaNacimiento;
    $scope.person.sexo=response[0].sexo;
    $scope.person.ocupacion=response[0].ocupacion;
    $scope.person.email=response[0].email;
    $scope.person.telefono=response[0].telefono;
    $scope.person.estatura=response[0].estatura;
    $scope.person.peso=response[0].peso;
    $scope.person.pesoIdeal=response[0].pesoIdeal;
    $scope.person.pesoMeta=response[0].pesoMeta;
    $scope.person.ejercicioFisico=response[0].ejercicioFisico;
    $scope.person.tipoEjercicio=response[0].ejercicioFisico;
    $scope.person.comidasDia=response[0].comidasDia;
    $scope.person.frecuencia=response[0].frecuencia;
    $scope.person.alimentosSi=response[0].alimentosSi;
    $scope.person.alimentosNo=response[0].alimentosNo;
    $scope.person.veritest=response[0].veritest;
    $scope.person.bioquimicos=response[0].bioquimicos;
    $scope.person.prescripcionEjercicio=response[0].prescripcionEjercicio
    $scope.person.suplementos=response[0].suplementos;
    $scope.person.medicamentos=response[0].medicamentos;
    $scope.person.antecedentes=response[0].antecedentes;
    $scope.person.tratamiento=response[0].tratamiento;
    $scope.person.observaciones=response[0].observaciones;
})

$scope.modificar=function(){

 var request = $http({
  url: "modificar.php",
  method: "POST",
  data: {
    idPaciente:$stateParams.id,
    nombre1:$scope.person.nombre,
    apodo1:$scope.person.apodo,
    fnacimiento1:$scope.person.fechaNacimiento,
    email1:$scope.person.email,
    tel1:$scope.person.telefono,
    genero1:$scope.person.sexo,
    ocupacion1: $scope.person.ocupacion,
    estatura1: $scope.person.estatura,
    peso1:$scope.person.peso,
    pesoId1:$scope.person.pesoIdeal,
    pesoMet1:$scope.person.pesoMeta,
    numComida1:$scope.person.comidasDia,
    frComida1:$scope.person.frecuencia,
    alimentoSi1:$scope.person.alimentosSi,
    alimentoNo1:$scope.person.alimentosNo,
    suplemento1:$scope.person.suplementos,
    medicamentoActual1:$scope.person.medicamentos,
    antecedente1:$scope.person.antecedentes,
    tratamiento1:$scope.person.tratamiento,
    observaciones1:$scope.person.observaciones,
    veritest1:$scope.person.veritest,
    bioquimicos1:$scope.person.bioquimicos,
    prescripcionEjercicio1:$scope.person.prescripcionEjercicio,
    nutri1:'Ana Cristina',
    ejFisico1:$scope.person.ejercicioFisico,
    tipoEjercicio1:$scope.person.tipoEjercicio

  }
}).success(function(response) {
alert(response);

});


}

});

myapp.controller('conCtrl', function($scope, $stateParams,$http){
  $scope.person = $scope.contacts[$stateParams.id];

  $scope.sortType='fecha';
  $scope.consultas=[];
  var request = $http({
  url: "consultasPrevias.php",
  method: "POST",
  data:{
    idPaciente:$stateParams.id
  }
}).success(function(response) {
  console.log(response);
  for (var i = 0; i < response.length; i++) {
                $scope.consultas.push({
                  fecha: response[i].fecha,
                  grasa: response[i].grasa,
                  dieta: response[i].dieta,
                  peso: response[i].peso,
                  calorimetria: response[i].calorimetria,
                  triscep: response[i].triscep,
                  biscep: response[i].biscep,
                  abdominal: response[i].abdominal,
                  suprailiaco: response[i].suprailiaco,
                  musculo: response[i].musculo,
                  cintura: response[i].cintura,
                  cadera: response[i].cadera

                });

}
$scope.quantity=$scope.consultas.length;
});

  $scope.enviar=function(){
    var date = new Date();
               var d = date.getDate();
               var m = date.getMonth();
               var y = date.getFullYear();
               var fecha = new Date(y, m, d);
    var request = $http({
    url: "registroConsulta.php",
    method: "POST",
    data: {
       peso:$scope.peso,
       grasa:$scope.grasa,
       calorimetria:$scope.calorimetria,
       triscep:$scope.triscep,
       biscep:$scope.biscep,
       abdominal:$scope.abdominal,
       suprailiaco:$scope.suprailiaco,
       musculo:$scope.musculo,
       cintura:$scope.cintura,
       cadera:$scope.cadera,
       dieta:$scope.dieta,
       date:fecha,
       idPaciente:$stateParams.id

    }
  }).success(function(response) {


     if(response.indexOf("exito") > -1){
       alert("Consulta registrado con exito")

       $scope.consultas.push({
         fecha: fecha,
         grasa: $scope.grasa,
         dieta: $scope.dieta,
         peso: $scope.peso,
         calorimetria: $scope.calorimetria,
         triscep: $scope.triscep,
         biscep: $scope.biscep,
         abdominal:$scope.abdominal,
         suprailiaco: $scope.suprailiaco,
         musculo: $scope.musculo,
         cintura: $scope.cintura,
         cadera: $scope.cadera

       });


     }else {
       alert(response);
     }
  });

  }

});

myapp.controller('regCtrl', function($scope, $stateParams,$http){
$scope.enviar=function(){

  var request = $http({
  url: "registro.php",
  method: "POST",
  data: {
     nombre1:$scope.nombre,
     apodo1:$scope.apodo,
     fnacimiento1:$scope.fnacimiento,
     email1:$scope.email,
     tel1:$scope.tel,
     genero1:$scope.genero,
     ocupacion1: $scope.ocupacion,
     estatura1: $scope.estatura,
     peso1:$scope.peso,
     pesoId1:$scope.pesoId,
     pesoMet1:$scope.pesoMet,
     numComida1:$scope.numComida,
     frComida1:$scope.frComida,
     alimentoSi1:$scope.alimentoSi,
     alimentoNo1:$scope.alimentoNo,
     suplemento1:$scope.suplemento,
     medicamentoActual1:$scope.medicamentoActual,
     antecedente1:$scope.antecedente,
     tratamiento1:$scope.tratamiento,
     observaciones1:$scope.observaciones,
     veritest1:$scope.veritest,
     bioquimicos1:$scope.bioquimicos,
     prescripcionEjercicio1:$scope.prescripcionEjercicio,
     nutri1:'Ana Cristina',
     ejFisico1:$scope.ejFisico,
     tipoEjercicio1:$scope.tipoEjercicio

  }
}).success(function(response) {


   if(response.indexOf("exito") > -1){
     alert("Paciente registrado con exito")
   }else {
     alert(response);
   }
   history.go(0);
});

}

});
