"use client";

import {FaExternalLinkAlt, FaGithub, FaImages} from 'react-icons/fa';
import Image from "next/image";
import {Project} from "@/projects/data";
import TechnologyItem from "./technology-item";
import {RiToolsLine} from "react-icons/all";
import {useState} from "react";
import ModalImageViewer from "./modal-image-viewer";

const ProjectCard = ({project} : { project: Project }) => {

  const {
    images,
    title,
    githubLink,
    link,
    technologiesUsed,
    description,
    inProgress
  } = project;

  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const openImageViewer = () => images.length > 1 ? setImageViewerOpen(true) : {};
  const closeImageViewer = () => setImageViewerOpen(false);

  return (
    <div className={"card-container"}>
      <ModalImageViewer images={images} isOpen={imageViewerOpen} close={closeImageViewer}/>
      <div className={"relative card-image cursor-pointer"} onClick={openImageViewer}>
        <Image src={images[0]} alt={title} placeholder={"blur"}/>
        {images.length > 1 && <div className="absolute inset-0 flex items-end justify-end">
          <div className="bg-gray-800 p-2 rounded-full mr-2 mb-2">
            <FaImages className="text-white text-xl"/>
          </div>
        </div>}
      </div>
      <div className={"card-info-container"}>
        <div className={"card-head"}>
          <div className={"card-title"}>
            <p className={"card-name"}>{title}</p>
            {inProgress && <p className={"card-progress"}><RiToolsLine/> Dev Mode</p>}
          </div>
          <div className={"flex justify-between items-start gap-3 pt-1"}>
            {!!link && <a target="_blank" href={link} rel="noopener noreferrer" className={"card-link"} aria-label={"Website link"}>
              <FaExternalLinkAlt size={24}/>
            </a>}
            <a target="_blank" href={githubLink} rel="noopener noreferrer" className={"card-link"} aria-label={"GitHub"}>
              <FaGithub size={28}/>
            </a>
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