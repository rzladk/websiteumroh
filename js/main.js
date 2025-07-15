const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());




// Slider functionality
// Pastikan slider memiliki ID 'slider' dan setiap slide memiliki kelas 'slide'
// let currentIndex = 0;

// function showSlide(index) {
//   const slider = document.getElementById('slider');
//   const slides = document.querySelectorAll('.slide');
//   const slideWidth = slides[0].offsetWidth + 20; // Tambah gap
//   const totalSlides = slides.length;

//   if (index < 0) index = totalSlides - 1;
//   if (index >= totalSlides) index = 0;

//   currentIndex = index;
//   slider.style.transform = `translateX(-${slideWidth * index}px)`;
// }

// function nextSlide() {
//   showSlide(currentIndex + 1);
// }

// function prevSlide() {
//   showSlide(currentIndex - 1);
// }

// Auto-slide
// setInterval(() => {
//   nextSlide();
// }, 3000);

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

const checkScrollForAnimation = () => {

  let scrollY = this.window.scrollY || this.window.pageYOffset;
  let galleryItem = this.document.querySelectorAll('.gallery-item');
  if (scrollY >= 500) {
    galleryItem.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('slide-in')
      }, index * 400)
    });
    window.removeEventListener('scroll', checkScrollForAnimation);
  }
}
window.addEventListener('scroll', checkScrollForAnimation);
checkScrollForAnimation();


// load more functionality for gallery + modal
document.addEventListener("DOMContentLoaded", function () {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const galleryGrid = document.querySelector(".gallery-grid");
  const modal = document.getElementById("modal-gallery");
  const modalImg = document.getElementById("item-image");
  const closeModal = document.getElementById("close-modal");

  // Fungsi untuk membuka modal
  function openModal(src, alt) {
    modal.style.display = "block";
    modalImg.src = src;
    modalImg.alt = alt;
  }

  // Fungsi untuk pasang klik modal ke semua gambar
  function applyModalToImages() {
    const allImages = document.querySelectorAll(".gallery-item img");
    allImages.forEach(img => {
      img.onclick = () => openModal(img.src, img.alt);
    });
  }

  // Inisialisasi untuk gambar awal
  applyModalToImages();

  // Load more button klik
  if (loadMoreBtn && galleryGrid) {
    loadMoreBtn.addEventListener("click", function () {
      const newImages = [
        { src: "/images/medinah.jpg", alt: "Gallery Image 5" },
        { src: "/images/medinah.jpg", alt: "Gallery Image 6" },
        { src: "/images/mekkah.jpg", alt: "Gallery Image 7" },
        { src: "/images/madinah.jpg", alt: "Gallery Image 8" }
      ];

      newImages.forEach(imgData => {
        const div = document.createElement("div");
        div.className = "gallery-item slide-in";

        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;

        div.appendChild(img);
        galleryGrid.appendChild(div);
      });

      applyModalToImages(); // Tambahkan klik modal ke gambar baru
      loadMoreBtn.style.display = "none"; // Sembunyikan tombol
    });
  }

  // Tutup modal saat klik tombol Close
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Tutup modal saat klik di luar gambar
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});