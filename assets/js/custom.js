document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll for internal anchors (ignore external and nav tabs)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const topPos = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: topPos, behavior: "smooth" });
        history.pushState(null, null, href);
      }
    });
  });

  // Fade-in sections
  const faders = document.querySelectorAll(".fade-section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });
  faders.forEach(f => observer.observe(f));

  // Back to top button
  const btn = document.createElement("button");
  btn.id = "backToTop";
  btn.title = "Haut de page";
  btn.innerHTML = "↑";
  document.body.appendChild(btn);
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "flex" : "none";
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});
