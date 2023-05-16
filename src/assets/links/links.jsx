
import gc from '../../assets/images/gc.jpg'
import tmb from '../../assets/images/tmb.jpg'
import retroscript from '../../assets/images/retroscript.jpg'
import tasteit from '../../assets/images/tasteit.jpg'
import ourhome from '../../assets/images/ourhome.jpg'
import infecnation from '../../assets/images/infectnation.jpg'
import flappy from '../../assets/images/flappy.jpg'
import alleawey from '../../assets/images/alleawey.jpg'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { ImProfile } from "react-icons/im";

export const portfolioLinks = [
  {
    imageSrc: gc,
    title: "Google Translate Clone",
    techs: [['Typescript'], ['React'], ['Chat-gpt API'], ['React Testing-library']],
    linkCode: 'https://github.com/yebrai/google-translate-chatgpt',
    linkDemo: 'https://yebrai.github.io/google-translate-chatgpt/'
  },
    {
      imageSrc: tmb,
      title: "The Movie Bulletin",
      techs: [['Typescript'], ['React'], ['NextJS'], ['Redux']],
      linkCode: 'https://github.com/yebrai/the-movie-bulletin',
      linkDemo: 'https://the-movie-bulletin.vercel.app/'
    },
    {
        imageSrc: tasteit,
        title: "Taste-it",
        techs: [['Javascript'], ['React'], ['NodeJS'], ['Express'], ['MongoDB']],
        linkCode: 'https://github.com/yebrai/tasteit-client',
        linkDemo: 'https://taste-it-app.netlify.app/',
    },
    {
        imageSrc: retroscript,
        title: "Retroscript",
        techs: [['Typescript']],
        linkCode: 'https://github.com/yebrai/retroscript',
        linkDemo: 'https://yebrai.github.io/retroscript/',
    },
    {
        imageSrc: ourhome,
        title: "Our Home",
        techs: [['Javascript'], ['Handlebars'], ['NodeJS'], ['Express'], ['MongoDB']],
        linkCode: 'https://github.com/yebrai/OurHome',
        linkDemo: 'https://ourhome.cyclic.app/',
    },
    {
        imageSrc: infecnation,
        title: "Infecnation",
        techs: [['Javascript']],
        linkCode: 'https://github.com/yebrai/Infectnation',
        linkDemo: 'https://yebrai.github.io/Infectnation/',
    },
    {
        imageSrc: flappy,
        title: "FlappyBird",
        techs: [['Javascript']],
        linkCode: 'https://github.com/yebrai/flappy-bird',
        linkDemo: 'https://yebrai.github.io/flappy-bird/',
    },
    {
        imageSrc: alleawey,
        title: "Alleawey",
        techs: [['Javascript']],
        linkCode: 'https://github.com/yebrai/Alleyway-Canvas',
        linkDemo: 'https://yebrai.github.io/Alleyway-Canvas/',
    },
  ];

  export const navbarLinks = [
    {
      label: <BsPersonCircle />,
      route: "https://wa.me/34692806198",
      description: "+34 692806198",
    },
    {
      label: <AiFillGithub />,
      route: "https://github.com/yebrai",
      description: "Yebraidev",
    },
    {
      label: <AiFillLinkedin />,
      route: "https://www.linkedin.com/in/ivangarciayebra",
      description: "My Linkedin Profile",
    },
    {
      label: <MdEmail />,
      route: "mailto:yebraidev@gmail.com",
      description: "Let´s talk!",
    },
    {
      label: <ImProfile />,
      route: "https://drive.google.com/file/d/1K4K1C9jvJ2E0jnPilNqqqJdgCIDxaQJG/view?usp=share_link",
      description: "My Resume",
    },
  ];
