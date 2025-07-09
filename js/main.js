// Toggle menu for responsive design
// Pastikan tombol menu memiliki kelas 'tombol' dan menu memiliki kelas 'menu'
  const toggleButton = document.querySelector('.tombol');
  const menu = document.querySelector('.menu');

  toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
  });




// Slider functionality
// Pastikan slider memiliki ID 'slider' dan setiap slide memiliki kelas 'slide'
let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth + 20; // Tambah gap
  const totalSlides = slides.length;

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  currentIndex = index;
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-slide
setInterval(() => {
  nextSlide();
}, 3000);

// Modal functionality for gallery images
// Menunggu hingga seluruh halaman dan elemennya siap
document.addEventListener('DOMContentLoaded', function () {

  // --- FUNGSI UNTUK NAVBAR RESPONSIVE ---
  const tombolMenu = document.querySelector('.tombol');
  const menu = document.querySelector('.menu');

  if (tombolMenu && menu) {
    tombolMenu.addEventListener('click', function () {
      menu.classList.toggle('aktif');
    });
  }
});

// Update footer with current year
let date = new Date();
let year = date.getFullYear();
let footer = document.querySelector('.footer-bottom p');
footer.innerHTML = `&copy; ${year} - All rights reserved`;