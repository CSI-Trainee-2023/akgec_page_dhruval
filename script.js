window.addEventListener('scroll', function () {
    const parallax = document.getElementById('background');
    const scrollValue = window.scrollY;
    parallax.style.transform = `translateY(${scrollValue * 0.5}px)`; // Adjust the factor for desired parallax effect
});
