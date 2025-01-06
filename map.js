// Inisialisasi peta
var map = L.map('leaflet-map').setView([-6.1751, 106.8650], 13); // Koordinat untuk Jakarta 

// Menambahkan peta dasar menggunakan OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Menambahkan marker pada lokasi
var marker = L.marker([-5.843441, 110.457631]).addTo(map); // lokasi tempat wisata
marker.bindPopup("<b>Pantai Karimun Jawa</b><br>Tempat wisata yang menakjubkan!").openPopup();

var marker2 = L.marker([-7.9364902, 112.9004496, 13]).addTo(map);
marker2.bindPopup("<b>Gunung Bromo</b><br>Destinasi hiking yang populer!");

var marker3 = L.marker([2.771934, 98.662231]).addTo(map);
marker3.bindPopup("<b>Danau Toba</b><br>Danau dengan keindahan yang memukau.");

var marker4 = L.marker([-8.356063, 116.030591]).addTo(map);
marker4.bindPopup("<b>Lombok</b><br>Destinasi snorkling yang populer!");

var marker5 = L.marker([-8.773828, 115.621046]).addTo(map);
marker5.bindPopup("<b>Nusa Penida</b><br>Keindahan di pulau bali!");

var marker6 = L.marker([-1.152172, 116.820838]).addTo(map);
marker6.bindPopup("<b>Hutan Lindung Sungai Wain</b><br>Keindahan Hutan Hujan Tropis!");

var marker7 = L.marker([-1.1316425, 130.4836644]).addTo(map);
marker7.bindPopup("<b>Raja Ampat</b><br>Keindahan Indonesia bagian timur");

// pemesanan tiket
document.getElementById("booking").addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan form dari submit standar

    // Ambil data dari formulir
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var tiket_type = document.getElementById("tiket_type").value;
    var jumlah = document.getElementById("jumlah").value;

    // Membuat pesan WhatsApp
    var pesan = `Halo, saya ingin memesan tiket!\n\nNama: ${nama}\nEmail: ${email}\nTipe Tiket: ${tiket_type}\nJumlah Tiket: ${jumlah}`;

    // Membuat URL untuk WhatsApp
    var url = `https://wa.me/6289637167168?text=${encodeURIComponent(pesan)}`;

    // Mengarahkan pengguna ke WhatsApp
    window.open(url, '_blank');
});