<?php
$servername = "localhost";
$username = "root";
$password = "v239ecoif";
$dbname = "laviafit";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$return_arr = array();
$sql = "SELECT idPaciente, nombre, peso, pesoIdeal, pesoMeta,nutri,
    DATE_FORMAT(
        FROM_DAYS(DATEDIFF(CURRENT_DATE, fechaNacimiento)),
        '%y'
    ) AS edad
  FROM  paciente";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      $row_array['idPaciente'] = $row['idPaciente'];
   		$row_array['nombre'] = $row['nombre'];
   		$row_array['peso'] = $row['peso'];
   		$row_array['pesoIdeal'] = $row['pesoIdeal'];
   		$row_array['pesoMeta'] = $row['pesoMeta'];
      $row_array['edad'] = $row['edad'];
        $row_array['nutri'] = $row['nutri'];
    array_push($return_arr,$row_array);


    }
} else {
    echo "0 results";
}
$conn->close();


echo json_encode($return_arr);

?>
