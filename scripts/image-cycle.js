document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.image-carrousel');
    const images = document.querySelectorAll('.image-gallery');
    let currentIndex = 0;
    const scrollInterval = 1500; 
    const waitInterval = 1000; 

    function scrollCarousel() {
        const scrollAmount = currentIndex * images[0].clientWidth;
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
            setTimeout(scrollCarousel, waitInterval);
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(scrollCarousel, scrollInterval);
    }

    setTimeout(scrollCarousel, scrollInterval);
});
