document.documentElement.classList.add("js-enabled");
const revealElements = document.querySelectorAll(".reveal");

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
           myObserver.unobserve(entry.target);
        }
    });
});

revealElements.forEach((element) => {
    myObserver.observe(element);
});
