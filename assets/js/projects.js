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
    id: "my-tube-app",
    title: "MyTube",
    description:
      "MyTube is a full-stack video sharing platform built with modern web technologies, designed to provide a seamless video streaming experience with features like video uploads, comments, likes, and user subscriptions.",
    image: "assets/img/screenshots/mytube-screenshot.webp",
    url: "https://mytube-three-bay.vercel.app/",
    source: "https://github.com/mohamed7-dev/mytube.git",
    tags: [
      "Full-Stack",
      "Nextjs",
      "Reactjs",
      "Nodejs",
      "Shadcn",
      "Tailwindcss",
      "TRPC",
      "Tanstack Router",
    ],
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
