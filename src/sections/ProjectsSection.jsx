import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/utilities/Carousel';
import { projectList } from '@/utilities/projectList';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectsSection({ id }) {
  
  return (
    <section
      id={id}
      className='py-6 px-2 min-h-lvh flex flex-col gap-8 items-center 
    bg-nature-alt text-nature-light'
    >
      <h2 className='mb-8 text-center text-3xl'>Projects</h2>

      <div className='mb-16 flex flex-col items-center gap-16 not-md:hidden'>
      {
        projectList.map(project => (
          <ProjectCard 
            key={uuidv4()}
            projectTitle={project.projectTitle} 
            projectImage={project.projectImage} 
            projectDescription={project.projectDescription}
            techStack={project.techStack}
            projectLinks={project.projectLinks}
          />
        ))
      }
      </div>

      <div className='md:hidden w-full'>
        <Carousel>
          {
            projectList.map(project => (
              <div className="flex justify-center" key={uuidv4()}>
                <ProjectCard
                  projectTitle={project.projectTitle}
                  projectImage={project.projectImage}
                  projectDescription={project.projectDescription}
                  techStack={project.techStack}
                  projectLinks={project.projectLinks}
                />
              </div>
            ))
          }
        </Carousel>
      </div>
    </section>
  );
}
