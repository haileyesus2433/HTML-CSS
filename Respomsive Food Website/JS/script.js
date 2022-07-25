// Mobile Navigation
const btnMobile = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnMobile.addEventListener("click", function () {
  headerEl.classList.toggle("open-nav");
});

//Smooth Navigation

const links = document.querySelectorAll("a:link");
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const intoView = document.querySelector(href);
      intoView.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("open-nav");
    }
  });
});

//sticky nav
const heroSection = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (ent) {
    const entries = ent[0];
    if (!entries.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (entries.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);
