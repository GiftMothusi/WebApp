import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fivver,
  eoh,
  nsg,
  up,
  tribus,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desktop Technician",
    company_name: "EOH",
    icon: eoh,
    iconBg: "#383E56",
    date: "Sept 2022 - still with company",
    points: [
      "Knowledge of installation and configuration of Transversal systems (BAS, LOGIS, PERSAL)",
      "Knowledge of government ICT architecture, usage of the inhouse learning management system in the flow of business, where necessary use SQL queries to make corrections to the data integrity on the system",
      "Understanding of government business flow, contracts with third parties, service level agreements to be undertaken as per contractual agreements",
      "Knowledge of working with the Active Directory, unlocking accounts, resetting user account passwords as well as disabling accounts that were no longer active",
      "Network LAN troubleshooting, where necessary patching is done on the network switches",
      "Knowledge of SharePoint ",
      "Optimizing employees desktops for better speed and processing power, installing SSDs as well as adding more RAM",
    ],
  },
  {
    title: "ICT Graduate Intern",
    company_name: "National School of Government",
    icon: nsg,
    iconBg: "#E6DEDD",
    date: "May 2021 - Sept 2022",
    points: [
      "Graphic Design concepts, designed National School of Government annual report posters/AMDIN workshop poster",
      "Adobe creative cloud experience, specifically with Adobe illustrator and Adobe Dreamweaver",
      "Helping with the strategic approach to the new design and implementation of the new National School of Government website",
      "Setting up Konica Minolta printers on the network and configuring employees printing passwords",
      "Configuring office telephone connections (LAN/VOIP)",
      "Working on migrating employee user mailboxes from Exchange to office 365",
      "Experienced in working National School of Government Switchboard (Business Connect)",
      "Knowledge of ICT security policies",
    ],
  },
  {
    title: "Web/Mobile Developer",
    company_name: "Freelancer",
    icon: fivver,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Nov 2020",
    points: [
      "Developing and maintaining web/mobile applications using Reactjs and React Native and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrate audio, video, and graphics into the site",
      "Quality-test and troubleshoot the website and/or its applications in various browsers",
      "Create and test apps for the website",
      "User Experience Design",
      "User Interface Design",
      "Attention to detail",
    ],
  },
  {
    title: "SQL Teaching Assistant",
    company_name: "University of Pretoria",
    icon: up,
    iconBg: "#383E56",
    date: "Jan 2019 - Jun 2019",
    points: [
      "Assisting students in labs with practical assignments",
      "Marking and recording of students class tests and practical assignments",
      "Weekly meetings to discuss objectives for the week",
      "Setting up students weekly assessments",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Tribus Digita",
    icon: tribus,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Nov 2018",
    points: [
      "Developing and maintaining web applications using Meteorjs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "User Experience Design",
      "User Interface Design",
      "Attention to detail",
      "Evaluating code to ensure it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems",
      "Determining user needs by analyzing technical requirements",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
