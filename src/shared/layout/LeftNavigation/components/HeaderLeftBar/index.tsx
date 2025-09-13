"use client";

import logo from '../../../../../../public/logo.png';
import { LuMinimize2 } from "react-icons/lu";
import { useSidebarStore } from '@/shared/zustand/isOpenNavSidebarStore';
import { CgArrowsExpandRight } from "react-icons/cg";

import * as S from './styles';

const HeaderLeftBar = () => {
  const { toggleSidebar, isMinimizedSidebar } = useSidebarStore();

  return (
    <S.Container>
      <div>
        {!isMinimizedSidebar && (
          <S.LogoWrapper>
            <S.LogoImage src={logo} alt="Logo" className="logo" />
            <S.Title>Tesseract</S.Title>
          </S.LogoWrapper>
        )}
      </div>

      <S.ButtonNavSidebar
        isMinimized={isMinimizedSidebar}
        icon={
          !isMinimizedSidebar ? (
            <LuMinimize2 size={16} />
          ) : (
            <CgArrowsExpandRight size={16} />
          )
        }
        handleCategoryClick={toggleSidebar}
      />
    </S.Container>
  );
};

export default HeaderLeftBar;
