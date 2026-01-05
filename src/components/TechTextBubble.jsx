export default function TechTextBubble({ text }) {
  return (
    <div className='rounded-4xl min-w-12 h-6 flex items-center justify-center bg-nature-dark text-nature-light'>
      <p className='p-2 text-sm'>{text}</p>
    </div>
  );
}
