export default function TechTextBubble({ text }) {
  return (
    <div className='rounded-4xl w-12 h-6 flex items-center justify-center bg-nature-dark text-nature-light'>
      <p className='text-sm'>{text}</p>
    </div>
  );
}
