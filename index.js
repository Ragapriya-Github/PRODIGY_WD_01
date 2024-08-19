document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.indicators');

    let currentSlide = 0;

    function updateSlider() {
        const offset = -currentSlide * 100;
        slides.style.transform = `translateX(${offset}%)`;

        // Update indicators
        document.querySelectorAll('.indicators button').forEach((button, index) => {
            button.classList.toggle('active', index === currentSlide);
        });
    }

    function createIndicators() {
        for (let i = 0; i < slideCount; i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => {
                currentSlide = i;
                updateSlider();
            });
            indicatorsContainer.appendChild(button);
        }
        updateSlider(); // Initialize the slider and indicators
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slideCount - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide < slideCount - 1) ? currentSlide + 1 : 0;
        updateSlider();
    });

    createIndicators();

    // Testimonials functionality
    const testimonialsContainer = document.querySelector('.testimonial-container');
    const testimonialItems = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonialItems.length;
    let index = 0;
    const slideInterval = 5000; // Time for each slide (5 seconds)

    function showTestimonial(index) {
        if (index >= totalTestimonials) {
            index = 0; // Loop back to the first testimonial
        } else if (index < 0) {
            index = totalTestimonials - 1; // Loop back to the last testimonial
        }

        const offset = -index * 100; // Adjust for the width of each testimonial
        testimonialsContainer.style.transform = `translateX(${offset}%)`;
    }

    function startAutoSlide() {
        setInterval(() => {
            index = (index + 1) % totalTestimonials;
            showTestimonial(index);
        }, slideInterval); // Change testimonial every 5 seconds
    }

    if (testimonialsContainer && testimonialItems.length) {
        startAutoSlide(); // Start auto slide initially
    }
});
