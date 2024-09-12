// Initialize AOS (Animate On Scroll) library
// AOS.init({
//   duration: 1000, // Animation duration in milliseconds
//   once: true, // Animation should happen only once - while scrolling down
// });

// Additional interactivity can be added here
const button = document.querySelectorAll("nav a");

button.forEach((item) => {
  item.addEventListener("click", () => {
    const sound = new Audio("sounds/click.mp3");
    sound.play();
  });
});


// Initialize AOS (Animate on Scroll)
AOS.init();

// Initialize Particles.js for background
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }},
    "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }},
    "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }},
    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }}
  },
  "interactivity": {
    "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
    "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 }}, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 }}
  },
  "retina_detect": true
});

// Dynamic Background Color Change
const animatedBackground = document.querySelector('.animated-background');
const colors = [
    'linear-gradient(130deg, #00c6ff, #0072ff)',
    'linear-gradient(130deg, #ff7e5f, #feb47b)',
    'linear-gradient(130deg, #ff6a00, #ee0979)',
    'linear-gradient(130deg, #8e2de2, #4a00e0)',
    'linear-gradient(130deg, #00f260, #0575e6)'
];

let colorIndex = 0;

function changeBackground() {
    colorIndex = (colorIndex + 1) % colors.length;
    animatedBackground.style.background = colors[colorIndex];
    animatedBackground.style.backgroundSize = '200% 200%'; // Makes animation smoother
}

// Change the background color every 5 seconds
setInterval(changeBackground, 5000);

// Ensure no conflicts with navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const target = this.getAttribute('href'); // Get the target ID
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to target
    });
});
