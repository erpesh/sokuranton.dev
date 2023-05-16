import justAnime from '../projects/images/just-anime.jpg';
import reactChess from "../projects/images/react-chess1.png";
import quizletClone1 from "../projects/images/quizlet-clone1.jpg";
import sokurAppointment from "../projects/images/sokur-appointment1.jpg";

export type Technology = "React" | "Django" | "Vue" | "Typescript" | "Next.js" | "PHP" | "Node.js" | "PostgreSQL" | "Firebase" | "C#" | "Supabase" | "Stripe";

export interface Project {
  image: string
  title: string
  githubLink: string
  link?: string | undefined
  technologiesUsed: Technology[]
  description: string
  inProgress?: boolean | undefined
}

const data : Project[] = [
  {
    image: sokurAppointment,
    title: "Sokur Appointment",
    githubLink: "https://github.com/erpesh/sokur-appointment",
    link: "https://sokapp.vercel.app",
    technologiesUsed: ["Next.js", "Typescript", "Firebase", "Stripe"],
    description: "Description",
    inProgress: true
  },
  {
    image: quizletClone1,
    title: "Quizlet Clone",
    githubLink: "https://github.com/erpesh/quizlet-clone",
    link: "https://erpesh.github.io/quizlet-clone",
    technologiesUsed: ["React", "Typescript", "Firebase"],
    description: "Description"
  },
  {
    image: reactChess,
    title: "React Chess",
    githubLink: "https://github.com/erpesh/react-chess",
    technologiesUsed: ["React", "Typescript", "Node.js"],
    description: "Description"
  },
  {
    image: justAnime,
    title: "Just Anime",
    githubLink: "https://github.com/erpesh/just-anime",
    technologiesUsed: ["React", "Django"],
    description: "Description"
  },
]

export default data;