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
      title: 'Radu Burziņš',
      description:
        'Vietne kur radi var satikties digitāli un plānot savus pasākumus.',
      tech: ['React', 'Laravel', 'Tailwind CSS', 'REST API', 'Filament', 'Javascript', 'MySQL'],
      accent: '#474448',
      links: {},
    },
    {
      title: 'Mystery Meal',
      description:
        'Atrodi sev vakariņas, borkastis, pusdienas no tā kas tev ir ledusskapī.',
      tech: ['Laravel', 'Tailwind CSS'],
      accent: '#725ed3',
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Flight Radar',
      description:
        'Apsakti kādas lidmašīnas tev lido virs galvas.',
      tech: ['Laravel', 'REST API'],
      accent: '#7bc950',
      links: { demo: '#', code: '#' },
    },
    {
      title: 'Drīz beigsies!',
      description:
        'Liec sev atcerēties kad tev kaut kas beigsies, piemēram netflixa abonoments.',
      tech: ['Laravel', 'MySQL'],
      accent: '#ff8c42',
      links: { demo: '#', code: '#' },
    },
    {
      title: 'IT Help',
      description:
        'Jautā palīdzību tehnisko kādā skolā vai uzņēmumā, lai tev varētu palīdzēt kāds IT speciālists.',
      tech: ['React', 'Laravel', 'MySQL'],
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
