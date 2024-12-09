// Select the butterfly element
const butterfly = document.querySelector('.fixed-element');

// Listen for scroll events
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const section1 = document.getElementById('section1').offsetTop;
    const section2 = document.getElementById('section2').offsetTop;
    const section3 = document.getElementById('section3').offsetTop;
    const section4 = document.getElementById('section4').offsetTop;
    const section5 = document.getElementById('section5').offsetTop;

    // Adjust butterfly position based on scroll position
    if (scrollPosition >= section1 && scrollPosition < section2) {
        // First section: Butterfly should be on the right side
        butterfly.style.left = '80%'; // Butterfly moves to the right
        butterfly.style.top = '32%'; // Butterfly starts falling
    } else if (scrollPosition >= section2 && scrollPosition < section3) {
        // Second section: Butterfly should be on the left side
        butterfly.style.left = '25%'; // Butterfly moves to the left
        butterfly.style.top = '40%'; // Butterfly falls gently
    } else if (scrollPosition >= section3 && scrollPosition < section4) {
        // Third section: Butterfly should be on the right side
        butterfly.style.left = '80%'; // Butterfly moves to the right again
        butterfly.style.top = '50%'; // Butterfly continues downwards
    } else if (scrollPosition >= section4 && scrollPosition < section5) {
        // Fourth section: Butterfly should be on the left side
        butterfly.style.left = '20%'; // Butterfly moves to the left in section 4
        butterfly.style.top = '35%'; // Butterfly continues downward
    } else if (scrollPosition >= section5) {
        // Fifth section: Butterfly should be centered
        butterfly.style.left = '55%'; // Butterfly moves to the center
        butterfly.style.top = '30%'; // Butterfly stays in the middle
    }
});
