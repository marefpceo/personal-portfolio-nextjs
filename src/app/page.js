'use client';

import { useState, useEffect, useRef } from 'react';

import Header from '@/sections/Header';
import MenuModal from '@/components/MenuModal';
import IntroHeroMobile from '@/components/IntroHeroMobile';
import AboutSection from '@/sections/AboutSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/sections/Footer';

import { sectionIds } from '@/utilities/sectionIds';

export default function Home() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const observerRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    function observerCallback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newHash = `#${entry.target.id}`;
          if (newHash === '#top') {
            window.history.replaceState(null, '', '/');
          } else {
            window.history.replaceState(null, '', newHash);
          }
          
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if(element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    }
  }, []);

  function openMenuModal() {
    setMenuModalOpen(true);
  }

  function closeMenuModal() {
    setMenuModalOpen(false);
  }

  return (
    <div className='flex flex-col min-h-screen items-center justify-center font-sans'>
      <div className='container max-w-5xl'>
        <main id={'top'} className='flex min-h-screen w-full flex-col justify-center'>
          <MenuModal open={menuModalOpen} closeMenuModal={closeMenuModal} />
          <Header openMenuModal={openMenuModal} />
          <div className='flex flex-1 justify-center items-center'>
            <IntroHeroMobile />
          </div>
        </main>
        <AboutSection id='about' />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
