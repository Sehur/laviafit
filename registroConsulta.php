<?php
$servername = "localhost";
$username = "root";
$password = "v239ecoif";
$dbname = "laviafit";

$request = json_decode( file_get_contents('php://input') );

$peso= $request->peso;
$grasa= $request->grasa;
$calorimetria= $request->calorimetria;
$triscep= $request->triscep;
$biscep= $request->biscep;
$abdominal= $request->abdominal;
$suprailiaco= $request->suprailiaco;
$musculo= $request->musculo;
$cintura= $request->cintura;
$cadera= $request->cadera;
$dieta= $request->dieta;
$date= $request->date;
$idPaciente=$request->idPaciente;




$conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  echo "Connected successfully";

  //Sending form data to sql db.
  $sql = "INSERT INTO consulta (idConsulta, peso, grasa, calorimetria, triscep, biscep, abdominal, suprailiaco, musculo, cintura, cadera, dieta, fecha,idPaciente) VALUES ('','$peso','$grasa','$calorimetria','$triscep','$biscep','$abdominal','$suprailiaco','$musculo','$cintura','$cadera','$dieta','$date','$idPaciente')  ";

  if ($conn->query($sql) === TRUE) {
      echo "Paciente registrado con exito";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  ?>
