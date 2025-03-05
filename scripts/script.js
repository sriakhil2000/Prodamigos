document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-up");
    const header = document.querySelector("header");

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    // Scroll behavior for hiding/showing header
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down - hide the header
            header.classList.add("hidden-header");
        } else {
            // Scrolling up - show the header
            header.classList.remove("hidden-header");
        }

        lastScrollTop = scrollTop;
    });

    // Event listener for the header enroll button
    document.querySelector('.apply-button').addEventListener('click', function () {
        // Open the link in a new tab
        window.open('https://forms.gle/Zk1HBVyx4YByy3Ue6', '_blank');
    });

    // Event listener for the hero section enroll button
    const enrollButton = document.querySelector('.hero-text .enroll-button');
    if (enrollButton) {
        enrollButton.addEventListener('click', function () {
            window.open('https://forms.gle/Zk1HBVyx4YByy3Ue6', '_blank');
        });
    }

    // Event listener for the "Book a Free Call" button
    const bookCallButton = document.querySelector('.book-call-button');
    if (bookCallButton) {
        bookCallButton.addEventListener('click', function () {
            window.open('https://calendly.com/sriakhil2000/30min', '_blank');
    });
}

});

function smoothScroll(target) {
    const start = window.scrollY;
    const end = target.offsetTop;
    const duration = 1000; // Time in ms

    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, end - start, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        smoothScroll(target);
    });
});

document.getElementById('explore-course-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    smoothScroll(target);
});
