import Image from 'next/image'
import Link from 'next/link'
import linkedIn from '../../public/icons/linkedIn-dark.png' 
import github from '../../public/icons/github-dark.png'

export default function Footer() {

  return (
    <footer className='min-h-24 relative flex flex-col justify-center items-center bg-nature-light text-nature-dark'>
      <div className='my-4 flex gap-6'>
        <Link href={'https://www.github.com/marefpceo'} target='_blank'>
          <Image
            src={github}
            alt='Github contact button'
            width={25}
            height={'auto'}
          />
        </Link>
        <Link href={'https://www.linkedin.com/in/lamarstevens'} target='_blank'>
          <Image
            src={linkedIn}
            alt='LinkedIn contact button'
            width={25}
            height={'auto'}
          />
        </Link>
      </div>
      <p className='text-sm '>&copy; 2026 Lamar Stevens</p>
    </footer>
  )
}
