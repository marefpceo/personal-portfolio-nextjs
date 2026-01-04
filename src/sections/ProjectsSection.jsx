import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/utilities/Carousel';

export default function ProjectsSection () {

  return (
    <section id='projects' className='py-6 px-2 h-lvh flex flex-col gap-8 items-center bg-nature-alt text-nature-light'>
      <h2 className='text-center text-3xl'>Projects</h2>

      <Carousel>
        <div className="flex justify-center">
          <ProjectCard
            projectImage={'/image_placeholder.png'}
          />
        </div>
        <div className="flex justify-center">
          <ProjectCard
            projectImage={'/image_placeholder.png'}
          />
        </div>
         <div className="flex justify-center">
          <ProjectCard
            projectImage={'/image_placeholder.png'}
          />
        </div>
         <div className="flex justify-center">
          <ProjectCard
            projectImage={'/image_placeholder.png'}
          />
        </div>
      </Carousel>
     
    </section>
  );
}