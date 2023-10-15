import { Project } from "./types";

export const projects: [Project] = [
  {
    title: "Personal collections app",
    description:
      "Collection app that lets create, update and delete collections of different items. There're 3 types of users. Anauthenticated users can only view collections. Authenticated users can control their collection while admin users can authorize other users, such as enabling/disabling other admins and blocking/unblocking users. The app also responds to different viewport sizes.",
    imgSrc: "/assets/screenshot-store.png",
    links: {
      production: "https://personal-collections-app.netlify.app/",
      srcCode: "https://github.com/BekzodIsakov/personal-collections-app",
      demo: "",
    },
  },
];
