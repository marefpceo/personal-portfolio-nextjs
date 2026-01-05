'use client';

import { useState } from 'react';

import Header from '@/sections/Header';
import MenuModal from '@/components/MenuModal';
import IntroHeroMobile from '@/components/IntroHeroMobile';
import AboutSection from '@/sections/AboutSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  function openMenuModal() {
    setMenuModalOpen(true);
  }

  function closeMenuModal() {
    setMenuModalOpen(false);
  }

  return (
    <div className='flex flex-col min-h-screen items-center justify-center font-sans'>
      <div className='container max-w-5xl'>
        <main className='flex min-h-screen w-full flex-col justify-center'>
          <MenuModal open={menuModalOpen} closeMenuModal={closeMenuModal} />
          <Header openMenuModal={openMenuModal} />
          <div className='flex flex-1 justify-center items-center'>
            <IntroHeroMobile />
          </div>
        </main>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
