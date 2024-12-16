function bookParkingSpot() {
    const spotId = document.getElementById("bookSpotId").value;
    const pemesan = "hanif"; // Ganti dengan nama pemesan sebenarnya

    fetch("book_parking.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `tempat_parkir_id=${spotId}&pemesan=${pemesan}`
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error("Error:", error));
}
