export default function ContactSection() {
  return (
    <section id='contact' className='py-6 px-2 min-h-lvh flex flex-col items-center bg-nature-dark text-nature-light'>
      <h2 className='mb-8 text-center text-3xl'>Contact</h2>

      <div className='mt-10 w-3/4 flex flex-col gap-8'>
        <input type="text" name="subject" id="subject" className='bg-nature-light rounded-lg'/>
        <textarea name="message" id="message" cols="30" rows="10" className='bg-nature-light rounded-lg'></textarea>
      </div>

      <div className='mt-8'>
        <button type="button">Submit</button>
      </div>
    </section>
  );
}
