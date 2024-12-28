
const FooterLeftBar = () => {
  return (
    <div 
      className="h-[40px] border-gray-500 flex justify-center items-center mt-auto"
    >
      <div className='text-xs text-gray-400 font-semibold flex'>
        <p>created by</p>
        <a 
          href="https://www.linkedin.com/in/pedro-henrique-frança/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='cursor-pointer ml-1 text-purple-200'
        >
          Tesseract
        </a>
      </div>
    </div>
  )
};

export default FooterLeftBar;