import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/utilities/Carousel';
import useWindowWidth from '@/utilities/useWindowWidth';

export default function ProjectsSection () {
  const width = useWindowWidth();

  return (
    <section id='projects' className='py-6 px-2 h-lvh flex flex-col gap-8 items-center bg-nature-alt text-nature-light'>
      <h2 className='mb-8 text-center text-3xl'>Projects</h2>

      {
        width > 767 ? (
          <div>
            <ProjectCard
              projectImage={'/image_placeholder.png'}
            />
            <ProjectCard
              projectImage={'/image_placeholder.png'}
            />
            <ProjectCard
              projectImage={'/image_placeholder.png'}
            />
          </div>
        ) : (
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
        )
      }
    </section>
  );
}