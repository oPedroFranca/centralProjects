import FooterLeftBar from './FooterLeftBar';
import HeaderLeftBar from './HeaderLeftBar';
import { MainLeftBarContent } from './MainLeftBarContent';

const LeftNavigation = () => {
  return (
    <div className='min-w-[250px] pl-5 pr-5 fixed left-0 top-0 h-full bg-background/30 backdrop-blur-xl border-r border-white/10 transition-all duration-300 ease-in-out flex flex-col z-50'>
      <HeaderLeftBar />

      <MainLeftBarContent />

      <FooterLeftBar />
    </div>
  )
};

export default LeftNavigation;