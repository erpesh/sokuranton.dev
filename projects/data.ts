import justAnime from '../projects/images/just-anime.jpg';

export interface Project {
  image: string
  title: string
  githubLink: string
  link?: string | undefined
  technologiesUsed: string[]
  description: string
}

const data : Project[] = [
  {
    image: justAnime,
    title: "Just Anime",
    githubLink: "https://github.com/erpesh/just-anime",
    technologiesUsed: ["React", "Django", "Vue", "Typescript", "Next.js", "PHP"],
    description: "Description"
  },
  {
    image: justAnime,
    title: "Just Anime",
    githubLink: "https://github.com/erpesh/just-anime",
    technologiesUsed: ["React", "Django", "Vue", "Typescript", "Next.js", "PHP"],
    description: "Description"
  }
]

export default data;