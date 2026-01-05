import Image from 'next/image';

export default function ProjectCard({ projectImage }) {

  return (
    <div className='mt-2 p-4 w-4/5 min-h-3/5 flex flex-col items-center gap-4 border rounded-2xl bg-nature-light 
      text-nature-dark border-nature-accent shadow-sm shadow-nature-dark md:flex-row md:even:flex-row-reverse
      md:w-11/12' 
    >
      <Image 
        className='my-2 w-11/12 md:max-w-1/4 rounded-xl shadow-sm shadow-nature-alt'
        loading='eager'
        src={projectImage}
        alt={"placeholder"}
        width={960}
        height={746}
      />
      <div className="flex flex-col items-center">
        <h3 className='text-lg'>Project Title</h3>
        <span>(Tech stack text bubble)</span>
        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugiat, alias possimus voluptatibus hic velit!</p>
      </div>
    </div>
  )
}