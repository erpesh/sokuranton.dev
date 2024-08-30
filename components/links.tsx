'use client'

import CVButton from "@/components/cv-button";
import {FaEnvelope, FaGithub, FaLinkedin, FaTelegramPlane} from "react-icons/fa";
import {Tooltip} from "react-tooltip";


export const Links = () => {
  return (
    <div className={"links-container gap-4 mt-4"}>
      <Tooltip id="buttons" />
      <CVButton/>
      <a
        target="_blank"
        href="https://github.com/erpesh"
        rel="noopener noreferrer"
        aria-label={"GitHub"}
        data-tooltip-id="buttons"
        data-tooltip-content="GitHub"
      >
        <FaGithub size={32}/>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/anton-sokur-200298224"
        rel="noopener noreferrer"
        aria-label={"LinkedIn"}
        data-tooltip-id="buttons"
        data-tooltip-content="LinkedIn"
      >
        <FaLinkedin size={32}/>
      </a>
      <a
        target="_blank"
        href={"mailto:anton.sokur1@gmail.com?subject=Hello%20there&body=I%20found%20your%20website%20and..."}
        aria-label={"Email"}
        data-tooltip-id="buttons"
        data-tooltip-content="Email"
      >
        <FaEnvelope size={32}/>
      </a>
    </div>
  )
}