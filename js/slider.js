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
