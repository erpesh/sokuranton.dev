import {FaEnvelope, FaGithub, FaLinkedin, FaTelegramPlane} from 'react-icons/fa';
import ParticlesBackground from "../components/particles-background";
import {Metadata} from "next";
import {FiArrowRight} from "react-icons/all";
import Link from "next/link";
import {Links} from "@/components/links";

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
        <Links/>
        <div className={"to-projects"}>
          <Link href={"/projects"}>My Projects <FiArrowRight size={26}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Page;