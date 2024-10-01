// Toggle menu navigation button
      document.querySelector('.menu').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
  });

// smooth transition on gallery photos on slider buttons
document.querySelector('.slider-nav').addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
      e.preventDefault();
      const targetID = e.target.getAttribute('href');
      const targetSlide = document.querySelector(targetID);
      targetSlide.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
      });
  }
});

  // Language change event listener
document.getElementById('language-select').addEventListener('change', function() {
  const selectedLang = this.value;
  changeLanguage(selectedLang);
});