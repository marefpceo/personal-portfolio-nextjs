import MobileHeader from '@/components/MobileHeader';
import IntroHeroMobile from '@/components/IntroHeroMobile';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col justify-center py-4 px-2 ">
        <MobileHeader />
        <div className='flex flex-1 justify-center items-center'>
          <IntroHeroMobile />
        </div>
      </main>
      <AboutSection />
    </div>
  );
}
