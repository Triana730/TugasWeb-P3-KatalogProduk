// ========================================
// SELVHOME
// JAVASCRIPT KATALOG FURNITURE
// ========================================


// ========================================
// FUNGSI TOMBOL BELI
// ========================================

function beliProduk(namaProduk) {

    alert(
        "Kamu memilih produk: " +
        namaProduk +
        "\n\nTerima kasih sudah memilih SelvHome!"
    );

}


// ========================================
// NAVBAR ACTIVE
// ========================================

// Mengambil semua link pada navbar
const navLinks = document.querySelectorAll(".nav-link");


// Menambahkan event pada setiap link
navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        // Menghapus active dari semua link
        navLinks.forEach(function(item) {

            item.classList.remove("active");

        });


        // Memberikan active pada link yang dipilih
        this.classList.add("active");

    });

});


// ========================================
// SAAT WEBSITE SELESAI DIMUAT
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    console.log(
        "SelvHome berhasil dijalankan!"
    );

    console.log(
        "Katalog furniture SelvHome siap digunakan."
    );

});