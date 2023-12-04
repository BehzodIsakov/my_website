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
  },
];

export const technologies: string[] = [
  "HTML5",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "React-query",
  "Git/Github",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Redux/Toolkit",
];

export const skills: string[] = [
  "Responsive design",
  "Cross-Browser Compatibility",
  "Version Control",
  "Testing and Debugging",
  "Web Performance",
  "Soft skills",
];
