import {StaticImageData} from "next/image";
import {
  justAnimeImages,
  quicletCloneImages,
  reactChessImages,
  sentimentAnalysisImages,
  sokappImages,
  sokurantonDevImages
} from "@/projects/images";


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
    images: sokurantonDevImages,
    title: "sokuranton.dev",
    githubLink: "https://github.com/erpesh/sokuranton.dev",
    link: "https://www.sokuranton.dev",
    technologiesUsed: ["Next.js", "Typescript", "TailwindCSS"],
    description: "My personal portfolio website presents a collection of projects I have worked on. You can explore a diverse range of creative works that demonstrate my skills and expertise.",
  },
  {
    images: sokappImages,
    title: "Sokapp",
    githubLink: "https://github.com/erpesh/sokur-appointment",
    link: "https://sokapp.vercel.app",
    technologiesUsed: ["Next.js", "Typescript", "Firebase", "Stripe"],
    description: "Sokapp is a platform where teachers can sell lessons and users can book them. Discover a wide range of subjects, connect with teachers, and enhance your learning journey.",
  },
  {
    images: sentimentAnalysisImages,
    title: "SentimentAnalysis",
    githubLink: "https://github.com/erpesh/sentiment-analysis-next",
    link: "https://sentiment-analysis-next.vercel.app",
    technologiesUsed: ["Next.js", "Typescript", "Supabase"],
    description: "SentimentAnalysis is a powerful tool for product ratings, providing valuable insights into customer sentiments based on keywords managed by website administrators. Enhance products and improve user experiences with data-driven decision-making."
  },
  {
    images: quicletCloneImages,
    title: "Quizlet Clone",
    githubLink: "https://github.com/erpesh/quizlet-clone",
    link: "https://erpesh.github.io/quizlet-clone",
    technologiesUsed: ["React", "Typescript", "Firebase"],
    description: "QuizletClone is my pet project, inspired by Quizlet. It's a user-friendly platform designed for learning and studying with digital flashcards. Dive into a vast collection of educational content, create your own interactive flashcards, and test your knowledge with fun quizzes."
  },
  {
    images: reactChessImages,
    title: "React Chess",
    githubLink: "https://github.com/erpesh/react-chess",
    technologiesUsed: ["React", "Typescript", "Node.js"],
    description: "React Chess is an online multiplayer chess platform. Play against opponents worldwide, challenge friends, and enhance your skills through interactive gameplay."
  },
  {
    images: justAnimeImages,
    title: "JustAnime",
    githubLink: "https://github.com/erpesh/just-anime",
    technologiesUsed: ["React", "Python"],
    description: "JustAnime is a platform for anime fans, utilizing a public API to provide a wide range of anime titles, personalized lists, ratings, and reviews. It's the ideal destination to discover, track, and engage with the captivating world of anime."
  },
]

export default data;