import { Header, LeftNavigation, MainContent } from '@/layout';

export default function Home() {
  return (
    <div className='flex h-screen w-screen'>
      <LeftNavigation />

      <div className='w-full'>
        <Header />

        <MainContent />
      </div>
    </div>
  );
}
