document.addEventListener("DOMContentLoaded", function() {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if(!target) return;
      const offset = 80;
      const topPos = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
      history.pushState(null, null, this.getAttribute("href"));
    });
  });

  // Fade-in animation
  document.querySelectorAll(".fade-section").forEach(f => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });
    observer.observe(f);
  });

  // Copy code functionality
  document.querySelectorAll("pre").forEach(block => {
    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    const btn = document.createElement("button");
    btn.className = "copy-button";
    btn.innerHTML = '<i class="fas fa-copy"></i> Copier';
    wrapper.appendChild(btn);

    btn.addEventListener("click", () => {
      const code = block.querySelector("code")?.innerText;
      if(!code) return;
      navigator.clipboard.writeText(code).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Copié!';
        btn.classList.add("copied");
        setTimeout(() => { btn.innerHTML = '<i class="fas fa-copy"></i> Copier'; btn.classList.remove("copied"); }, 2000);
      });
    });
  });

  // Card hover animation
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)";
      card.style.boxShadow = "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)";
    });
  });

  // Dark mode toggle
  const toggle = document.createElement("button");
  toggle.className = "dark-mode-toggle";
  toggle.style = `
    position:fixed; bottom:20px; right:20px; z-index:1000;
    width:50px; height:50px; border-radius:50%; border:none;
    background:var(--primary); color:white; cursor:pointer;
    box-shadow:0 4px 6px rgba(0,0,0,0.1);
  `;
  toggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.innerHTML = document.body.classList.contains("dark-mode") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });

  if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

});
