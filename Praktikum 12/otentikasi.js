function validateLogin() {
    // Mendapatkan nilai input dari form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Menentukan username dan password yang diizinkan
    var allowedUsername = "ahmad2017";
    var allowedPassword = "integrity";

    // Memeriksa apakah input sesuai dengan yang diizinkan
    if (username === allowedUsername && password === allowedPassword) {
    alert("Login Sukses");
    // Redirect ke halaman baru jika login sukses
    window.location.href = "loginSukses.html";
    } else {
    alert("Login Gagal. Cek kembali username dan password.");
}
}