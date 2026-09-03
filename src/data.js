export const profile = {
  name: 'Krists Kārlis Grundmanis',
  firstName: 'Krists Kārlis',
  role: 'role',
  bio: [
    "Mērķtiecīgs un atbildīgs cilvēks ar pieredzi dažādās darba jomās un interesi par IT un programmēšanu.",
    'Ātri apgūstu jaunas prasmes, spēju strādāt gan patstāvīgi, gan komandā un vienmēr cenšos sasniegt labāko rezultātu.',
  ],
  location: 'Sigulda, Latvija',
  email: 'kristskarlisgrundmanis@gmail.com',
  availability: 'Bezdarbnieks, mācos & gatavs strādāt',
  stats: [
    { value: '4+', label: 'Gadu pieredze' },
    { value: '10+', label: 'Projekti' },
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/kkanelis' },
    { name: 'Email', url: 'mailto:kristskarlisgrundmanis@gmail.com' },
  ],
  skills: {
    Frontend: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
    Backend: ['Node.js', 'MySQL', 'Laravel', 'REST', 'Javascript', 'Lua'],
    Tools: ['Git', 'Figma', 'Vitest',],
  },
  projects: [
    {
      title: 'Pulseboard',
      description:
        'Real-time analytics dashboard for dev teams. Streams events over WebSockets and renders custom charts at 60fps.',
      tech: ['React', 'Go', 'WebSockets'],
      accent: '#ff4d00',
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Snapnote',
      description:
        'Offline-first note-taking app with end-to-end encryption and instant search across thousands of documents.',
      tech: ['TypeScript', 'React', 'IndexedDB'],
      accent: '#ffc700',
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Greenlist',
      description:
        'A carbon-footprint tracker that turns everyday habits into a game. Used daily by 10k+ eco-conscious users.',
      tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
      accent: '#7bc950',
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Formless',
      description:
        'Headless form infrastructure that validates, transforms, and routes submissions with zero boilerplate.',
      tech: ['Node.js', 'GraphQL', 'Redis'],
      accent: '#ff8c42',
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Kite',
      description:
        'A lightweight design-system engine that generates themed, accessible components straight from JSON tokens.',
      tech: ['React', 'TypeScript', 'WCAG'],
      accent: '#4d9de0',
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Shipmate',
      description:
        'A CLI and dashboard for previewing deployments. Speeds up the review loop for 200+ engineering teams.',
      tech: ['Go', 'Docker', 'AWS'],
      accent: '#e8488a',
      links: { demo: '#', code: '#' },
    },
  ],
}
