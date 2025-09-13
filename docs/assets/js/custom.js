document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if(target) {
        const topPos = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: topPos, behavior: "smooth" });
        history.pushState(null,null,this.getAttribute("href"));
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

  // Copy code functionality
  document.querySelectorAll("pre").forEach(block => {
    const wrapper = document.createElement("div");
    wrapper.className = "code-block";
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.innerHTML = 'Copier';
    wrapper.appendChild(copyButton);

    copyButton.addEventListener("click", () => {
      const code = block.querySelector("code")?.innerText;
      if(!code) return;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.innerHTML = 'Copié!';
        copyButton.classList.add("copied");
        setTimeout(() => {
          copyButton.innerHTML = 'Copier';
          copyButton.classList.remove("copied");
        }, 2000);
      });
    });
  });
});
