'use client'

import { useState } from 'react';

import MobileHeader from '@/components/MobileHeader';
import MenuModal from '@/components/MenuModal';
import IntroHeroMobile from '@/components/IntroHeroMobile';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  function openMenuModal() {
    setMenuModalOpen(true);
  };

  function closeMenuModal() {
    setMenuModalOpen(false);
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col justify-center">
        <MenuModal 
          open={menuModalOpen}
          closeMenuModal={closeMenuModal}
        />
        <MobileHeader 
          openMenuModal={openMenuModal}
        />
        <div className='flex flex-1 justify-center items-center'>
          <IntroHeroMobile />
        </div>
      </main>
      <AboutSection />
    </div>
  );
}
