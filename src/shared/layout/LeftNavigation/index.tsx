"use client";

import { useSidebarStore } from '@/shared/zustand/isOpenNavSidebarStore';
import FooterLeftBar from './FooterLeftBar';
import HeaderLeftBar from './HeaderLeftBar';
import { MainLeftBarContent } from './MainLeftBarContent';
import * as S from './styles';


const LeftNavigation = () => {
  const { isMinimizedSidebar } = useSidebarStore();

  return (
    <S.Container $isMinimized={isMinimizedSidebar}>
      <HeaderLeftBar />

      <MainLeftBarContent />

      <FooterLeftBar />
    </S.Container>
  );
};

export default LeftNavigation;