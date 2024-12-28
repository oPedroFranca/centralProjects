import Image from 'next/image';
import logo from '../../../../public/logo.png';

const HeaderLeftBar = () => {
  return (
    <div 
      className="h-[60px] border-gray-500 border-dotted flex items-center"
      style={{ borderBottomWidth: '2px', borderBottomStyle: 'dotted' }}
    >
      <Image src={logo} alt="Logo" className="h-10 w-10" />
      <h1 className='text-base font-medium tracking-wider'>Tesseract</h1>
    </div>
  )
};

export default HeaderLeftBar;