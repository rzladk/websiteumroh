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
  let productItem = this.document.querySelectorAll('.product-item');
  let galleryItem = this.document.querySelectorAll('.gallery-item');
  
  if(scrollY >= 280){
    productItem.forEach((card, index) =>{
      setTimeout(()=>{
        card.classList.add('slide-in');
      }, index * 400)
    });
  }

  if(scrollY >= 500){
    galleryItem.forEach((card, index) => {
      setTimeout(()=>{
        card.classList.add('slide-in')
      }, index * 400)
    });
    window.removeEventListener('scroll', checkScrollForAnimation);
  }
}

window.addEventListener('scroll', checkScrollForAnimation);
checkScrollForAnimation();

// modal-gallery
let images = document.querySelectorAll('.gallery-item img');    
images.forEach(image => {
    image.addEventListener('click', function() {
        let modal = document.getElementById('modal-gallery');
        let itemImage = document.getElementById('item-image');
        itemImage.src = this.src;
        modal.style.display = 'block';
    });
});

// add event listener to close the modal
let modal = document.getElementById('modal-gallery');
let closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});
// Close the modal when clicking outside of the image
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
