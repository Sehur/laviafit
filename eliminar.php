<?php
$servername = "localhost";
$username = "root";
$password = "v239ecoif";
$dbname = "laviafit";

$request = json_decode( file_get_contents('php://input') );
$id = $request->idPaciente;


$conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

  //Sending form data to sql db.
  $sql = "DELETE FROM paciente WHERE idPaciente = '$id' ";

  if ($conn->query($sql) === TRUE) {
      echo "Record deleted successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  ?>


?>
