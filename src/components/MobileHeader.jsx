'use client'

import Image from "next/image";
import Logo1 from '../../public/Logo1.svg';
import { RxHamburgerMenu } from 'react-icons/rx'

export default function MobileHeader() {

  return (
    <header className='p-1 flex justify-between'>
      <Image
        loading='eager'
        src={Logo1}
        alt='test Image'
        width={120}
      />
      <RxHamburgerMenu 
        className='text-nature-light size-6 mx-6 my-2' 
        onClick={() => {console.log('Toggle Menu')}}
      />
    </header>
  )
}