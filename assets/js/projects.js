// Central projects registry (ES Module). Add/edit items here and the site will render dynamically.
// Each project supports: id, title, description, image, url, tags, featured.
// Image paths are relative to the site root.
export const projects = [
  {
    id: 'landing-page-ui',
    title: 'Landing Page UI',
    description: 'Modern, responsive hero and sections with glassmorphism.',
    image: 'assets/img/screenshot1.svg',
    url: '#', // live preview URL (optional)
    source: '#', // source code URL (optional)
    tags: ['UI', 'Responsive', 'Glassmorphism'],
    featured: true,
  },
  {
    id: 'dashboard-widgets',
    title: 'Dashboard Widgets',
    description: 'Interactive cards, charts, and a11y-first components.',
    image: 'assets/img/screenshot2.svg',
    url: '#',
    source: '#',
    tags: ['Widgets', 'Charts', 'Accessibility'],
    featured: true,
  },
  {
    id: 'design-system',
    title: 'Design System',
    description: 'Tokens, components, and themes for rapid delivery.',
    image: 'assets/img/screenshot3.svg',
    url: '#',
    source: '#',
    tags: ['Design Tokens', 'Components', 'Themes'],
    featured: true,
  },
];
