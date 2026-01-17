import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import htmlIcon from '../../public/icons/HTML5.svg';
import cssIcon from '../../public/icons/CSS3.svg';
import javascriptIcon from '../../public/icons/JavaScript.svg';
import nodeIcon from '../../public/icons/Node.js.svg';
import reactIcon from '../../public/icons/React.svg';
import viteIcon from '../../public/icons/Vite.js.svg';
import nextIcon from '../../public/icons/Next.js.svg';
import postgresIcon from '../../public/icons/PostgresSQL.svg';
import tailwindIcon from '../../public/icons/Tailwind CSS.svg';
import gitIcon from '../../public/icons/Git.svg';

export default function TechStackDiv() {
  const icons = [
    htmlIcon,
    cssIcon,
    javascriptIcon,
    nodeIcon,
    reactIcon,
    viteIcon,
    nextIcon,
    postgresIcon,
    tailwindIcon,
    gitIcon,
  ];

  return (
    <div
      className='my-8 p-8 w-3/4 grid grid-cols-3 gap-6 border rounded-2xl border-nature-accent/25
      justify-center items-center md:grid-cols-5'
    >
      {icons.map((icon) => (
        <Image key={uuidv4()} src={icon} alt={`${icon} icon`} width={64} />
      ))}
    </div>
  );
}
