import ProjectCard from '@/components/ProjectCard';

export default function ProjectsSection () {

  return (
    <section id='projects' className='py-6 px-4 flex flex-col flex-1 bg-nature-alt text-nature-light'>
      <h2 className='text-center text-3xl'>Projects</h2>

      <ProjectCard />
    </section>
  );
}