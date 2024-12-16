const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./parking.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS parking_spots (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        spot_number TEXT NOT NULL,
        is_booked BOOLEAN NOT NULL DEFAULT 0
    )`);
});

const addParkingSpot = (spotNumber) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO parking_spots (spot_number) VALUES (?)', [spotNumber], function(err) {
            if (err) reject(err);
            resolve(this.lastID);
        });
    });
};

const getAvailableSpots = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM parking_spots WHERE is_booked = 0', [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const bookParkingSpot = (spotId) => {
    return new Promise((resolve, reject) => {
        db.run('UPDATE parking_spots SET is_booked = 1 WHERE id = ?', [spotId], function(err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

const deleteParkingSpot = (spotId) => {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM parking_spots WHERE id = ?', [spotId], function(err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

module.exports = {
    addParkingSpot,
    getAvailableSpots,
    bookParkingSpot,
    deleteParkingSpot
};