export default function TechTextBubble({ text, bgColor, textColor }) {
  return (
    <div className={`rounded-4xl min-w-12 h-6 flex items-center justify-center ${bgColor} ${textColor} text-nature-light`}>
      <p className='p-2 text-sm'>{text}</p>
    </div>
  );
}
