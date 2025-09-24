import { scrollLock } from "./scrollLock.js";

export function initSidebar() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!navToggle || !navLinks) return;

  // Toggle open/close
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    if (isOpen) scrollLock.lock();
    else scrollLock.unlock();
  });

  // Dismiss on background click or navigate on link click
  navLinks.addEventListener("click", (e) => {
    const link = e.target instanceof Element ? e.target.closest("a") : null;
    const isOpen = navLinks.classList.contains("open");

    if (isOpen && !link) {
      navLinks.classList.remove("open");
      scrollLock.unlock();
      navToggle.setAttribute("aria-expanded", "false");
      return;
    }
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const isHash = href.startsWith("#");

    if (isOpen) {
      navLinks.classList.remove("open");
      scrollLock.unlock();
      navToggle.setAttribute("aria-expanded", "false");

      if (isHash) {
        e.preventDefault();
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target)
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          else window.location.hash = href;
        }, 220);
      }
    }
  });
}
