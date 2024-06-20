gsap.registerPlugin(ScrollTrigger);

function animateServiceCards() {
    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".vr-image",
            start: "top 80%",
            toggleActions: "play restart none none"
        },
        opacity: 0,
        y: 50,
        duration: 3,
    });
}

animateServiceCards();

gsap.from(".our-client-box", {
    scrollTrigger: {
        trigger: ".our-client-box",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2
});

gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

// Bounce animation for client logos
gsap.to(".our-client-box", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "bounce.out",
    repeat: -1,
    repeatDelay: 5,
    stagger: 0.2
});

gsap.from(".working-process-content", {
    scrollTrigger: {
        trigger: "#working-process",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

gsap.from("#about", {
    scrollTrigger: {
        trigger: ".heading-main",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});


window.addEventListener('scroll', function() {
    var upArrow = document.getElementById('upArrow');
    if (window.scrollY > 100) { // Adjust threshold as needed
        upArrow.style.display = 'block';
    } else {
        upArrow.style.display = 'none';
    }
});