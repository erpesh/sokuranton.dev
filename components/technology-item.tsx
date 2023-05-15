import { FaReact } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import {IconType} from "react-icons";

const technologies = {
  "React" : {
    icon: FaReact,
    color: "rgb(144, 205, 244)",
    backgroundColor: "bg-blue-600",
  },
  "Django": {
    icon: SiDjango,
    color: "rgb(0, 191, 255)",
    backgroundColor: "bg-gray-800",
  },
  "Vue": {
    icon: FaVuejs,
    color: "rgb(39,121,86)",
    backgroundColor: "bg-green-400",
  },
  "Typescript": {
    icon: SiTypescript,
    color: "rgb(0, 122, 204)",
    backgroundColor: "bg-gray-900",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "rgb(226, 232, 240)",
    backgroundColor: "bg-gray-800",
  },
  "PHP": {
    icon: FaPhp,
    color: "rgb(79, 93, 149)",
    backgroundColor: "bg-purple-300",
    size: 24,
  }
};

interface Props {
  tech: string
}

const TechnologyItem = ({tech} : Props) => {

  const technology = technologies[tech];
  const TechnologyIcon = technology.icon as IconType;

  return (
    <span className={"tech-item " + technology.backgroundColor} style={{color: technology.color}}>
      <TechnologyIcon size={technology.size ?? 16}/>
      <span>{tech}</span>
    </span>
  );
};

export default TechnologyItem;