import Image from 'next/image';
import logo from '../../../../../public/logo.png';
import * as S from './styles';

const HeaderLeftBar = () => {
  return (
    <S.Container>
      <S.Logo>
        <Image src={logo} alt="Logo" className="h-full w-full object-contain" />
      </S.Logo>
      <S.Title>Tesseract</S.Title>
    </S.Container>
  );
};

export default HeaderLeftBar;
