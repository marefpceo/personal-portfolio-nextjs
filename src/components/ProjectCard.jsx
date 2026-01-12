'use client'

import Image from 'next/image';
import TechTextBubble from './TechTextBubble';

export default function ProjectCard({ projectTitle, projectImage, projectDescription, techStack, projectSourceCode, projectUrl }) {
  return (
    <div
      className='mt-2 p-4 max-w-11/12 min-h-3/5 flex flex-col items-center gap-4 border rounded-2xl bg-nature-light 
      text-nature-dark border-nature-accent shadow-sm shadow-nature-dark md:flex-row md:even:flex-row-reverse
      md:w-11/12'
    >
      <Image
        className='my-2 w-11/12 md:max-w-1/4 rounded-sm shadow-sm shadow-nature-alt'
        loading='eager'
        src={projectImage}
        alt={'placeholder'}
        width={960}
        height={746}
      />
      <div className='flex flex-col gap-3 items-center'>
        <h3 className='text-xl'>{projectTitle}</h3>
        <span className='flex gap-4 flex-wrap'>
          <TechTextBubble text={'Test 1'} />
          <TechTextBubble text={'Test 2'} />
          <TechTextBubble text={'Test 3'} />
        </span>
        <p className='text-center text-sm'>
          {projectDescription}
        </p>
      </div>
    </div>
  );
}
