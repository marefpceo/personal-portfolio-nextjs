import Button from '@/components/Button';

export default function ContactSection({ id }) {
  return (
    <section id={id} className='py-6 px-2 min-h-lvh flex flex-col items-center bg-nature-dark text-nature-light'>
      <h2 className='mb-8 text-center text-3xl'>Contact</h2>

      <div className='mt-10 flex flex-col gap-8'>
        <label htmlFor="subject" className='flex flex-col'>Subject
          <input type="text" name="subject" id="subject" className='bg-nature-light rounded-lg'/>
        </label>
        <label htmlFor="message" className='flex flex-col'>Message
          <textarea name="message" id="message" cols="30" rows="10" className='p-4 bg-nature-light text-nature-dark rounded-lg'></textarea>
        </label>
      </div>

      <div className='mt-8'>
        <Button
          style={'p-1 w-28 rounded-lg bg-nature-alt text-nature-light border-nature-accent/75 border'}
        >Submit</Button>
      </div>
    </section>
  );
}
