import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';
import Image from "next/image";
import {Project} from "../projects/data";
import TechnologyItem from "./technology-item";
import {RiToolsLine} from "react-icons/all";

const ProjectCard = ({project} : { project: Project }) => {

  const {
    image,
    title,
    githubLink,
    link,
    technologiesUsed,
    description,
    inProgress
  } = project;

  return (
    <div className={"card-container"}>
      <div className={"card-image"}>
        <Image src={image} alt={title}/>
      </div>
      <div className={"card-info-container"}>
        <div className={"card-head"}>
          <div className={"card-title"}>
            <p className={"card-name"}>{title}</p>
            {inProgress && <p className={"card-progress"}><RiToolsLine/> Dev Mode</p>}
          </div>
          <div className={"flex justify-between gap-3"}>
            <a target="_blank" href={githubLink} rel="noopener noreferrer" className={"card-link"}>
              <FaGithub size={28}/>
            </a>
            {!!link && <a target="_blank" href={link} rel="noopener noreferrer" className={"card-link"}>
              <FaExternalLinkAlt size={24}/>
            </a>}
          </div>
        </div>
        <div className={"card-tech"}>
          {technologiesUsed.map(item => <TechnologyItem key={item} tech={item}/>)}
        </div>
        <p className={"description"}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;