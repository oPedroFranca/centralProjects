"use client";;
import logo from '../../../../../../public/logo.png';
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { useSidebarStore } from '@/shared/zustand';

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
        disableThreeDots
        icon={
          !isMinimizedSidebar ? (
            <GoSidebarExpand size={16} />
          ) : (
            <GoSidebarCollapse size={16} />
          )
        }
        handleCategoryClick={toggleSidebar}
      />
    </S.Container>
  );
};

export default HeaderLeftBar;
