import ProjectCard from '@/components/ProjectCard';

export default function ProjectsSection () {

  return (
    <section id='projects' className='py-6 px-4 h-full flex flex-col gap-8 items-center bg-nature-alt text-nature-light'>
      <h2 className='text-center text-3xl'>Projects</h2>

      <ProjectCard 
        projectImage={'/image_placeholder.png'}
      />
      <ProjectCard 
        projectImage={'/image_placeholder.png'}
      />
      <ProjectCard 
        projectImage={'/image_placeholder.png'}
      />
      <ProjectCard 
        projectImage={'/image_placeholder.png'}
      />
     
    </section>
  );
}