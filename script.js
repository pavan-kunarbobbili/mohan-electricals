// Lightbox logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close');

// Add click event to all images with "clickable" class
document.querySelectorAll('.clickable').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

// Close lightbox
closeBtn.onclick = function () {
  lightbox.style.display = 'none';
}

// Also close lightbox if clicked outside the image
lightbox.onclick = function (e) {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
}
