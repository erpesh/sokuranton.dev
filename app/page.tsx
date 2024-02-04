import {FaEnvelope, FaGithub, FaLinkedin, FaRegAddressCard, FaTelegramPlane} from 'react-icons/fa';
import ParticlesBackground from "../components/particles-background";
import {Metadata} from "next";
import {FiArrowRight} from "react-icons/all";
import Link from "next/link";
import CVButton from "../components/cv-button";

export const metadata: Metadata = {
  title: "Anton Sokur - Software Engineer Portfolio",
  description: "A skilled software engineer specializing in web development. Contact me for innovative and dynamic web solutions.",
  keywords: ["Anton Sokur", "Sokur", "Anton", "web developer", "Anton Sokur portfolio", "front-end development", "back-end development", "web development projects", "HTML", "CSS", "JavaScript", "React.js", "Next.js", "Software Engineer", "Software Engineering", "Student", "Anton Sokur contact"],
  authors: {
    name: "Anton Sokur"
  },
  robots: "index, follow"
}

const Page = () => {
  return (
    <div className={"page"}>
      <ParticlesBackground fullScreen/>
      <div className="content">
        <h1>Anton Sokur</h1>
        <span className={"sec-head"}>
          <span>Software Engineer,</span><span>Web Developer,</span><span>University Student</span>
        </span>
        <div className={"links-container gap-4 mt-4"}>
          <CVButton/>
          <a target="_blank" href="https://t.me/erpesh" rel="noopener noreferrer" aria-label={"Telegram"}>
            <FaTelegramPlane size={32}/>
          </a>
          <a target="_blank" href="https://github.com/erpesh" rel="noopener noreferrer" aria-label={"GitHub"}>
            <FaGithub size={32}/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/anton-sokur-200298224" rel="noopener noreferrer" aria-label={"LinkedIn"}>
            <FaLinkedin size={32}/>
          </a>
          <a target="_blank"
             href={"mailto:anton.sokur1@gmail.com?subject=Hello%20there&body=I%20found%20your%20website%20and..."} aria-label={"Email"}>
            <FaEnvelope size={32}/>
          </a>
        </div>
        <div className={"to-projects"}>
          <Link href={"/projects"}>My Projects <FiArrowRight size={26}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Page;