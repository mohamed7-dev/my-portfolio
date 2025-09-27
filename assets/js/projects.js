// Central projects registry (ES Module). Add/edit items here and the site will render dynamically.
// Each project supports: id, title, description, image, url, tags, featured.
// Image paths are relative to the site root.
export const projects = [
  {
    id: "snippetly-app",
    title: "Snippetly",
    description:
      "A modern full‑stack app to share, manage, and discover code snippets. Built with a TypeScript Node/Express API and a React + Vite client. ",
    image: "assets/img/screenshots/snippetly-screenshot.webp",
    url: "https://snippetly-eta.vercel.app/",
    source: "https://github.com/mohamed7-dev/snippetly.git",
    tags: ["Full-Stack", "TypeScript", "Node/Express", "React + Vite"],
    featured: true,
  },
  {
    id: "dashboard-widgets",
    title: "Dashboard Widgets",
    description: "Interactive cards, charts, and a11y-first components.",
    image: "assets/img/screenshot2.svg",
    url: "#",
    source: "#",
    tags: ["Widgets", "Charts", "Accessibility"],
    featured: true,
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Tokens, components, and themes for rapid delivery.",
    image: "assets/img/screenshot3.svg",
    url: "#",
    source: "#",
    tags: ["Design Tokens", "Components", "Themes"],
    featured: true,
  },
];
