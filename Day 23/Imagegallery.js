document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const fullImage = document.getElementById('fullImage');
  
    const lastViewedImage = localStorage.getItem('lastViewedImage');
    if (lastViewedImage) {
      fullImage.src = lastViewedImage;
      fullImage.style.display = 'block';
    }
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const src = this.src;
        fullImage.src = src;
        fullImage.style.display = 'block';
  
        localStorage.setItem('lastViewedImage', src);
      });
    });
  });
  