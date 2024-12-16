let parkingSpots = JSON.parse(localStorage.getItem('parkingSpots')) || [];
let nextId = parkingSpots.length ? Math.max(...parkingSpots.map(spot => spot.id)) + 1 : 1;

function addParkingSpot() {
    // Mendapatkan nilai dari input
    const spotNumber = document.getElementById('spotNumber').value;
    const spotName = document.getElementById('spotName').value;

    // Validasi: Memastikan kolom tidak kosong
    if (!spotNumber || !spotName) {
        alert('Mohon isi semua kolom!');
        return;
    }

    // Kirim data ke server atau lakukan penyimpanan
    const parkingData = {
        number: spotNumber,
        name: spotName
    };

    console.log('Data Tempat Parkir:', parkingData);
}

function displayAvailableSpots() {
    const availableSpotsList = document.getElementById('availableSpots');
    availableSpotsList.innerHTML = '';
    parkingSpots.forEach(spot => {
        if (!spot.booked) {
            const li = document.createElement('li');
            li.textContent = `ID: ${spot.id}, Nomor: ${spot.number}`;
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => alert(`Tempat parkir ID ${spot.id} dipilih.`));
            availableSpotsList.appendChild(li);
        }
    });
}

function goToHome() {
    window.location.href = 'index.html';
}

// Menampilkan tempat parkir tersedia jika halaman terkait dimuat
if (document.getElementById('availableSpots')) {
    displayAvailableSpots();
}
