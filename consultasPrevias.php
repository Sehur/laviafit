<?php
$servername = "localhost";
$username = "root";
$password = "v239ecoif";
$dbname = "laviafit";

$request = json_decode( file_get_contents('php://input') );
$idPaciente = $request->idPaciente;


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$return_arr = array();
$sql = "SELECT * FROM consulta where '$idPaciente' = idPaciente";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
   		$row_array['fecha'] = $row['fecha'];
   		$row_array['peso'] = $row['peso'];
   		$row_array['grasa'] = $row['grasa'];
   		$row_array['dieta'] = $row['dieta'];
      $row_array['calorimetria'] = $row['calorimetria'];
      $row_array['triscep'] = $row['triscep'];
      $row_array['biscep'] = $row['biscep'];
      $row_array['abdominal'] = $row['abdominal'];
      $row_array['suprailiaco'] = $row['suprailiaco'];
      $row_array['musculo'] = $row['musculo'];
      $row_array['cintura'] = $row['cintura'];
      $row_array['cadera'] = $row['cadera'];

    array_push($return_arr,$row_array);


    }
} else {
    echo "0 results";
}
$conn->close();


echo json_encode($return_arr, JSON_NUMERIC_CHECK);

?>
