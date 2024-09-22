
import gc from '../../assets/images/gc.jpg'
import tmb from '../../assets/images/tmb.jpg'
import lb from '../../assets/images/lb.png'
import retroscript from '../../assets/images/retroscript.jpg'
import tasteit from '../../assets/images/tasteit.jpg'
import ourhome from '../../assets/images/ourhome.jpg'
import infecnation from '../../assets/images/infectnation.jpg'
import passgenie from '../../assets/images/passgenie.png'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

export const portfolioLinks = [
    {
      imageSrc: passgenie,
      title: "PassGenie",
      techs: [['Go'], ['GitHub Actions CI/CD'], ['CLI'], ['Bash']],
      linkCode: 'https://github.com/yebrai/PassGenie',
      linkDemo: 'https://github.com/yebrai/PassGenie/releases',
      description: 'CLI tool built with Go for generating secure passwords. Configured GitHub Actions to automate binary builds and publish executables for Linux, macOS, and Windows.'
    },
    {
      imageSrc: lb,
      title: "Lectores Beta",
      techs: [['PHP'], ['Symfony'], ['Docker'], ['MYSQL'], ['Redis'], ['PHPunit']],
      linkCode: 'https://github.com/lectoresbeta/lectores-beta-api-core/blob/main/.etc/how-to/PROJECT_STRUCTURE.md',
      linkDemo: 'https://lectoresbeta.com/',
      description: 'Contributed to the Lectores Beta API, transforming it from a monolith to a modular monolith with hexagonal architecture and DDD principles, using PHPUnit for testing.'
    },
    {
      imageSrc: tmb,
      title: "The Movie Bulletin",
      techs: [['Typescript'], ['React'], ['NextJS'], ['Redux']],
      linkCode: 'https://github.com/yebrai/the-movie-bulletin',
      linkDemo: 'https://the-movie-bulletin.vercel.app/',
      description: 'Dynamic movie web platform with API integration for listings, SSR for performance, detailed filtering, and favorite movie functionality'
    },
    {
        imageSrc: tasteit,
        title: "Taste-it",
        techs: [['Javascript'], ['React'], ['NodeJS'], ['Express'], ['MongoDB']],
        linkCode: 'https://github.com/yebrai/tasteit-client',
        linkDemo: 'https://taste-it-app.netlify.app/',
        description: 'Dynamic e-commerce website facilitating the publication, buying, and selling of diverse products. It includes payment integration, social interaction features for users, and purchase registration'
      },
      {
        imageSrc: gc,
        title: "Google Translate Clone",
        techs: [['Typescript'], ['React'], ['Chat-gpt API'], ['React Testing-library']],
        linkCode: 'https://github.com/yebrai/google-translate-chatgpt',
        linkDemo: 'https://yebrai.github.io/google-translate-chatgpt/',
        description: 'Developed a user-friendly web application for text translation, utilizing the ChatGPT API. Implemented unit tests, custom hooks, and UseReducer for enhanced functionality and state management'
      },
    {
      imageSrc: ourhome,
        title: "Our Home",
        techs: [['Javascript'], ['Handlebars'], ['NodeJS'], ['Express'], ['MongoDB']],
        linkCode: 'https://github.com/yebrai/OurHome',
        linkDemo: 'https://ourhome.cyclic.app/',
        description: 'Secure SSR web application for real estate transactions, providing a platform for buying and selling properties. Implemented robust authentication mechanisms with multiple levels of security'
      },
      {
          imageSrc: retroscript,
          title: "Retroscript",
          techs: [['Typescript']],
          linkCode: 'https://github.com/yebrai/retroscript',
          linkDemo: 'https://yebrai.github.io/retroscript/',
          description: 'Developed game using TypeScript with DOM manipulation and OOP principles. Implemented player movements, skills, and boss stages to enhance user experience'
  
      },
    {
        imageSrc: infecnation,
        title: "Infecnation",
        techs: [['Javascript']],
        linkCode: 'https://github.com/yebrai/Infectnation',
        linkDemo: 'https://yebrai.github.io/Infectnation/',
        description: 'Developed optimized 2D game with canvas and JavaScript, featuring captivating intro, animations, movements, and sound effects. Implemented diverse skills and multiple endings to enhance user experience'
    },
    /*
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
    */
  ];

  export const iconsLink = [
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
      route: "mailto:ivanyebra@yebraidev.es",
      description: "Let´s talk!",
    }/*,
    {
      label: <ImProfile />,
      route: "https://drive.google.com/file/d/1K4K1C9jvJ2E0jnPilNqqqJdgCIDxaQJG/view?usp=share_link",
      description: "My Resume",
    },*/
  ];