'use client'

import Image from "next/image";
import Logo1 from '../../public/Logo1.svg';
import { RxHamburgerMenu } from 'react-icons/rx'
import NavBar from './NavBar';

export default function Header({ openMenuModal }) {

  return (
    <header className='pt-8 px-2 flex justify-between items-center'>
      <Image
        loading='eager'
        src={Logo1}
        alt='test Image'
        width={75}
      />
      <RxHamburgerMenu 
        className='text-nature-light size-6 mx-6 my-2 md:hidden' 
        onClick={openMenuModal}
      />
      <NavBar />
    </header>
  )
}