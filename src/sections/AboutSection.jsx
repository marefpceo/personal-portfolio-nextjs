import TechStackDiv from '@/components/TechStackDiv';

export default function AboutSection({ id }) {
  return (
    <section
      id={id}
      className='py-6 px-4 min-h-lvh flex flex-col gap-8 items-center bg-nature-light 
      min-w-full text-nature-dark text-center'
    >
      <h2 className='text-3xl mt-4'>About</h2>
      <div className='about-body px-8 space-y-6 [&*]:text-left [&*]:font-sans [&*]:text-lg'>
        <p>
          I’m a Full Stack Web Developer and Computer Science graduate with a strong foundation in building modern, scalable web applications. As a military veteran, I bring a disciplined, mission-focused mindset to every project—valuing teamwork, accountability, and clear execution.
        </p>
        <p>
          I specialize in developing responsive, high-performance applications using React, Node.js, and PostgreSQL. My experience spans both frontend and backend development, allowing me to design intuitive user interfaces while also building robust APIs and databases behind the scenes.
        </p>
        <p>I thrive in fast-paced environments, enjoy solving complex problems, and take pride in writing clean, maintainable code. Whether collaborating with a team or working independently, my goal is to deliver reliable, user-focused solutions that make an impact.</p>
      </div>

      <TechStackDiv />
    </section>
  );
}
