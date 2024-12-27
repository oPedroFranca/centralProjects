import { Header, LeftNavigation, MainContent } from '@/layout';

export default function Home() {
  return (
    <div className='flex h-screen w-screen'>
      <LeftNavigation />

      <div 
        className='w-full h-full m-1.5 border border-gray-500 rounded-2xl'
        style={{height: 'calc(100% - 10px)'}}
      >
        <Header />

        <MainContent />
      </div>
    </div>
  );
}
