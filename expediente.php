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
$sql = "SELECT * FROM paciente WHERE idPaciente=$idPaciente";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$row_array['idPaciente'] = $row['idPaciente'];
   		$row_array['nombre'] = $row['nombre'];
   			$row_array['apodo'] = $row['apodo'];
        $row_array['fechaNacimiento'] = $row['fechaNacimiento'];
        	$row_array['sexo'] = $row['sexo'];
          	$row_array['ocupacion'] = $row['ocupacion'];
      	$row_array['email'] = $row['email'];
        	$row_array['telefono'] = $row['telefono'];
          	$row_array['estatura'] = $row['estatura'];
        	$row_array['peso'] = $row['peso'];
          	$row_array['pesoIdeal'] = $row['pesoIdeal'];
            	$row_array['pesoMeta'] = $row['pesoMeta'];
              	$row_array['ejercicioFisico'] = $row['ejercicioFisico'];
                	$row_array['tipoEjercicio'] = $row['tipoEjercicio'];
                  	$row_array['comidasDia'] = $row['comidasDia'];
                    	$row_array['frecuencia'] = $row['frecuencia'];
                      	$row_array['alimentosSi'] = $row['alimentosSi'];
                        	$row_array['alimentosNo'] = $row['alimentosNo'];
                	$row_array['veritest'] = $row['veritest'];
              	$row_array['bioquimicos'] = $row['bioquimicos'];
                	$row_array['prescripcionEjercicio'] = $row['prescripcionEjercicio'];
                  	$row_array['suplementos'] = $row['suplementos'];
                  	$row_array['medicamentos'] = $row['medicamentos'];
                    	$row_array['antecedentes'] = $row['antecedentes'];
                      	$row_array['tratamiento'] = $row['tratamiento'];
                        	$row_array['observaciones'] = $row['observaciones'];
    array_push($return_arr,$row_array);


    }
} else {
    echo "0 results";
}
$conn->close();


echo json_encode($return_arr);
  ?>
