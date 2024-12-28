import FooterLeftBar from './FooterLeftBar';
import HeaderLeftBar from './HeaderLeftBar';
import { MainLeftBarContent } from './MainLeftBarContent';

const LeftNavigation = () => {
  return (
    <div className='min-w-[250px] h-full p-2.5 pl-5 pr-5 flex flex-col'>
      <HeaderLeftBar />

      <MainLeftBarContent />

      <FooterLeftBar />
    </div>
  )
};

export default LeftNavigation;