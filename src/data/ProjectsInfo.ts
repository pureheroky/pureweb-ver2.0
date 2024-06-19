import pr1 from "../images/pr1-min.png";
import pr2 from "../images/pr2-min.png";
import pr3 from "../images/pr3-min.png";
import pr4 from "../images/pr4-min.png";
import pr5 from "../images/pr5-min.png";
import pr6 from "../images/pr6-min.png";
import pr7 from "../images/pr7-min.jpg";

interface Project {
  name: string;
  githubLink: string;
  image: string;
  status: string;
  id: number;
  isComplete: boolean | null | undefined;
  date: string;
  description: string;
  websitelink: undefined | string;
}

const ProjectList: { [key: string]: Project } = {
  pr1: {
    name: "Sanita cleaning company",
    githubLink: "https://github.com/pureheroky/sanita-client-v2",
    image: pr1,
    status: "working",
    id: 1,
    isComplete: true,
    date: "24.12.2022",
    description:
      "Made by using Reactjs/tailwind css, server on nginx, hosted on beget.ru and advertised by direct.yandex.ru.\nWebsite has a minimalistic design with all important information for possible client with buttons for quickly navigate between fragments.",
    websitelink: "https://sanita-cleaning.ru",
  },
  pr2: {
    name: "pureheroky website",
    githubLink: "https://github.com/pureheroky/0xpure-website",
    image: pr2,
    status: "If you're on the site now,\n it's probably working",
    id: 2,
    isComplete: undefined,
    date: "23.09.2023",
    description:
      "A site written about me and my skills/projects\nit was written using React/tailwindcss/react spring",
    websitelink: "https://0xpure.com",
  },
  pr3: {
    name: "PURESERVER (Minecraft)",
    githubLink: "https://github.com/pureheroky/pureserver-plugin-mine",
    image: pr3,
    status: "in develop",
    id: 3,
    isComplete: undefined,
    date: "19.11.2023",
    description:
      "Minecraft plugin written using spigot. The plugin will be responsible for server logistics, etc. \n\nOnce completed, here will be the server address in the game",
    websitelink: undefined,
  },
  pr4: {
    name: "Telegram bot (Python)",
    githubLink: "https://github.com/pureheroky/tgpythonbot",
    image: pr4,
    status: "complete",
    id: 4,
    isComplete: null,
    date: "19.11.2023",
    description:
      "Telegram bot that showing my knowledge stack/projects/latest commits.\nUsed tools: Python and telegram-bot-api.\n\n\nP.S It is not yet known whether a server will be allocated for this bot.",
    websitelink: undefined,
  },
  pr5: {
    name: "Palomaresbook.ru",
    githubLink: "https://github.com/pureheroky/palomaresbooks/tree/master",
    image: pr5,
    status: "complete",
    id: 5,
    isComplete: null,
    date: "28.10.2023",
    description:
      "Website for one author from Russia.\nThe site is a page with books, clicking on which opens the page of the selected book. On the book page you can see its description, introductory chapter, and sometimes a trailer. There are also pages with support and contacts. ",
    websitelink: "https://palomaresbook.ru",
  },
  pr6: {
    name: "Telegram bot (golang)",
    githubLink: "https://github.com/pureheroky/tg-golang-bot",
    image: pr6,
    status: "complete",
    id: 6,
    isComplete: true,
    date: "21.12.2023",
    description: "Copy of telegram bot written on python... but on golang now.",
    websitelink: undefined,
  },
  pr7: {
    name: "Chat application (Reactjs/Electron)",
    githubLink: "https://github.com/pureheroky/chat-app-go",
    image: pr7,
    status: "in develop",
    id: 7,
    isComplete: undefined,
    date: "27.12.2023",
    description:
      "Chat application, built on Electron as the frontend of the application and golang on the backend.\nCan be used to send messages or photos, requiring login/registration.\none of my most ambitious projects\n\nP.S It is not yet known whether a server will be allocated for this app.",
    websitelink: undefined,
  },
};

export default ProjectList;
