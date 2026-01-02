import Link from 'next/link'

export default function NavBar() {

  return (
    <nav className='hidden rounded-2xl h-5/6 w-2/5 md:flex bg-nature-alt'>
      <ul className='w-full flex gap-8 text-lg items-center justify-center [&>li]:w-full [&>li]:text-center
        [&>li]:hover:text-nature-accent'
      >
        <li><Link href='/#about'>About</Link></li>
        <li><Link href='#projects'>Projects</Link></li>
        <li><Link href='#contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}