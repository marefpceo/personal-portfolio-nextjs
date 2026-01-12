'use client'

import Link from 'next/link';
import Image from 'next/image';
import TextBubble from './TextBubble';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectCard({ projectTitle, projectImage, projectDescription, techStack, projectLinks }) {
  return (
    <div
      className='mt-2 p-4 max-w-11/12 min-h-3/5 flex flex-col items-center gap-4 border rounded-2xl bg-nature-light 
      text-nature-dark border-nature-accent shadow-sm shadow-nature-dark md:grid md:grid-cols-3
      md:w-11/12 md:h-60'
    >
      <div className='md:flex md:flex-col md:items-center md:self-start'>
        <Image
          className='my-2 w-11/12 md:max-w-48 md:max-h-32 rounded-sm shadow-sm shadow-nature-alt'
          loading='eager'
          src={projectImage}
          alt={'placeholder'}
          width={960}
          height={746}
        />
        <span className='not-sm:hidden mt-4 flex gap-2'>
          {
            projectLinks.map(links => (
              <Link 
                key={uuidv4()}
                href={links.url}
                target='_blank'
              >
                <TextBubble
                  text={links.name}
                  bgColor={'bg-nature-accent'}
                  textColor={'text-nature-dark'}
                />
              </Link>
            ))
          }
        </span>
      </div>
      <div className='flex flex-col justify-center text-center md:grid md:grid-rows-2 md:self-start
        md:col-span-2 md:gap-2'
      >
        <h3 className='text-2xl'>{projectTitle}</h3>
        <span className='my-2 flex gap-2 flex-wrap justify-center'>
        {
          techStack.map(tech => (
            <TextBubble 
              key={uuidv4()}
              text={tech} 
              bgColor={'bg-nature-alt'}
              textColor={'text-nature-light'}
            />
          ))
        }
        </span>
        <p className='my-2 text-center text-sm overflow-y-scroll'>
          {projectDescription}
        </p>
        <span className='flex flex-col gap-2 md:hidden md:mt-2'>
          {
            projectLinks.map(links => (
              <Link 
                key={uuidv4()}
                href={links.url}
                target='_blank'
              >
                <TextBubble
                  text={links.name}
                  bgColor={'bg-nature-accent'}
                  textColor={'text-nature-dark'}
                />
              </Link>
            ))
          }
        </span>
      </div>
    </div>
  );
}
