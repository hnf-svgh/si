<?php
include 'db.php'; // Menghubungkan dengan file koneksi

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mendapatkan data dari formulir
    $nomor_tempat_parkir = $_POST['nomor_tempat_parkir'];
    $nama = $_POST['nama'];
    $status = $_POST['status'];

    // Query untuk menambahkan data tempat parkir
    $sql = "INSERT INTO tempat_parkir (nomor_tempat_parkir, nama, status)
            VALUES ('$nomor_tempat_parkir', '$nama', '$status')";

    if ($conn->query($sql) === TRUE) {
        echo "Data tempat parkir berhasil ditambahkan.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}