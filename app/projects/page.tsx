import ParticlesBackground from "../../components/particles-background";
import ProjectCard from "../../components/project-card";
import data from "../../projects/data";

const Page = () => {
  return (
    <div className={"page"}>
      <ParticlesBackground fullScreen={false}/>
      <div className={"projects-content"}>
        <div className={"projects-head"}>
          <h1>Projects</h1>
          <p>I love building projects and practice my engineering skills, here&apos;s an archive of things that I&apos;ve worked on.</p>
        </div>
        <div className={"projects-main"}>
          {/*<ProjectCard*/}
          {/*  image={"as"}*/}
          {/*  title={"Just Anime"}*/}
          {/*  githubLink={"github.com"}*/}
          {/*  link={"github.com"}*/}
          {/*  technologiesUsed={["React", "Django"]}*/}
          {/*  description={"Description"}*/}
          {/*/>*/}
          {/*<ProjectCard*/}
          {/*  image={"as"}*/}
          {/*  title={"Just Anime2222"}*/}
          {/*  githubLink={"github.com"}*/}
          {/*  technologiesUsed={["React", "Django"]}*/}
          {/*  description={"Description"}*/}
          {/*/>*/}
          {data.map(project => <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              githubLink={project.githubLink}
              link={project.link}
              technologiesUsed={project.technologiesUsed}
              description={project.description}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;