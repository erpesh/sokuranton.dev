import justAnime1 from '../projects/images/just-anime1.png';
import justAnime2 from '../projects/images/just-anime2.png';
import justAnime3 from '../projects/images/just-anime3.png';
import justAnime4 from '../projects/images/just-anime4.png';
import justAnime5 from '../projects/images/just-anime5.png';
import reactChess from "../projects/images/react-chess1.png";
import quizletClone1 from "../projects/images/quizlet-clone1.png";
import quizletClone2 from "../projects/images/quizlet-clone2.png";
import quizletClone3 from "../projects/images/quizlet-clone3.png";
import quizletClone4 from "../projects/images/quizlet-clone4.png";
import quizletClone5 from "../projects/images/quizlet-clone5.png";
import quizletClone6 from "../projects/images/quizlet-clone6.png";
import quizletClone7 from "../projects/images/quizlet-clone7.png";
import sentimentAnalysis1 from "../projects/images/sentiment-analysis1.png";
import sentimentAnalysis2 from "../projects/images/sentiment-analysis2.png";
import sentimentAnalysis3 from "../projects/images/sentiment-analysis3.png";
import sokapp1 from "../projects/images/sokapp1.png";
import sokapp2 from "../projects/images/sokapp2.png";
import sokapp3 from "../projects/images/sokapp3.png";
import sokurantonDev1 from "../projects/images/sokuranton.dev1.png";
import sokurantonDev2 from "../projects/images/sokuranton.dev2.png";
import {StaticImageData} from "next/image";


export type Technology = "React" | "Python" | "Vue" | "Typescript" | "Next.js" | "PHP" | "Node.js" | "Firebase" | "Supabase" | "Stripe" | "TailwindCSS";

export interface Project {
  images: StaticImageData[]
  title: string
  githubLink: string
  link?: string | undefined
  technologiesUsed: Technology[]
  description: string
  inProgress?: boolean | undefined
}

const data : Project[] = [
  // {
  //   images: [sokurantonDev1, sokurantonDev2],
  //   title: "MH Telegram Bot",
  //   githubLink: "https://github.com/erpesh/mh-telegram-bot",
  //   technologiesUsed: ["Python"],
  //   description: "A Telegram bot that facilitates communication between users and administrators. Features include handling user questions, admin chats, and more."
  // },
  {
    images: [sokurantonDev1, sokurantonDev2],
    title: "sokuranton.dev",
    githubLink: "https://github.com/erpesh/sokuranton.dev",
    link: "https://www.sokuranton.dev",
    technologiesUsed: ["Next.js", "Typescript", "TailwindCSS"],
    description: "My personal portfolio website presents a collection of projects I have worked on. You can explore a diverse range of creative works that demonstrate my skills and expertise.",
  },
  {
    images: [sokapp1, sokapp2, sokapp3],
    title: "Sokapp",
    githubLink: "https://github.com/erpesh/sokur-appointment",
    link: "https://sokapp.vercel.app",
    technologiesUsed: ["Next.js", "Typescript", "Firebase", "Stripe"],
    description: "Sokapp is a platform where teachers can sell lessons and users can book them. Discover a wide range of subjects, connect with teachers, and enhance your learning journey.",
  },
  {
    images: [sentimentAnalysis1, sentimentAnalysis2, sentimentAnalysis3],
    title: "SentimentAnalysis",
    githubLink: "https://github.com/erpesh/sentiment-analysis-next",
    link: "https://sentiment-analysis-next.vercel.app",
    technologiesUsed: ["Next.js", "Typescript", "Supabase"],
    description: "SentimentAnalysis is a powerful tool for product ratings, providing valuable insights into customer sentiments based on keywords managed by website administrators. Enhance products and improve user experiences with data-driven decision-making."
  },
  {
    images: [quizletClone1, quizletClone2, quizletClone3, quizletClone4, quizletClone5, quizletClone6, quizletClone7],
    title: "Quizlet Clone",
    githubLink: "https://github.com/erpesh/quizlet-clone",
    link: "https://erpesh.github.io/quizlet-clone",
    technologiesUsed: ["React", "Typescript", "Firebase"],
    description: "QuizletClone is my pet project, inspired by Quizlet. It's a user-friendly platform designed for learning and studying with digital flashcards. Dive into a vast collection of educational content, create your own interactive flashcards, and test your knowledge with fun quizzes."
  },
  {
    images: [reactChess],
    title: "React Chess",
    githubLink: "https://github.com/erpesh/react-chess",
    technologiesUsed: ["React", "Typescript", "Node.js"],
    description: "React Chess is an online multiplayer chess platform. Play against opponents worldwide, challenge friends, and enhance your skills through interactive gameplay."
  },
  {
    images: [justAnime1, justAnime2, justAnime3, justAnime4, justAnime5],
    title: "JustAnime",
    githubLink: "https://github.com/erpesh/just-anime",
    technologiesUsed: ["React", "Python"],
    description: "JustAnime is a platform for anime fans, utilizing a public API to provide a wide range of anime titles, personalized lists, ratings, and reviews. It's the ideal destination to discover, track, and engage with the captivating world of anime."
  },
]

export default data;