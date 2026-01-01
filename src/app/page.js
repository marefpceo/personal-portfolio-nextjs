import Image from "next/image";
import Logo1 from '../../public/Logo1.png';
import IntroHeroMobile from '@/components/IntroHeroMobile';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-nature-dark font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-center py-4 px-2 ">
        <Image 
          className='absolute top-5 left-5'
          loading='eager'
          src={Logo1}
          alt='test Image'
          width={120}
        />

        <IntroHeroMobile />
      </main>
      <AboutSection />
    </div>
  );
}
