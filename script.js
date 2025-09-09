// Navigasi halaman 1 -> 2
document.getElementById("startBtn").addEventListener("click", function() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
});

// Form submit -> halaman 3
document.getElementById("savingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const wishlist = document.getElementById("wishlist").value.trim();
  const target = parseFloat(document.getElementById("target").value);
  const start = new Date(document.getElementById("start").value);
  const end = new Date(document.getElementById("end").value);

  if (!wishlist) { alert("Masukkan nama Wish List!"); return; }
  if (isNaN(target) || target <= 0) { alert("Masukkan target yang valid!"); return; }

  const days = Math.ceil((end - start)/(1000*3600*24));
  if (days <= 0) { alert("Tanggal selesai harus setelah tanggal mulai!"); return; }

  const perHari = target / days;
  const perMinggu = target / (days / 7);
  const perBulan = target / (days / 30);
  const perTahun = target / (days / 365);

  const formatRupiah = (num) => `Rp${Math.round(num).toLocaleString()}`;

  // Tampilkan hasil
  document.getElementById("wishlistResult").innerText = `✨ Wish List: ${wishlist}`;
  document.getElementById("intro").innerText = `Target: ${formatRupiah(target)} | Waktu Tempuh: ${days} hari`;
  document.getElementById("perHari").innerText = `➤ Per Hari: ${formatRupiah(perHari)}`;
  document.getElementById("perMinggu").innerText = `➤ Per Minggu: ${formatRupiah(perMinggu)}`;
  document.getElementById("perBulan").innerText = `➤ Per Bulan: ${formatRupiah(perBulan)}`;
  document.getElementById("perTahun").innerText = `➤ Per Tahun: ${formatRupiah(perTahun)}`;

  const quotes = [
    "Menabung itu investasi untuk masa depanmu.",
    "Sedikit demi sedikit lama-lama menjadi bukit.",
    "Tabungan hari ini adalah kebebasan finansial di masa depan.",
    "Disiplin menabung lebih berharga daripada penghasilan besar tanpa kontrol.",
    "Mimpi jadi nyata kalau kamu konsisten menabung."
  ];
  document.getElementById("quote").innerText = quotes[Math.floor(Math.random()*quotes.length)];

  // Navigasi halaman
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
});

// Tombol restart
document.getElementById("restartBtn").addEventListener("click", function() {
  // Reset form
  document.getElementById("savingForm").reset();
  // Kembali ke halaman 1
  document.getElementById("page3").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");
  document.getElementById("subjudul").style.display = "block";
});
