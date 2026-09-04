import raduburzins_picture from './assets/Raduburzins.png'
import flightradar_picture from './assets/FlightRadar.png'
import mysterymeal_picture from './assets/Mysterymeal.png'
import ithelp_picture from './assets/Ithelp.png'
import drizbeigsies_picture from './assets/Drizbeigsies.png'

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
      image: raduburzins_picture,
      links: { code: ['https://github.com/kkanelis/raduBurzins_front/tree/main',
                    'https://github.com/kkanelis/raduBurzins_back']},
    },
    {
      title: 'Mystery Meal',
      description:
        'Atrodi sev vakariņas, borkastis, pusdienas no tā kas tev ir ledusskapī.',
      tech: ['Laravel', 'Tailwind CSS'],
      accent: '#725ed3',
      image: mysterymeal_picture,
      links: { demo: '#', code: 'https://github.com/kkanelis/mysterymeal2' },
    },
    {
      title: 'Flight Radar',
      description:
        'Apsakti kādas lidmašīnas tev lido virs galvas.',
      tech: ['Laravel', 'REST API'],
      accent: '#7bc950',
      image: flightradar_picture,
      links: { demo: '#', code: 'https://github.com/kkanelis/FlightRadar' },
    },
    {
      title: 'Drīz beigsies!',
      description:
        'Liec sev atcerēties kad tev kaut kas beigsies, piemēram netflixa abonoments.',
      tech: ['Laravel', 'MySQL'],
      accent: '#ff8c42',
      image: drizbeigsies_picture,
      links: { demo: '#', code: 'https://github.com/kkanelis/krievins_drizbeigsies' },
    },
    {
      title: 'IT Help',
      description:
        'Jautā palīdzību tehnisko kādā skolā vai uzņēmumā, lai tev varētu palīdzēt kāds IT speciālists.',
      tech: ['React', 'Laravel', 'MySQL'],
      accent: '#4d9de0',
      image: ithelp_picture,
      links: { demo: '#', code: 'https://github.com/kkanelis/iesmins_ithelp' },
    },
  ],
}
