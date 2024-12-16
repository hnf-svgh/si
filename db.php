<?php
$host = 'localhost';  // Server database
$user = 'root';       // Username database
$password = '';       // Password database
$dbname = 'sistem_parkir'; // Nama database

// Membuat koneksi
$conn = new mysqli($host, $user, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
