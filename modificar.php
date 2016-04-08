<?php
$servername = "localhost";
$username = "root";
$password = "v239ecoif";
$dbname = "laviafit";

$request = json_decode( file_get_contents('php://input') );
$nombre = $request->nombre1;
$apodo=$request->apodo1;
$fechaNacimiento=$request->fnacimiento1;
$email=$request->email1;
$telefono=$request->tel1;
$sexo=$request->genero1;
$ocupacion= $request->ocupacion1;
$estatura= $request->estatura1;
$peso= $request->peso1;
$pesoIdeal= $request->pesoId1;
$pesoMeta= $request->pesoMet1;
$comidasDia= $request->numComida1;
$frecuencia= $request->frComida1;
$alimentosSi= $request->alimentoSi1;
$alimentosNo= $request->alimentoNo1;
$suplementos= $request->suplemento1;
$medicamentos= $request->medicamentoActual1;
$antecedentes= $request->antecedente1;
$tratamiento= $request->tratamiento1;
$observaciones= $request->observaciones1;
$veritest=$request->veritest1;
$bioquimicos=$request->bioquimicos1;
$prescripcionEjercicio=$request->prescripcionEjercicio1;
$nutri=$request->nutri1;
$ejercicioFisico=$request->ejFisico1;
$tipoEjercicio=$request->tipoEjercicio1;
$id=$request->idPaciente;


$conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  echo "Connected successfully";

  //Sending form data to sql db.
  $sql = $sql="UPDATE paciente SET nombre='$nombre', apodo='$apodo', fechaNacimiento='$fechaNacimiento', email='$email', telefono='$telefono', sexo='$sexo',ocupacion='$ocupacion', estatura='$estatura', peso='$peso', pesoIdeal='$pesoIdeal', pesoMeta='$pesoMeta', comidasDia='$comidasDia', frecuencia='$frecuencia', alimentosSi='$alimentosSi', alimentosNo='$alimentosNo', suplementos='$suplementos', medicamentos ='$medicamentos', antecedentes= '$antecedentes', tratamiento='$tratamiento', observaciones='$observaciones', tipoEjercicio='$tipoEjercicio', veritest='$veritest', bioquimicos='$bioquimicos', prescripcionEjercicio='$prescripcionEjercicio' WHERE idPaciente='$id'";

  if ($conn->query($sql) === TRUE) {
      echo "Paciente actualizado con exito";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  ?>
