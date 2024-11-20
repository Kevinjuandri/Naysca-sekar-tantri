document.addEventListener("DOMContentLoaded", () => {
    // Fungsi untuk membuat animasi huruf demi huruf
    function revealText(element) {
        const text = element.textContent;
        element.textContent = "";
        element.style.opacity = "1"; // Tampilkan elemen
        element.style.filter = "none"; // Hilangkan efek buram

        // Loop untuk menampilkan huruf satu per satu
        [...text].forEach((char, index) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.opacity = "0";
            span.style.transition = `opacity 0.1s ease ${index * 0.05}s`; // Delay tiap huruf
            element.appendChild(span);

            // Animasi tiap huruf
            setTimeout(() => {
                span.style.opacity = "1";
            }, index * 50); // Sesuaikan kecepatan
        });
    }

    // Ambil semua elemen dengan class .teks
    const teksElements = document.querySelectorAll(".teks");
    teksElements.forEach((teksElement) => {
        setTimeout(() => {
            revealText(teksElement);
        }, 500); // Delay untuk setiap elemen teks
    });
});

document.querySelectorAll(".our-image").forEach((img, index) => {
    img.style.setProperty("--i", index); // Menentukan posisi setiap gambar
});

document.querySelectorAll('.song').forEach(song => {
  song.addEventListener('click', () => {
    const audioPlayer = document.getElementById('audio');
    const songSrc = song.getAttribute('data-src');
    const allCDs = document.querySelectorAll('.cd');

    // Retract all CDs
    allCDs.forEach(cd => {
      cd.style.animation = 'retract 0.5s forwards'; // CD kembali ke tengah
      cd.querySelector('img').style.animationDuration = '0s'; // Hentikan putaran
    });

    // Update audio source and play
    audioPlayer.src = songSrc;
    audioPlayer.play();

    // Trigger CD animation for the selected song
    const cd = song.querySelector('.cd');
    cd.style.animation = 'enter 0.5s forwards, extend 0.5s 0.5s forwards'; // Gabungkan animasi masuk & keluar
    cd.querySelector('img').style.animationDuration = '2s'; // Mulai putaran CD
  });
});
