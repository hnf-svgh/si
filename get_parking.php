<?php
include 'db.php';

$sql = "SELECT * FROM tempat_parkir";
$result = $conn->query($sql);

$spots = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $spots[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($spots);

$conn->close();
?>
