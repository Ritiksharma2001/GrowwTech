window.addEventListener('load', function () {
    // Wait for 2 seconds after loading the page
    setTimeout(function () {
      const loader = document.getElementById('loader');
      loader.classList.add('hidden'); // Add hidden class for fade-out effect
  
      // Show main content after loader disappears
      document.getElementById('content').style.display = 'block';
    }, 3000); // 2 seconds delay
  });
  


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('open');
});

let currentIndex = 0;

function slideServices(direction) {
    const slider = document.querySelector('.service-columns');
    const totalServices = document.querySelectorAll('.column').length;
    const visibleServices = 4; // Number of services visible at once
    const maxIndex = totalServices - visibleServices;

    // Update the index based on the direction
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    // Slide the columns by adjusting the transform property
    const translateX = -currentIndex * 25; // 25% for each column
    slider.style.transform = `translateX(${translateX}%)`;
}

