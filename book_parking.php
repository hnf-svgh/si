<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tempat_parkir_id = $_POST['tempat_parkir_id'];
    $pemesan = $_POST['pemesan'];

    // Update status tempat parkir
    $sql_update = "UPDATE tempat_parkir SET status='dipesan' WHERE id=$tempat_parkir_id";
    $sql_insert = "INSERT INTO pesanan (tempat_parkir_id, pemesan) VALUES ($tempat_parkir_id, '$pemesan')";

    if ($conn->query($sql_update) === TRUE && $conn->query($sql_insert) === TRUE) {
        echo "Tempat parkir berhasil dipesan!";
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
}
?>
