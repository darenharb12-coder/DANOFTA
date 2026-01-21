// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    const isOpen = nav.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a link (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

// Fade-in on scroll
const elements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

elements.forEach(el => observer.observe(el));

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reel thumbnail fallback (prevents broken image look)
document.querySelectorAll(".reel img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";
    img.closest(".reel")?.classList.add("no-thumb");
  });
});
document.querySelectorAll(".reel img").forEach(img => {
  img.addEventListener("error", () => {
    const card = img.closest(".reel");
    if (card) card.classList.add("no-thumb");
    img.remove(); // removes broken image icon
  });
});
