import { FaGithub, FaTelegramPlane, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ParticlesBackground from "../components/particles-background";

const Page = () => {
  return (
    <div className={"page"}>
      <ParticlesBackground/>
      <div className="content">
        <h1>Anton Sokur</h1>
        <span className={"sec-head"}>Software Engineer, Web Developer, University Student</span>
        <div className={"links-container"}>
          <a target="_blank" href="https://t.me/erpesh" rel="noopener noreferrer">
            <FaTelegramPlane size={32}/>
          </a>
          <a target="_blank" href="https://github.com/erpesh" rel="noopener noreferrer">
            <FaGithub size={32}/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/anton-sokur-200298224" rel="noopener noreferrer">
            <FaLinkedin size={32}/>
          </a>
          <a target="_blank" href={"mailto:anton.sokur1@gmail.com?subject=Hello%20there&body=I%20found%20your%20website%20and..."}>
            <FaEnvelope size={32}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;