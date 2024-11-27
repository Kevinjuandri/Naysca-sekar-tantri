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

// Tanggal Jadian
const specialMoment = new Date('2024-07-29T18:34:00');

// Fungsi Mengupdate Timer
function updateElapsedTime() {
    const now = new Date();
    const diff = now - specialMoment;

    // Konversi Waktu
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update Konten HTML
    const timerDisplay = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
    document.getElementById('elapsed-time').textContent = timerDisplay;
}

// Panggil Fungsi Setiap Detik
setInterval(updateElapsedTime, 1000);

// Jalankan Fungsi Saat Pertama Kali
updateElapsedTime();

// Membuat observer untuk elemen dengan kelas .anim-scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const target = entry.target;

        // Jika elemen terlihat di viewport
        if (entry.isIntersecting) {
            target.classList.add('visible');
            target.classList.remove('hidden');

            // Tambahkan kelas .hidden pada elemen lain
            document.querySelectorAll('.anim-scroll').forEach(el => {
                if (el !== target) {
                    el.classList.add('hidden');
                }
            });
        } else {
            // Jika elemen tidak terlihat
            target.classList.remove('visible');
            target.classList.add('hidden');

            // Menampilkan kembali elemen lain
            document.querySelectorAll('.anim-scroll').forEach(el => {
                if (el !== target) {
                    el.classList.remove('hidden');
                }
            });
        }
    });
}, { threshold: 0.5 });  // Set threshold sesuai kebutuhan (50% elemen terlihat)

document.querySelectorAll('.anim-scroll').forEach(section => {
    observer.observe(section);
});


function toggleScroll() {
    const loveIcon = document.querySelector('.love-icon');
    loveIcon.classList.toggle('open');
}

const quotes = [
    "Every moment with you feels like a dream, Naysca.",
    "You are my favorite place to go when my mind searches for peace.",
    "In your eyes, I found my home, my haven, my everything.",
    "With you, every day feels like magic. Thank you for being my Naysca.",
    "I could search the whole world, but I’d still come back to you.",
    "You are not just my love story; you are my happy ending.",
    "Forever is not long enough when I am with you, Naysca.",
    "You make my world brighter with just your presence.",
    "Loving you is the easiest thing I’ve ever done.",
    "My heart beats only for you, my love, Naysca Sekar Tantri."
  ];  

    let quoteIndex = 0;
    setInterval(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        document.getElementById('quote-text').textContent = quotes[quoteIndex];
    }, 3000); // Ganti setiap 4 detik
