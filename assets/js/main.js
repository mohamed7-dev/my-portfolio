import { initSidebar } from "./sidebar.js";
import { initCarouselAndDetails } from "./carouselDetails.js";

document.addEventListener("DOMContentLoaded", () => {
  initSidebar();
  initCarouselAndDetails();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
