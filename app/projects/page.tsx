import ParticlesBackground from "../../components/particles-background";
import ProjectCard from "../../components/project-card";
import data from "../../projects/data";

export const metadata = {
  title: "Projects | Anton Sokur"
}

const Page = () => {
  return (
    <div className={"page"}>
      <ParticlesBackground fullScreen={false}/>
      <div className={"projects-content"}>
        <div className={"projects-head"}>
          <h1>Projects</h1>
          <p>I enjoy building projects and practicing my engineering skills. I have an archive of the things I&apos;ve
            worked on as a way to showcase my progress and experience.</p>
        </div>
        <div className={"projects-main"}>
          {data.map(project => <ProjectCard key={project.title} project={project}/>)}
        </div>
      </div>
    </div>
  );
};

export default Page;