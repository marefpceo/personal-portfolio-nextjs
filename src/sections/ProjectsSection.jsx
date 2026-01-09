import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/utilities/Carousel';
import Image from 'next/image';
import lastStopShop from '../../public/last_stop_shop.webp';

export default function ProjectsSection({ id }) {
  return (
    <section
      id={id}
      className='py-6 px-2 min-h-lvh flex flex-col gap-8 items-center 
    bg-nature-alt text-nature-light'
    >
      <h2 className='mb-8 text-center text-3xl'>Projects</h2>

      <div className='mb-16 flex flex-col items-center gap-16 not-md:hidden'>
        <ProjectCard projectImage={lastStopShop} />
        <ProjectCard projectImage={'/image_placeholder.png'} />
        <ProjectCard projectImage={'/image_placeholder.png'} />
        <ProjectCard projectImage={'/image_placeholder.png'} />
      </div>

      <div className='md:hidden w-full'>
        <Carousel>
          <div className='flex justify-center'>
            <ProjectCard projectImage={lastStopShop} />
          </div>
          <div className='flex justify-center'>
            <ProjectCard projectImage={'/image_placeholder.png'} />
          </div>
          <div className='flex justify-center'>
            <ProjectCard projectImage={'/image_placeholder.png'} />
          </div>
          <div className='flex justify-center'>
            <ProjectCard projectImage={'/image_placeholder.png'} />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
