import { Header, LeftNavigation, MainContent } from '@/layout';

export default function Home() {
  return (
    <div className='flex h-screen w-screen'>
      <LeftNavigation />

      <div 
        className='w-full h-full m-2 ml-0 border border-gray-500 rounded-2xl'
        style={{height: 'calc(100% - 18px)'}}
      >
        <Header />

        <MainContent />
      </div>
    </div>
  );
}
