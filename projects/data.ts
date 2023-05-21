import justAnime from '../projects/images/just-anime.jpg';
import reactChess from "../projects/images/react-chess1.png";
import quizletClone1 from "../projects/images/quizlet-clone1.png";
import quizletClone2 from "../projects/images/quizlet-clone2.png";
import quizletClone3 from "../projects/images/quizlet-clone3.png";
import quizletClone4 from "../projects/images/quizlet-clone4.png";
import quizletClone5 from "../projects/images/quizlet-clone5.png";
import quizletClone6 from "../projects/images/quizlet-clone6.png";
import quizletClone7 from "../projects/images/quizlet-clone7.png";
import sokapp1 from "../projects/images/sokapp1.png";
import sokapp2 from "../projects/images/sokapp2.png";
import sokapp3 from "../projects/images/sokapp3.png";



export type Technology = "React" | "Python" | "Vue" | "Typescript" | "Next.js" | "PHP" | "Node.js" | "Firebase" | "Supabase" | "Stripe";

export interface Project {
  images: string[]
  title: string
  githubLink: string
  link?: string | undefined
  technologiesUsed: Technology[]
  description: string
  inProgress?: boolean | undefined
}

const data : Project[] = [
  {
    images: [sokapp1, sokapp2, sokapp3],
    title: "SOKAPP",
    githubLink: "https://github.com/erpesh/sokur-appointment",
    link: "https://sokapp.vercel.app",
    technologiesUsed: ["Next.js", "Typescript", "Firebase", "Stripe"],
    description: "Description",
    inProgress: true
  },
  {
    images: [quizletClone1, quizletClone2, quizletClone3, quizletClone4, quizletClone5, quizletClone6, quizletClone7],
    title: "Quizlet Clone",
    githubLink: "https://github.com/erpesh/quizlet-clone",
    link: "https://erpesh.github.io/quizlet-clone",
    technologiesUsed: ["React", "Typescript", "Firebase"],
    description: "Description"
  },
  {
    images: [reactChess],
    title: "React Chess",
    githubLink: "https://github.com/erpesh/react-chess",
    technologiesUsed: ["React", "Typescript", "Node.js"],
    description: "Description"
  },
  {
    images: [justAnime],
    title: "JustAnime",
    githubLink: "https://github.com/erpesh/just-anime",
    technologiesUsed: ["React", "Python"],
    description: "Description"
  },
]

export default data;