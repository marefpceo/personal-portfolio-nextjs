'use client'

import { RiCloseLargeFill } from "react-icons/ri";

export default function MenuModal({ open, closeMenuModal }) {
  const showMenu = open === true ? 'flex' : 'hidden';

  return (
    <div className={`${showMenu} bg-nature-dark/85  absolute min-h-full w-full z-50`}>
      <nav
        className={`absolute right-0 w-1/2 p-2 bg-nature-alt`}
      >
        <div>
          <RiCloseLargeFill
            className='absolute right-4 top-4 text-nature-accent' size={24}
            onClick={closeMenuModal}
          />
          <ul className='mx-4 mt-8 p-4 flex flex-col text-2xl gap-8 '>
            <li>About</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}