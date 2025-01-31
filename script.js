document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});


const section = document.querySelector('.guestbook-section');
window.addEventListener('scroll', () => {
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.2;
  if (sectionTop < triggerPoint) {
    section.classList.add('visible');
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));
});
