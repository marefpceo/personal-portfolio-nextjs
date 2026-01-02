export default function NavBar() {

  return (
    <nav className='hidden rounded-2xl h-5/6 w-2/5 md:flex bg-nature-alt'>
      <ul className='w-full flex gap-8 text-lg items-center justify-center [&>li]:w-full [&>li]:text-center
        [&>li]:hover:text-nature-accent'
      >
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}