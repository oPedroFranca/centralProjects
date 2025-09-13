"use client";

import { useSidebarStore } from '@/shared/zustand/isOpenNavSidebarStore';
import HeaderLeftBar from './components/HeaderLeftBar';
import { MainLeftBarContent } from './components/MainLeftBarContent';
import FooterLeftBar from './components/FooterLeftBar';

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