import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Personal collections app",
    description:
      "Collection app that lets create, update and delete collections of different items. There're 3 types of users. Anauthenticated users can only view collections. Authenticated users can control their collection while admin users can authorize other users, such as enabling/disabling other admins and blocking/unblocking users. The app also responds to different viewport sizes.",
    imgSrc: "/assets/screenshot-collection.png",
    links: {
      production: "https://personal-collections-app.netlify.app/",
      srcCode: "https://github.com/BekzodIsakov/personal-collections-app",
      demo: "",
    },
    stack: [
      "Fullstack",
      "React",
      "Chakra-UI",
      "Framer-motion",
      "i18next",
      "Axios",
      "Dark mode",
      "Markdown",
      "React-query",
      "Role based routing",
      "Express.js", 
      "Authentication",
      "AWS S3",
      "Mongoose", 
    ],
  },
  {
    title: "E-store",
    description:
      "This SPA has been bootstrapped with CRA and styled with Tailwind CSS. It contains a list of products of different categories which can be edited, deleted, created and filtered. The app also features pagination and a wildcard search.",
    imgSrc: "/assets/screenshot-store.png",
    links: {
      production: "https://bekzodisakov.github.io/product-list/",
      srcCode: "https://github.com/BekzodIsakov/product-list",
      demo: "https://www.youtube.com/watch?v=lnrNaOMfSTA&ab_channel=user",
    },
    stack: ["Pagination", "Responsive"],
  },
  {
    title: "Weather app",
    description:
      "A weather app that features geocoding search, auto locating current location and show current date for the different location, weather details and weather forecast for upcoming 7 days",
    imgSrc: "/assets/sc-weather.png",
    links: {
      production: "https://bekzodisakov.github.io/weather_app/",
      srcCode: "https://github.com/BekzodIsakov/weather_app",
      demo: "",
    },
    stack: ["React"],
  },
  {
    title: "Responsive grid",
    description:
      "A responsive grid testimonials section. Built as a challenge from frontendmentor.io",
    imgSrc: "/assets/screenshot-testimonials.png",
    links: {
      production: "https://friendly-biscotti-1635c5.netlify.app/",
      srcCode: "https://github.com/BekzodIsakov/frontendmentor/tree/main/testimonials-grid-section-main",
      demo: "",
    },
    stack: ["Responsive", "Sass", "BEM", "Accessibility", ],
  },
];

export const technologies: string[] = [
  "HTML/CSS",
  "Tailwind",
  "Typescript",
  "React/Next.js",
  "Git/Github",
  "Node.js/Express.js",
  "MongoDB/Mongoose",
  "Redux-toolkit",
  "React-Query",
];

export const skills: string[] = [
  "Responsive design",
  "Cross-Browser Compatibility",
  "Version Control",
  "Testing and Debugging",
  "Web Performance",
  "Soft skills",
];
