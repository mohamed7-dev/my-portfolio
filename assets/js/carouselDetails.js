import { projects } from "./projects.js";

const byFeatured = (p) => !!p.featured;
const pickCarouselProjects = (ps) => {
  const feat = ps.filter(byFeatured);
  return (feat.length ? feat : ps).slice();
};
const clampIndex = (i, len) => ((i % len) + len) % len;
const nextIndex = (i, len) => clampIndex(i + 1, len);
const prevIndex = (i, len) => clampIndex(i - 1, len);

export function initCarouselAndDetails() {
  let current = 0;
  const imgEl = document.getElementById("project-image");
  const captionEl = document.getElementById("caption");
  const titleEl = document.getElementById("project-title");
  const descEl = document.getElementById("project-description");
  const tagsEl = document.getElementById("project-tags");
  const srcBtn = document.getElementById("project-source");
  const prevBtn = document.getElementById("project-preview");

  const carouselProjects = pickCarouselProjects(
    Array.isArray(projects) ? projects : []
  );
  const tagsToHTML = (tags = []) =>
    tags.map((t) => `<li class="tag">${t}</li>`).join("");

  function renderCarousel() {
    if (!imgEl || !captionEl) return;
    if (!carouselProjects.length) return;
    const p = carouselProjects[current];
    imgEl.src = p.image;
    imgEl.alt = p.title;
    captionEl.textContent = p.title;
  }

  function renderDetails() {
    if (!carouselProjects.length) return;
    const p = carouselProjects[current];
    if (titleEl) titleEl.textContent = p.title || "";
    if (descEl) descEl.textContent = p.description || "";
    if (tagsEl)
      tagsEl.innerHTML = tagsToHTML(Array.isArray(p.tags) ? p.tags : []);
    if (srcBtn) {
      if (p.source) {
        srcBtn.href = p.source;
        srcBtn.removeAttribute("hidden");
      } else {
        srcBtn.setAttribute("hidden", "");
        srcBtn.removeAttribute("href");
      }
    }
    if (prevBtn) {
      if (p.url) {
        prevBtn.href = p.url;
        prevBtn.removeAttribute("hidden");
      } else {
        prevBtn.setAttribute("hidden", "");
        prevBtn.removeAttribute("href");
      }
    }
  }

  function next() {
    current = nextIndex(current, carouselProjects.length);
    renderCarousel();
    renderDetails();
  }
  function prev() {
    current = prevIndex(current, carouselProjects.length);
    renderCarousel();
    renderDetails();
  }

  document.getElementById("next")?.addEventListener("click", next);
  document.getElementById("prev")?.addEventListener("click", prev);

  // Keyboard support
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  // Initial render
  renderCarousel();
  renderDetails();
}
