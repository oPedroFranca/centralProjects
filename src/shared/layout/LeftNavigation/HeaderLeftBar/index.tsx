"use client";

import logo from '../../../../../public/logo.png';
import { LuMinimize2 } from "react-icons/lu";
import * as S from './styles';

const HeaderLeftBar = () => {
  const handleCategoryClick = () => {
    console.log('minimized');
  };

  return (
    <S.Container>
      <S.LogoWrapper>
        <S.LogoImage src={logo} alt="Logo" className="logo" />
        <S.Title>Tesseract</S.Title>
      </S.LogoWrapper>

      <S.ButtonNavSidebar
        isMinimized={false}
        icon={<LuMinimize2 size={16} />}
        handleCategoryClick={handleCategoryClick}
      />
    </S.Container>
  );
};

export default HeaderLeftBar;
