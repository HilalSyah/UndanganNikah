 // script.js

// Set the target date and time
const targetDate = new Date("2024-11-29T00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  } else {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "<h2>Time's Up!</h2>";
  }
}, 1000);

// script.js
// script.js
function copyToClipboard(accountNumber) {
  navigator.clipboard
    .writeText(accountNumber)
    .then(() => {
      alert("Nomor rekening berhasil disalin: " + accountNumber);
    })
    .catch((err) => {
      alert("Gagal menyalin teks. Error: " + err);
    });
}

const nameInput = document.getElementById("name");
const pesanInput = document.getElementById("pesan");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Mencegah form terkirim
  let isValid = true;

  // Cek input Name
  if (nameInput.value.trim() === "") {
    alert('Field "Name" harus diisi!');
    isValid = false;
  }

  // Cek input Pesan
  if (pesanInput.value.trim() === "") {
    alert('Field "Pesan" harus diisi!');
    isValid = false;
  }

  // Jika valid, tampilkan pesan sukses
  if (isValid) {
    alert("Form berhasil dikirim!");
    // Reset input (opsional)
    nameInput.value = "";
    pesanInput.value = "";
  }
});

function bukaMaps() {
  window.location.href =
    "https://www.google.com/maps/place/SMK+Raden+Umar+Said/@-6.7537803,110.8402658,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70db068724fae7:0x7610925ddad70c54!8m2!3d-6.7537856!4d110.8428407!16s%2Fg%2F1hm29l3ts?entry=ttu&g_ep=EgoyMDI0MTExOS4wIKXMDSoASAFQAw%3D%3D"; // Ganti URL sesuai kebutuhan
}

function galery() {
  window.location.href = "#page4";
}

function emailSend() {
  // Mengambil nilai dari form setelah disubmit
  var nama = document.getElementById("name").value;
  var pesan = document.getElementById("pesan").value;

  // Menyusun message body dengan format HTML
  var messageBody = "Name: " + nama + "<br/>" + "Pesan: " + pesan;

  // Mengirim email menggunakan ElasticEmail API
  Email.send({
    Host: "smtp.elasticemail.com", // SMTP Host
    Username: "hilal@gmail.com", // Username ElasticEmail
    Password: "1DD189E956DF626E107AD8F7F972AB90C204", // Password ElasticEmail
    To: "hilalsyah08@gmail.com", // Alamat tujuan email
    From: "hilal@gmail.com", // Alamat pengirim (harus yang valid di ElasticEmail)
    Subject: "Pesan dari Website", // Subjek email
    Body: messageBody, // Isi pesan email
  })
    .then((message) => {
      console.log(message); // Log untuk memeriksa status
      alert("Pesan berhasil dikirim!");
    })
    .catch((error) => {
      console.error("Error mengirim email:", error); // Menangani error jika terjadi
      alert("Terjadi kesalahan saat mengirim pesan.");
    });
}
