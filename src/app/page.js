import Image from "next/image";
import Logo1 from '../../public/Logo1.png';
import IntroHeroMobile from '@/components/IntroHeroMobile';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-nature-dark font-sans">
      <main className="border-2 flex min-h-screen w-full max-w-6xl flex-col items-center justify-center py-4 px-2 dark:bg-black sm:items-start">
        <Image 
          className='absolute top-5 left-5'
          loading='eager'
          src={Logo1}
          alt='test Image'
          width={120}
        />

        <IntroHeroMobile />
      </main>
    </div>
  );
}
